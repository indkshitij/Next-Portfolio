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
