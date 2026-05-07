import {
  ConsultationFormData,
  serviceLabels,
  budgetLabels,
} from "./consultation-schema";
import { ContactFormData } from "./contact-schema";

export function buildTeamEmailHtml(data: ConsultationFormData): string {
  const serviceName = serviceLabels[data.service];
  const budgetName = data.budget ? budgetLabels[data.budget] : "Not specified";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: 'DM Sans', Arial, sans-serif; background: #f4f6fa; margin: 0; padding: 24px; color: #1a1f2e; }
    .card { background: #fff; border-radius: 12px; padding: 32px; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; }
    .header { border-bottom: 1px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 24px; }
    .badge { display: inline-block; background: #eff6ff; color: #4a8ef5; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 100px; margin-bottom: 12px; }
    h1 { font-size: 22px; font-weight: 600; margin: 0; color: #1a1f2e; }
    .row { display: flex; gap: 8px; margin-bottom: 12px; }
    .label { font-size: 12px; color: #8892a4; min-width: 120px; padding-top: 1px; }
    .value { font-size: 14px; color: #1a1f2e; font-weight: 500; }
    .message-box { background: #f4f6fa; border-radius: 8px; padding: 16px; margin-top: 20px; font-size: 14px; line-height: 1.7; color: #1a1f2e; }
    .footer { text-align: center; margin-top: 24px; font-size: 12px; color: #8892a4; }
    a { color: #4a8ef5; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="badge">New Contact Form Submission</div>
      <h1>You have a new lead from your website</h1>
    </div>

    <div class="row"><span class="label">Name</span><span class="value">${data.fullName}</span></div>
    <div class="row"><span class="label">Email</span><span class="value"><a href="mailto:${data.email}">${data.email}</a></span></div>
    <div class="row"><span class="label">Phone</span><span class="value">${data.phone || "Not provided"}</span></div>
    <div class="row"><span class="label">Company</span><span class="value">${data.company || "Not provided"}</span></div>
    <div class="row"><span class="label">Service Interest</span><span class="value">${serviceName}</span></div>
    <div class="row"><span class="label">Budget Range</span><span class="value">${budgetName}</span></div>

    <div class="message-box">
      <strong style="font-size:12px;color:#8892a4;display:block;margin-bottom:8px;">MESSAGE</strong>
      ${data.message.replace(/\n/g, "<br/>")}
    </div>

    <div class="footer">
      Sent via Advantage™ website contact form · <a href="https://www.advantageng.com">www.advantageng.com</a>
    </div>
  </div>
</body>
</html>
`;
}

export function buildConsultationEmailResponseHtml(
  data: ConsultationFormData,
): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: 'DM Sans', Arial, sans-serif; background: #f4f6fa; margin: 0; padding: 24px; color: #1a1f2e; }
    .card { background: #fff; border-radius: 12px; padding: 40px; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; }
    .logo { font-size: 22px; font-weight: 700; color: #1a1f2e; margin-bottom: 28px; }
    .logo span { color: #4a8ef5; }
    h1 { font-size: 24px; font-weight: 600; margin-bottom: 12px; }
    p { font-size: 15px; line-height: 1.7; color: #8892a4; margin-bottom: 16px; }
    .highlight { background: #f4f6fa; border-left: 3px solid #4a8ef5; border-radius: 0 8px 8px 0; padding: 16px 20px; margin: 24px 0; font-size: 14px; color: #1a1f2e; }
    .cta { display: inline-block; background: #4a8ef5; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; margin-top: 8px; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #8892a4; }
    a { color: #4a8ef5; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">Ad<span>✓</span>antage<span style="color:#4a8ef5">.</span>™</div>

    <h1>Thanks, ${data.fullName} — we got your message!</h1>
    <p>
      We've received your enquiry and our team will review it shortly. You can expect to hear from us within <strong style="color:#1a1f2e">1 business day</strong>.
    </p>

    <div class="highlight">
      <strong>Your request summary</strong><br/>
      Service: ${serviceLabels[data.service]}<br/>
      ${data.company ? `Company: ${data.company}<br/>` : ""}
      Submitted: ${new Date().toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" })}
    </div>

    <p>While you wait, feel free to explore our work and read our latest insights:</p>
    <a class="cta" href="https:www.advantageng.com/blog">Read Our Blog →</a>

    <div class="footer">
      You're receiving this because you submitted a contact form at <a href="https://www.advantageng.com">www.advantageng.com</a>.<br/>
      Advantage™ · Plot 430, Ali Muhammad Zara Street, Central Business District, FCT Abuja
    </div>
  </div>
</body>
</html>
`;
}

export function buildContactEmailHtml(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
  <style>
    body {
      margin: 0;
      padding: 24px;
      background: #f4f6fa;
      font-family: 'DM Sans', Arial, sans-serif;
      color: #1a1f2e;
    }

    .wrapper {
      max-width: 600px;
      margin: 0 auto;
    }

    .card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      padding: 32px;
    }

    .badge {
      display: inline-block;
      background: #eff6ff;
      color: #2563eb;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 6px 12px;
      border-radius: 999px;
      margin-bottom: 18px;
    }

    h1 {
      margin: 0;
      font-size: 24px;
      line-height: 1.3;
      font-weight: 700;
      color: #111827;
    }

    .subtitle {
      margin-top: 10px;
      font-size: 14px;
      line-height: 1.7;
      color: #6b7280;
    }

    .section {
      margin-top: 32px;
    }

    .label {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #94a3b8;
      margin-bottom: 8px;
    }

    .value {
      font-size: 15px;
      line-height: 1.7;
      color: #111827;
      font-weight: 500;
    }

    .message-box {
      margin-top: 12px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 18px;
      font-size: 15px;
      line-height: 1.8;
      color: #1e293b;
      white-space: pre-wrap;
    }

    a {
      color: #2563eb;
      text-decoration: none;
    }

    .footer {
      text-align: center;
      margin-top: 28px;
      font-size: 12px;
      color: #94a3b8;
      line-height: 1.6;
    }

    @media only screen and (max-width: 640px) {
      body {
        padding: 12px;
      }

      .card {
        padding: 24px;
      }

      h1 {
        font-size: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      <div class="badge">New Website Enquiry</div>

      <h1>New message from your website</h1>

      <p class="subtitle">
        Someone submitted the contact form on Advantage™.
      </p>

      <div class="section">
        <div class="label">Name</div>
        <div class="value">${data.name}</div>
      </div>

      <div class="section">
        <div class="label">Email Address</div>
        <div class="value">
          <a href="mailto:${data.email}">
            ${data.email}
          </a>
        </div>
      </div>

      <div class="section">
        <div class="label">Message</div>

        <div class="message-box">
          ${data.message.replace(/\n/g, "<br />")}
        </div>
      </div>

      <div class="footer">
        Sent via Advantage™ website contact form<br />
        <a href="https://www.advantageng.com">
          www.advantageng.com
        </a>
      </div>
    </div>
  </div>
</body>
</html>
`;
}
