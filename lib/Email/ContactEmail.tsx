import * as React from "react";

interface ContactEmailProps {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "14px",
        overflow: "hidden",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          padding: "0 5px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 10px 32px rgba(0,0,0,0.12)",
          border: "1px solid #e5e7eb",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            width: "100%",
            background:
              "linear-gradient(135deg, #4f46e5, #6366f1, #3b82f6, #0ea5e9)",
            padding: "24px 28px",
            color: "white",
            borderRadius: "14px 14px 0 0",
            textAlign: "center",
            boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: 500,
              fontFamily: "Onest, Poppins, sans-serif",
            }}
          >
            📨 New Message Received
          </h2>
        </div>

        {/* CONTENT */}
        <div style={{ padding: "10px" }}>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "22px",
              color: "#374151",
            }}
          >
            You have received a new message from your portfolio contact form.
          </p>

          {/* FIELD BLOCK FUNCTION */}
          {[
            { label: "Name", value: name },
            { label: "Email", value: email },
            { label: "Subject", value: subject },
          ].map((item, index) => (
            <div key={index} style={{ marginBottom: "18px" }}>
              <strong
                style={{
                  fontSize: "11px",
                  color: "#4b5563",
                  letterSpacing: "0.4px",
                }}
              >
                {item.label}:
              </strong>
              <p
                style={{
                  margin: "6px 0",
                  padding: "12px",
                  backgroundColor: "#f1f5f9",
                  border: "1px solid #dbeafe",

                  borderRadius: "10px",
                  fontSize: "15px",
                  color: "#1f2937",
                }}
              >
                {item.value}
              </p>
            </div>
          ))}

          {/* MESSAGE BOX */}
          <strong
            style={{
              fontSize: "11px",
              color: "#4b5563",
              letterSpacing: "0.4px",
            }}
          >
            Message:
          </strong>

          <div
            style={{
              marginTop: "8px",
              padding: "16px 18px",
              backgroundColor: "#f1f5f9",
              borderLeft: "4px solid #3b82f6",
              boxShadow: "0 2px 10px rgba(59,130,246,0.2)",
              borderRadius: "10px",
              whiteSpace: "pre-line",
              fontSize: "15px",
              color: "#1f2937",
              lineHeight: "1.6",
            }}
          >
            {message}
          </div>
        </div>

        {/* FOOTER */}
        <div
          style={{
            width: "100%",
            padding: "20px 24px",
            background: "#f9fafb",
            borderTop: "1px solid #e5e7eb",
            textAlign: "center",
            fontSize: "13px",
            color: "#4b5563",
          }}
        >
          <span style={{ display: "block", fontWeight: 600 }}>
            Sent securely via your portfolio website
          </span>
          <span style={{ fontSize: "12px", color: "#6b7280" }}>
            — Kshitij Singh
          </span>
        </div>
      </div>
    </div>
  );
}
