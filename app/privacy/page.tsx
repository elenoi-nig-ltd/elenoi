import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy", description: "ELENOI website privacy notice." };

export default function PrivacyPage() {
  return (
    <article className="legal-page wrap">
      <p className="section-number">Legal / Privacy</p>
      <h1>Privacy notice</h1>
      <p className="legal-page__lead">This initial website does not store contact-form submissions or create user accounts.</p>
      <h2>Contact enquiries</h2>
      <p>The contact form prepares a message in your own email application. ELENOI receives only the information you choose to send, and it is handled for the purpose of responding to your enquiry.</p>
      <h2>External websites</h2>
      <p>Links to subsidiary websites and third-party services are governed by their own privacy notices. ELENOI is not responsible for the content or data practices of external websites.</p>
      <h2>Changes</h2>
      <p>This notice will be updated when the website adds analytics, direct form processing, newsletters or other services that collect personal information.</p>
      <h2>Contact</h2>
      <p>Questions about privacy can be sent to <a href="mailto:hello@elenoi.com">hello@elenoi.com</a>.</p>
    </article>
  );
}
