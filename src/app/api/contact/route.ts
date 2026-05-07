import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { buildContactEmailHtml } from "@/lib/email-templates";
import { contactSchema } from "@/lib/contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting store (in-memory — use Redis/KV in production for multi-instance)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 5;

  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= maxRequests) return false;

  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    // Parse body
    const body = await request.json();

    // Validate with Zod
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 422 },
      );
    }

    const data = parsed.data;
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "noreply@advantage.ng";
    const toEmail = process.env.CONTACT_RECEIVE_EMAIL ?? "ekonge903@gmail.com";

    // Send confirmation to the user (non-blocking — don't fail the request if this fails)
    resend.emails
      .send({
        from: `Advantage™ <${fromEmail}>`,
        to: toEmail,
        subject: `New Website Enquiry ✓`,
        html: buildContactEmailHtml(data),
      })
      .catch((err) => console.error("Confirmation email error:", err));

    return NextResponse.json(
      { success: true, message: "Message sent successfully." },
      { status: 200 },
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}

// Block other methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
