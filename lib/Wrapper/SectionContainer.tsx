import { ReactNode } from "react";

const SectionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <section
      className="w-full px-4 sm:px-5 md:px-10 lg:px-30 xl:px-40  py-12 mx-auto "
    >
      {children}
    </section>
  );
};

export default SectionContainer;
