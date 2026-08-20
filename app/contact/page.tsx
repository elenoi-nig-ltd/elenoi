import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact ELENOI",
  description: "Start a conversation with ELENOI Nig. Ltd about partnerships, investment, media or our businesses.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="contact-page wrap">
      <div className="contact-page__intro">
        <p className="section-number">Contact ELENOI</p>
        <h1>Let us build something<br /><em>worth sustaining.</em></h1>
        <p>For partnerships, investments, media enquiries or conversations about one of our businesses, reach our group office.</p>
        <div className="contact-details">
          <a href="mailto:elenoi.nig.ltd@gmail.com"><Mail size={17} /> elenoi.nig.ltd@gmail.com</a>
          <a href="tel:+2348026968067"><Phone size={17} /> +234 802 696 8067</a>
          <p><MapPin size={17} /> No. 4 KFF Street, after Central Mosque, Gidan Kwano, Minna, Nigeria.</p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
