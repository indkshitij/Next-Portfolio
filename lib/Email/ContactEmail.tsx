import * as React from "react";

interface ContactEmailProps {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactEmail({ name, email, subject, message }: ContactEmailProps) {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, sans-serif",
        backgroundColor: "#f5f7fa",
        padding: "20px",
        color: "#1a1a1a",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            padding: "18px 24px",
            color: "white",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>
            📨 New Message
          </h2>
        </div>

        {/* Content */}
        <div style={{ padding: "24px" }}>
          <p style={{ fontSize: "16px", marginBottom: "14px" }}>
            You have received a new message from your website contact form.
          </p>

          {/* Fields */}
          <div style={{ marginBottom: "14px" }}>
            <strong style={{ color: "#374151" }}>Name:</strong>
            <p
              style={{
                margin: "4px 0",
                padding: "10px",
                backgroundColor: "#f3f4f6",
                borderRadius: "8px",
              }}
            >
              {name}
            </p>
          </div>

          <div style={{ marginBottom: "14px" }}>
            <strong style={{ color: "#374151" }}>Email:</strong>
            <p
              style={{
                margin: "4px 0",
                padding: "10px",
                backgroundColor: "#f3f4f6",
                borderRadius: "8px",
              }}
            >
              {email}
            </p>
          </div>

          <div style={{ marginBottom: "14px" }}>
            <strong style={{ color: "#374151" }}>Subject:</strong>
            <p
              style={{
                margin: "4px 0",
                padding: "10px",
                backgroundColor: "#f3f4f6",
                borderRadius: "8px",
              }}
            >
              {subject}
            </p>
          </div>

          {/* Message Box */}
          <strong style={{ color: "#374151" }}>Message:</strong>
          <div
            style={{
              marginTop: "6px",
              padding: "14px",
              backgroundColor: "#eef2ff",
              borderLeft: "4px solid #6366f1",
              borderRadius: "8px",
              whiteSpace: "pre-line",
            }}
          >
            {message}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "16px 24px",
            backgroundColor: "#f9fafb",
            borderTop: "1px solid #e5e7eb",
            textAlign: "center",
            fontSize: "13px",
            color: "#6b7280",
          }}
        >
          Sent from your website contact form.<br />
          Please do not reply to this automated email.
        </div>
      </div>
    </div>
  );
}
