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

export interface ExperienceInterface {
  _id: string;
  image: string | StaticImageData;
  logo: string | StaticImageData;
  primaryColor: string;

  jobTitle: string;
  companyName: string;
  location: string;
  companyURL?: string;
  companyDescription?: string;

  // Extra Role Details
  jobLevel: string;
  roleType: string;
  employmentType: string;
  teamSize?: number;
  contributionType?: string[];
  workSummary?: string;

  startDate: string;
  endDate?: string;
  isPresent: boolean;

  shortDescription: string;
  longDescription: string;

  highlights: string[];
  technologies: string[];

  keyProjects?: {
    name: string;
    description: string;
    link?: string;
  }[];

  toolsUsed?: string[];
  achievements?: string[];

  metrics?: {
    performanceImprovement?: string;
    bugReduction?: string;
    featureDeliverySpeed?: string;
  };
}
