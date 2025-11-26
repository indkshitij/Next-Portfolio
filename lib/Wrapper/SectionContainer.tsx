import { ReactNode } from "react";

const SectionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <section
      className="w-full px-4 sm:px-10 md:px-20 py-10 sm:max-w-[88%] mx-auto "
    >
      {children}
    </section>
  );
};

export default SectionContainer;
