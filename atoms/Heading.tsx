import React from "react";

interface HeadingProps {
  heading: string;
  className?: string;
}

const Heading = ({ heading, className }: HeadingProps) => {
  return (
    <h1
      className={`text-2xl sm:text-3xl font-semibold tracking-wide text-gray-900 dark:text-white ${
        className || ""
      }`}
    >
      {heading}
    </h1>
  );
};

export default Heading;
