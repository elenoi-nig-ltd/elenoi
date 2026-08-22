import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "ELENOI Nig. Ltd website privacy notice.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="legal-page wrap">
      <p className="section-number">Legal / Privacy</p>
      <h1>Privacy notice</h1>
      <p className="legal-page__lead">
        This website does not maintain a user database or create accounts.
        Contact enquiries are delivered by email.
      </p>
      <h2>Contact enquiries</h2>
      <p>
        When you submit the contact form, the information you provide is sent to
        ELENOI through our email delivery provider and used only to respond to
        your enquiry. The enquiry may remain in ELENOI&apos;s email records
        according to the organisation&apos;s normal email retention practices.
        We do not create user accounts or sell enquiry information.
      </p>
      <h2>External websites</h2>
      <p>
        Links to subsidiary websites and third-party services are governed by
        their own privacy notices. ELENOI is not responsible for the content or
        data practices of external websites.
      </p>
      <h2>Changes</h2>
      <p>
        This notice will be updated when the website adds analytics, direct form
        processing, newsletters or other services that collect personal
        information.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about privacy can be sent to{" "}
        <a href="mailto:elenoi.nig.ltd@gmail.com">elenoi.nig.ltd@gmail.com</a>.
      </p>
    </article>
  );
}
