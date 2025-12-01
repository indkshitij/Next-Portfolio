import toast, { ToastOptions } from "react-hot-toast";

type ToastType = "success" | "error" | "warning" | "info" | "loading";

interface TriggerToastOptions {
  message: string;
  type?: ToastType;
  duration?: number;
  position?: ToastOptions["position"];
  variant?: "outline" | "solid" | "soft" | "subtle" | "glass";
}

const colors: Record<ToastType, string> = {
  success: "#15803d",  // Darker green
  error:   "#b91c1c",  // Deeper red
  warning: "#b45309",  // Rich amber
  info:    "#1d4ed8",  // Deep blue
  loading: "#4b5563",  // Slate gray
};

// Shared UI tokens
const sharedBase = {
  padding: "12px 18px",
  borderRadius: "12px",
  fontSize: "15px",
  fontWeight: 500,
  transition: "all 0.25s ease",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
};

// Variant styles
const getVariantStyle = (type: ToastType, variant: string) => {
  const color = colors[type];

  switch (variant) {
    case "outline":
      return {
        border: `1.5px solid ${color}`,
        color,
        background: "#ffffff",
      };

    case "solid":
      return {
        background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
        color: "#ffffff",
        border: `1px solid ${color}aa`,
        boxShadow: `
      0 4px 12px ${color}55,
      0 0 12px ${color}55 inset
    `,
        backdropFilter: "blur(4px)",
      };

    case "soft":
      return {
        background: `${color}15`,
        color,
        border: `1px solid ${color}33`,
        boxShadow: `0 4px 12px ${color}25`,
      };

    case "subtle":
      return {
        background: "#f9fafb",
        color: "#1f2937",
        border: "1px solid #e5e7eb",
      };

    case "glass":
      return {
        background: "rgba(255,255,255,0.15)",
        border: `1px solid ${color}44`,
        backdropFilter: "blur(14px)",
        color,
        boxShadow: `0 4px 18px rgba(0,0,0,0.2)`,
      };

    default:
      return {
        color,
        background: "#ffffff",
        border: `1px solid ${color}`,
      };
  }
};

const TriggerToast = ({
  message,
  type = "success",
  duration = 2500,
  position = "top-center",
  variant = "outline",
}: TriggerToastOptions) => {
  return toast(message, {
    duration: type === "loading" ? 999999 : duration,
    position,
    style: {
      ...sharedBase,
      ...getVariantStyle(type, variant),
      animation: "fadeIn 0.2s ease-out",
    },
  });
};

export default TriggerToast;
