import { BrevoClient } from "@getbrevo/brevo";

const client = new BrevoClient({ apiKey: process.env["BREVO_API_KEY"] ?? "" });

export async function sendEmail(to: string, subject: string, html: string) {
  await client.transactionalEmails.sendTransacEmail({
    sender: {
      name: "INZOZI MARKET",
      email: process.env["EMAIL_USER"] ?? "",
    },
    to: [{ email: to }],
    subject,
    htmlContent: html,
  });
}

export default client;