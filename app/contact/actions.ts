"use server";

import { Resend } from "resend";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address.").max(254, "Email address is too long."),
  phone: z.string().trim().max(30, "Phone number is too long."),
  company: z.string().trim().max(120, "Organisation name is too long."),
  topic: z.enum(["Business partnership", "Investment opportunity", "Media enquiry", "General enquiry"], {
    error: "Please choose an enquiry type.",
  }),
  message: z.string().trim().min(10, "Please tell us a little more.").max(5000, "Message is too long."),
  website: z.string().max(200).optional(),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "phone" | "company" | "topic" | "message", string>>;
};

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

function buildEmailHtml({
  name,
  email,
  phone,
  company,
  topic,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  company: string;
  topic: string;
  message: string;
}) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New ELENOI enquiry</title>
  </head>
  <body style="margin:0;background-color:#f2f4f1;color:#121316;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      New ${topic} enquiry from ${name}.
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f2f4f1;">
      <tr>
        <td align="center" style="padding:40px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;">
            <tr>
              <td style="background-color:#121316;padding:36px 40px 32px;">
                <div style="color:#70bd87;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;">Website enquiry</div>
                <h1 style="color:#e2e4e6;font-family:Georgia,'Times New Roman',serif;font-size:32px;font-weight:normal;line-height:40px;margin:14px 0 0;">${topic}</h1>
              </td>
            </tr>
            <tr>
              <td style="background-color:#ffffff;padding:34px 40px 40px;">
                <p style="color:#62686c;font-size:14px;line-height:24px;margin:0 0 26px;">A new enquiry has been submitted through the ELENOI website.</p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top:1px solid #e3e6e4;">
                  <tr><td style="border-bottom:1px solid #e3e6e4;padding:13px 0;color:#7b8185;font-size:11px;letter-spacing:1px;text-transform:uppercase;width:34%;">Name</td><td style="border-bottom:1px solid #e3e6e4;padding:13px 0;color:#121316;font-size:14px;">${name}</td></tr>
                  <tr><td style="border-bottom:1px solid #e3e6e4;padding:13px 0;color:#7b8185;font-size:11px;letter-spacing:1px;text-transform:uppercase;">Email</td><td style="border-bottom:1px solid #e3e6e4;padding:13px 0;font-size:14px;"><a href="mailto:${email}" style="color:#1e7d42;text-decoration:none;">${email}</a></td></tr>
                  <tr><td style="border-bottom:1px solid #e3e6e4;padding:13px 0;color:#7b8185;font-size:11px;letter-spacing:1px;text-transform:uppercase;">Phone</td><td style="border-bottom:1px solid #e3e6e4;padding:13px 0;color:#121316;font-size:14px;">${phone}</td></tr>
                  <tr><td style="border-bottom:1px solid #e3e6e4;padding:13px 0;color:#7b8185;font-size:11px;letter-spacing:1px;text-transform:uppercase;">Organisation</td><td style="border-bottom:1px solid #e3e6e4;padding:13px 0;color:#121316;font-size:14px;">${company}</td></tr>
                </table>
                <div style="color:#7b8185;font-size:11px;font-weight:bold;letter-spacing:1px;margin:30px 0 10px;text-transform:uppercase;">Message</div>
                <div style="background-color:#f2f4f1;border-left:3px solid #1e7d42;color:#34393d;font-size:14px;line-height:25px;padding:18px 20px;">${message}</div>
                <p style="color:#7b8185;font-size:12px;line-height:20px;margin:28px 0 0;">Reply directly to this email to respond to ${name}.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 4px 0;color:#7b8185;font-size:11px;line-height:18px;">
                ELENOI Nig. Ltd &middot; Enterprise for lasting progress<br />
                This message was sent from the ELENOI website contact form.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = enquirySchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && field in enquirySchema.shape && !fieldErrors[field as keyof NonNullable<ContactFormState["fieldErrors"]>]) {
        fieldErrors[field as keyof NonNullable<ContactFormState["fieldErrors"]>] = issue.message;
      }
    }
    return { status: "error", message: "Please review the highlighted fields.", fieldErrors };
  }

  // Quietly accept honeypot submissions without sending them.
  if (parsed.data.website) return { status: "success", message: "Your enquiry has been received." };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "elenoi.nig.ltd@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "ELENOI Website <onboarding@resend.dev>";

  if (!apiKey) {
    return { status: "error", message: "The enquiry service is not configured yet. Please email elenoi.nig.ltd@gmail.com directly." };
  }

  const resend = new Resend(apiKey);
  const name = escapeHtml(parsed.data.name);
  const email = escapeHtml(parsed.data.email);
  const phone = escapeHtml(parsed.data.phone || "Not provided");
  const company = escapeHtml(parsed.data.company || "Not provided");
  const topic = escapeHtml(parsed.data.topic);
  const message = escapeHtml(parsed.data.message).replace(/\n/g, "<br />");

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: parsed.data.email,
      subject: `New ELENOI enquiry: ${parsed.data.topic}`,
      text: [
        `Name: ${parsed.data.name}`,
        `Email: ${parsed.data.email}`,
        `Phone: ${parsed.data.phone || "Not provided"}`,
        `Organisation: ${parsed.data.company || "Not provided"}`,
        `Enquiry type: ${parsed.data.topic}`,
        "",
        parsed.data.message,
      ].join("\n"),
      html: buildEmailHtml({ name, email, phone, company, topic, message }),
    });

    if (!error) {
      return { status: "success", message: "Thank you. Your enquiry has been sent to ELENOI." };
    }
  } catch {
    // The public error remains generic while the direct email provides a fallback.
  }

  return {
    status: "error",
    message: "We could not send your enquiry. Please email elenoi.nig.ltd@gmail.com directly.",
  };
}
