import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState("Opens your email app.");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const body = `${String(data.get("message") || "").trim()}\n\nFrom: ${name}\nEmail: ${data.get("email")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Portfolio inquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    setStatus("Draft opened. Send it from your email app.");
  }

  return (
    <form
      id="contact-form"
      className="compact-contact-form"
      action={`mailto:${email}`}
      method="post"
      encType="text/plain"
      onSubmit={handleSubmit}
    >
      <div className="contact-form-fields">
        <div>
          <Label className="sr-only" htmlFor="contact-name">
            Name
          </Label>
          <Input
            id="contact-name"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            maxLength={150}
            required
          />
        </div>
        <div>
          <Label className="sr-only" htmlFor="contact-email">
            Email
          </Label>
          <Input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Your email"
            autoComplete="email"
            required
          />
        </div>
      </div>
      <Label className="sr-only" htmlFor="contact-message">
        Message
      </Label>
      <Textarea
        id="contact-message"
        name="message"
        placeholder="What do you have in mind?"
        rows={3}
        maxLength={5000}
        required
      />
      <div className="contact-form-actions">
        <p className="contact-form-status" aria-live="polite">
          {status}
        </p>
        <Button type="submit" variant="outline" size="sm">
          Send message <ArrowUpRight size={14} aria-hidden="true" />
        </Button>
      </div>
    </form>
  );
}
