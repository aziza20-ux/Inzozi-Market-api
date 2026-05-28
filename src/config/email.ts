import nodemailer from "nodemailer";

const host = process.env["EMAIL_HOST"] ?? process.env["SMTP_HOST"];
const port = Number(process.env["EMAIL_PORT"] ?? process.env["SMTP_PORT"] ?? 587);
const secure =
  (process.env["EMAIL_SECURE"] ?? process.env["SMTP_SECURE"] ?? "false") ===
  "true";
const user = process.env["EMAIL_USER"] ?? process.env["SMTP_USER"];
const pass = process.env["EMAIL_PASS"] ?? process.env["SMTP_PASS"];
const from = process.env["EMAIL_FROM"] ?? process.env["FROM_EMAIL"];

const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: user && pass ? { user, pass } : undefined,
});

// sendEmail is a reusable function that wraps nodemailer's sendMail
// to: recipient email address
// subject: email subject line
// html: the email body as HTML
export async function sendEmail(to: string, subject: string, html: string) {
  await transporter.sendMail({
    from: from ?? (host ? `no-reply@${host}` : undefined),
    to,
    subject,
    html,
  });
}

export default transporter;