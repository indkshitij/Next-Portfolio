"use client";

import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
// import { useEffect } from "react";
// import { fetchProjects } from "@/lib/store/features/projects";
// import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
// import { fetchEducation } from "@/lib/store/features/education";
// import { fetchExperience } from "@/lib/store/features/experience";
// import { fetchProfileData } from "@/lib/store/features/profileData";
// import { fetchTechnology } from "@/lib/store/features/technologies";
import Navbar from "@/components/Navbar";
import EducationSection from "@/molecules/EducationSection";
import ExperienceSection from "@/molecules/ExperienceSection";
import SkillsSection from "@/molecules/SkillsSection";

export default function Home() {
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchProjects());
  //   dispatch(fetchEducation());
  //   dispatch(fetchExperience());
  //   dispatch(fetchProfileData());
  //   dispatch(fetchTechnology());
  // }, []);
  // const selector = useAppSelector((state) => state);
  // console.log(selector);

  return (
    <>
      <div className="h-screen">
        <Navbar />

        <HeroSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <div className="dark:bg-black ">
          <Footer />
        </div>
      </div>
    </>
  );
}
