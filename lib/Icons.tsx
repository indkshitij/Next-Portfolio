import React from "react";

interface IconProps {
  icon: string;
  className?: string;
  size?: number;
}

const Icons = ({ icon, className, size }: IconProps) => {
  switch (icon) {
    case "home":
      return (
        <svg
          width={size || 25}
          height={size || 25}
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 10.5L12 4l9 6.5" />
          <path d="M5 10v10h14V10" />
          <path d="M9 20v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
        </svg>
      );

    case "project":
      return (
        <svg
          width={size || 25}
          height={size || 25}
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="7" width="18" height="12" rx="2" />
          <path d="M8 3h8l2 4H6l2-4z" />
        </svg>
      );

    case "education":
      return (
        <svg
          width={size || 25}
          height={size || 25}
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 10l10-5 10 5-10 5-10-5z" />
          <path d="M12 15v6" />
          <path d="M7 12v4c3 2 7 2 10 0v-4" />
        </svg>
      );

    case "experience":
      return (
        <svg
          width={size || 25}
          height={size || 25}
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="7" width="18" height="12" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18" />
        </svg>
      );

    case "skills":
      return (
        <svg
          width={size || 20}
          height={size || 20}
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <rect
            x="6.6"
            y="9.98"
            width="10.8"
            height="4.05"
            transform="translate(-4.97 12) rotate(-45)"
          />
          <circle cx="18.68" cy="5.32" r="3.82" />
          <circle cx="5.32" cy="18.68" r="3.82" />
          <path d="M12 9.14 9.14 12 6.27 9.14H4.36A2.87 2.87 0 0 1 1.5 6.27V4.36l.4.4A2.1 2.1 0 0 0 4.69 5a2 2 0 0 0 .15-3L4.36 1.5H6.27A2.87 2.87 0 0 1 9.14 4.36V6.27Z" />
          <path d="M19.64 14.86a2.87 2.87 0 0 1 2.86 2.87v1.91l-.4-.4A2.1 2.1 0 0 0 19.31 19a2 2 0 0 0-.15 3l.48.48H17.73a2.87 2.87 0 0 1-2.87-2.86V17.73L12 14.86 14.86 12l2.87 2.86Z" />
        </svg>
      );

    case "contact":
      return (
        <svg
          width={size || 25}
          height={size || 25}
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );

    case "profile":
      return (
        <svg
          width={size || 22}
          height={size || 22}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="7" r="4" />
          <path d="M4 21c0-4 3-7 8-7s8 3 8 7" />
        </svg>
      );

    case "star-shine":
      return (
        <svg
          width={size || 22}
          height={size || 22}
          viewBox="0 0 256 256"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M199.77344,125.2334,149.3457,106.6543,130.7666,56.22656a19.9996,19.9996,0,0,0-37.5332,0L74.6543,106.6543,24.22656,125.2334a19.9996,19.9996,0,0,0,0,37.5332L74.6543,181.3457l18.5791,50.42774a19.9996,19.9996,0,0,0,37.5332,0l18.5791-50.42774,50.42774-18.5791a19.9996,19.9996,0,0,0,0-37.5332Zm-60.45606,34.22949a19.97179,19.97179,0,0,0-11.85449,11.85449l.001-.001L112,213.28906,96.53711,171.31738a19.96863,19.96863,0,0,0-11.85352-11.85351L42.71094,144l41.97168-15.46289a19.96863,19.96863,0,0,0,11.85351-11.85352L112,74.71094l15.46289,41.97168a19.96863,19.96863,0,0,0,11.85352,11.85351L181.28906,144ZM140,40a12.0006,12.0006,0,0,1,12-12h12V16a12,12,0,0,1,24,0V28h12a12,12,0,0,1,0,24H188V64a12,12,0,0,1-24,0V52H152A12.0006,12.0006,0,0,1,140,40ZM252,88a12.0006,12.0006,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4V72a12,12,0,0,1,24,0v4h4A12.0006,12.0006,0,0,1,252,88Z"></path>
        </svg>
      );

    case "menu":
      return (
        <svg
          width={size || 25}
          height={size || 25}
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      );

    case "close":
      return (
        <svg
          width={size || 24}
          height={size || 24}
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );

    case "chevron-down":
      return (
        <svg
          width={size || 30}
          height={size || 30}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="5"
            // strokeLinecap="round"
            // strokeLinejoin="round"
          />
        </svg>
      );

    case "circle-right":
      return (
        <svg
          width={size || 25}
          height={size || 25}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8l4 4-4 4" />
          <path d="M8 12h8" />
        </svg>
      );

    default:
      return null;
  }
};

export default Icons;
