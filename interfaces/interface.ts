import { StaticImageData } from "next/image";
export interface EducationInterface {
  _id?: string;
  institute?: string;
  image?: string | StaticImageData;

  logo?: string | StaticImageData;
  degree?: string;
  specialization?: string;

  startDate?: string;
  endDate?: string;

  grade?: {
    type?: string;
    value?: string;
  };

  location?: string;

  shortDescription?: string;
  longDescription?: string;

  highlights?: string[];
  keywords?: string[];
}
