export const GRADIENTS = {
  orange: `
    linear-gradient(
      180deg,
      #E15C2C 0%,
      #C24D22 50%,
      #AB411C 100%
    )
  `,
  blue: `
    linear-gradient(
      180deg,
      #498DE6 0%,
      #2C62B9 50%,
      #103893 100%
    )
  `,
};

export const COMPANY_GRADIENT = (companyName: string = "") => {
  const name = companyName.toLowerCase().trim();

  switch (name) {
    case "forescribe":
      return `
    linear-gradient(
      180deg,
      #8358FF 0%,
      #6A39F5 45%,
      #4B1FD8 100%
    )
  `;

    case "agile support":
    case "agilesupport":
      return `
        linear-gradient(
          180deg,
          #4DB6C3 0%,
          #3A98A6 50%,
          #266D78 100%
        )
      `;

    default:
      return `
        linear-gradient(
          180deg,
          #6B7280 0%,   /* neutral gray */
          #4B5563 50%,
          #374151 100%
        )
      `;
  }
};
export const PROJECT_GRADIENTS = (projectName: string = "") => {
  const name = projectName.toLowerCase().trim();

  switch (true) {
    // Brainwave AI: Black + Orange-700
    case name.includes("brainwave"):
      return `
        linear-gradient(
          180deg,
          #000000 0%,
          #7C2D12 50%,
          #B45309 100%
        )
      `;

    case name.includes("neo"):
    case name.includes("finance"):
      return `
        linear-gradient(
          180deg,
          #E8F1FF 0%,
          #3B82F6 35%,
          #1E3A8A 100%
        )
      `;

    case name.includes("portfolio"):
    case name.includes("dashboard"):
      return `
        linear-gradient(
          180deg,
          #0F0F10 0%,
          rgba(146, 84, 14, 0.20) 100%
        )
     `;

    // Default
    default:
      return `
        linear-gradient(
          180deg,
          #6B7280 0%,
          #4B5563 50%,
          #374151 100%
        )
      `;
  }
};
