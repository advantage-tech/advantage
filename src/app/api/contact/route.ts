import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
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

    const { name, email, message } = parsed.data
    const toEmail = process.env.CONTACT_RECEIVE_EMAIL ?? 'info@advantageng.com'
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'noreply@advantageng.com'

    // Notify the team
    await resend.emails.send({
      from: `Advantage Website <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0f1117;color:#f2f2f2;padding:32px;border-radius:8px">
          <h2 style="color:#4A8EF5;font-size:18px;margin-bottom:24px">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#4A8EF5">${email}</a></p>
          <div style="margin-top:16px;padding:16px;background:#1a1f2e;border-radius:6px;border-left:3px solid #4A8EF5">
            <p style="margin:0;white-space:pre-wrap">${message}</p>
          </div>
          <p style="margin-top:24px;color:#555;font-size:12px">Sent via advantageng.com contact form</p>
        </div>
      `,
    })

    // Auto-reply to sender (non-blocking)
    resend.emails.send({
      from: `Advantage <${fromEmail}>`,
      to: [email],
      subject: 'We received your message',
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0f1117;color:#f2f2f2;padding:32px;border-radius:8px">
          <h2 style="color:#4A8EF5">Hi ${name},</h2>
          <p style="color:#aaa;line-height:1.7">Thank you for reaching out to Advantage. A member of our team will respond to your message within 24 hours.</p>
          <p style="color:#aaa;line-height:1.7">In the meantime, feel free to explore our work at <a href="https://advantageng.com" style="color:#4A8EF5">advantageng.com</a>.</p>
          <p style="color:#555;margin-top:32px;font-size:13px">Best regards,<br/><strong style="color:#f2f2f2">The Advantage Team</strong></p>
        </div>
      `,
    }).catch(console.error)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
