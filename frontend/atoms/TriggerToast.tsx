import toast, { ToastOptions } from "react-hot-toast";

type ToastType = "success" | "error" | "warning" | "info" | "loading";

interface TriggerToastOptions {
  message: string;
  type?: ToastType;
  duration?: number;
  position?: ToastOptions["position"];
}

const colors: Record<ToastType, string> = {
  success: "#22c55e",
  error: "#ef4444",
  warning: "#f59e0b",
  info: "#3b82f6",
  loading: "#6b7280",
};

const TriggerToast = ({
  message,
  type = "success",
  duration = 2500,
  position = "top-center",
}: TriggerToastOptions) => {
  return toast(message, {
    duration: type === "loading" ? 999999 : duration,
    position,
    // icon: icons[type],
    style: {
      padding: "12px 16px",
      borderRadius: "8px",
      fontSize: "15px",
      border: `1px solid ${colors[type]}`,
      color: colors[type],
    },
  });
};

export default TriggerToast;
