"use client";

import { useActionState, useEffect, useRef } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  return (
    <form className="contact-form" ref={formRef} action={formAction} noValidate>
      <div className="contact-form__section">
        <p className="form-section-label">Your details</p>
        <div className="field-pair">
          <label>
            <span className="field-label">Your name <i aria-hidden="true">*</i></span>
            <input name="name" required autoComplete="name" placeholder="Full name" aria-invalid={Boolean(state.fieldErrors?.name)} />
            {state.fieldErrors?.name && <small className="field-error">{state.fieldErrors.name}</small>}
          </label>
          <label>
            <span className="field-label">Email address <i aria-hidden="true">*</i></span>
            <input name="email" type="email" required autoComplete="email" placeholder="name@company.com" aria-invalid={Boolean(state.fieldErrors?.email)} />
            {state.fieldErrors?.email && <small className="field-error">{state.fieldErrors.email}</small>}
          </label>
        </div>
        <div className="field-pair">
          <label>
            <span className="field-label">Organisation <em>Optional</em></span>
            <input name="company" autoComplete="organization" placeholder="Company or institution" aria-invalid={Boolean(state.fieldErrors?.company)} />
            {state.fieldErrors?.company && <small className="field-error">{state.fieldErrors.company}</small>}
          </label>
          <label>
            <span className="field-label">Phone number <em>Optional</em></span>
            <input name="phone" type="tel" autoComplete="tel" placeholder="+234" aria-invalid={Boolean(state.fieldErrors?.phone)} />
            {state.fieldErrors?.phone && <small className="field-error">{state.fieldErrors.phone}</small>}
          </label>
        </div>
      </div>

      <div className="contact-form__section">
        <p className="form-section-label">Your enquiry</p>
        <label>
          <span className="field-label">I am interested in <i aria-hidden="true">*</i></span>
          <select name="topic" defaultValue="Business partnership" required aria-invalid={Boolean(state.fieldErrors?.topic)}>
            <option>Business partnership</option>
            <option>Investment opportunity</option>
            <option>Media enquiry</option>
            <option>General enquiry</option>
          </select>
          {state.fieldErrors?.topic && <small className="field-error">{state.fieldErrors.topic}</small>}
        </label>
        <label>
          <span className="field-label">Tell us more <i aria-hidden="true">*</i></span>
          <textarea name="message" required rows={5} placeholder="Share a brief overview of your enquiry, opportunity, or proposed partnership." aria-invalid={Boolean(state.fieldErrors?.message)} />
          {state.fieldErrors?.message && <small className="field-error">{state.fieldErrors.message}</small>}
        </label>
      </div>

      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="contact-form__footer">
        <div className={`form-feedback form-feedback--${state.status}`} role="status" aria-live="polite">
          {state.status === "success" && <CheckCircle2 size={18} aria-hidden="true" />}
          {state.status === "error" && <AlertCircle size={18} aria-hidden="true" />}
          <p>{state.message ?? "Your details are used only to respond to this enquiry."}</p>
        </div>
        <button className="button button--green" type="submit" disabled={pending}>
          {pending ? <LoaderCircle className="animate-spin" size={17} aria-hidden="true" /> : <Send size={17} aria-hidden="true" />}
          {pending ? "Sending enquiry" : "Send enquiry"}
        </button>
      </div>
    </form>
  );
}
