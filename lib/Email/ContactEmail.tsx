import * as React from "react";

interface ContactEmailProps {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactEmail({ name, email, subject, message }: ContactEmailProps) {
  return (
    <div style={{ fontFamily: "Arial", lineHeight: "1.5" }}>
      <h2>📨 New Contact Form Message</h2>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Subject:</strong> {subject}</p>

      <h3>Message:</h3>
      <p>{message}</p>

      <hr />

      <p style={{ fontSize: "12px", color: "#888" }}>
        Sent from your website contact form.
      </p>
    </div>
  );
}
