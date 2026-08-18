"use client";

import { FormEvent } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const topic = String(data.get("topic") ?? "General enquiry");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`ELENOI enquiry: ${topic}`);
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nTopic: ${topic}\n\n${message}`);
    window.location.href = `mailto:hello@elenoi.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-pair">
        <label>
          Your name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Organisation
          <input name="company" autoComplete="organization" />
        </label>
      </div>
      <label>
        I am interested in
        <select name="topic" defaultValue="Business partnership">
          <option>Business partnership</option>
          <option>Investment opportunity</option>
          <option>Media enquiry</option>
          <option>General enquiry</option>
        </select>
      </label>
      <label>
        Tell us more
        <textarea name="message" required rows={6} />
      </label>
      <button className="button button--green" type="submit">
        Prepare email <Send size={17} aria-hidden="true" />
      </button>
      <p className="form-note">This opens your email application. No information is stored on this website.</p>
    </form>
  );
}
