import EducationDetailTemplate from "@/frontend/template/EducationDetailTemplate";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Education',
};


const page = () => {
  return (
    <div>
      <EducationDetailTemplate />
    </div>
  );
};

export default page;
