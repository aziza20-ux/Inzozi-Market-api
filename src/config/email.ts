import { Resend } from "resend";

const resend = new Resend(process.env["RESEND_API_KEY"]);

const from =
  process.env["EMAIL_FROM"] ?? "INZOZI MARKET <onboarding@resend.dev>";

export async function sendEmail(to: string, subject: string, html: string) {
  const { error } = await resend.emails.send({
    from,
    to,
    subject,
    html,
  });

  if (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
}

export default resend;