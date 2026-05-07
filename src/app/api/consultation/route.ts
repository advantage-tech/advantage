import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  industry: z.string().min(1),
  service: z.string().min(1),
  target: z.string().optional(),
  details: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsed.error.flatten().fieldErrors },
        { status: 422 }
      )
    }

    const { name, email, industry, service, target, details } = parsed.data
    const toEmail = process.env.CONTACT_RECEIVE_EMAIL ?? 'info@advantageng.com'
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'noreply@advantageng.com'

    // Team notification
    await resend.emails.send({
      from: `Advantage Website <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Consultation Request — ${service} (${industry})`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0f1117;color:#f2f2f2;padding:32px;border-radius:8px">
          <h2 style="color:#4A8EF5;font-size:18px;margin-bottom:24px">New Consultation Request</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#888;width:140px">Name</td><td style="padding:8px 0">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#888">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#4A8EF5">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888">Industry</td><td style="padding:8px 0">${industry}</td></tr>
            <tr><td style="padding:8px 0;color:#888">Service</td><td style="padding:8px 0">${service}</td></tr>
            <tr><td style="padding:8px 0;color:#888">Goal</td><td style="padding:8px 0">${target ?? 'Not specified'}</td></tr>
          </table>
          ${details ? `<div style="margin-top:16px;padding:16px;background:#1a1f2e;border-radius:6px;border-left:3px solid #4A8EF5"><p style="margin:0;color:#ccc">${details}</p></div>` : ''}
          <p style="margin-top:24px;color:#555;font-size:12px">Sent via advantageng.com consultation form</p>
        </div>
      `,
    })

    // Confirmation to submitter
    resend.emails.send({
      from: `Advantage <${fromEmail}>`,
      to: [email],
      subject: 'Consultation Request Received — Advantage',
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0f1117;color:#f2f2f2;padding:32px;border-radius:8px">
          <h2 style="color:#4A8EF5">Consultation Initiated</h2>
          <p style="color:#aaa;line-height:1.7">Hi ${name}, thank you for configuring your solution request.</p>
          <div style="margin:24px 0;padding:16px;background:#1a1f2e;border-radius:6px">
            <p style="color:#888;font-size:12px;margin-bottom:4px">YOUR REQUEST SUMMARY</p>
            <p style="margin:4px 0">Industry: <strong>${industry}</strong></p>
            <p style="margin:4px 0">Service: <strong>${service}</strong></p>
            ${target ? `<p style="margin:4px 0">Goal: <strong>${target}</strong></p>` : ''}
          </div>
          <p style="color:#aaa;line-height:1.7">Our team will analyse your requirements and reach out within <strong style="color:#f2f2f2">48 hours</strong> with a strategic proposal tailored to your industry.</p>
          <p style="color:#555;margin-top:32px;font-size:13px">The Advantage Team<br/><a href="https://advantageng.com" style="color:#4A8EF5">advantageng.com</a></p>
        </div>
      `,
    }).catch(console.error)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Consultation API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
