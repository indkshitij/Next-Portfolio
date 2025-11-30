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
  success: "#22c55e",
  error: "#ef4444",
  warning: "#f59e0b",
  info: "#3b82f6",
  loading: "#6b7280",
};

// Generate style based on variant
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
        border: `1.5px solid ${color}`,
        color: "#ffffff",
        background: color,
      };

    case "soft":
      return {
        background: `${color}22`, 
        border: `1px solid ${color}55`,
        color,
      };

    case "subtle":
      return {
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        color: "#1f2937",
        opacity: 0.95,
      };

    case "glass":
      return {
        background: "rgba(255,255,255,0.2)",
        border: `1px solid ${color}55`,
        backdropFilter: "blur(12px)",
        color,
      };

    default:
      return {
        border: `1.5px solid ${color}`,
        color,
        background: "#ffffff",
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
      padding: "12px 16px",
      borderRadius: "10px",
      fontSize: "15px",
      fontWeight: 500,
      transition: "all 0.25s ease",
      ...getVariantStyle(type, variant),
    },
  });
};

export default TriggerToast;
