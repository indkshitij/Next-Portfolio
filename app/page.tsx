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
import SkillsCarousel from "@/frontend/molecules/SkillsCarousel";
import ContactSection from "@/frontend/organism/ContactSection";
import EducationSection from "@/frontend/organism/EducationSection";
import ExperienceSection from "@/frontend/organism/ExperienceSection";
import ExpertiseSecction from "@/frontend/organism/ExpertiseSection";
import SkillsSection from "@/frontend/organism/SkillsSection";

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
        <div className="bg-[#F8FAFB]">
          <HeroSection />
          <div id="work">
            <SkillsCarousel />
            <EducationSection />
            <ExperienceSection />
            <SkillsSection />
            <ExpertiseSecction />
            <ContactSection />
          </div>
        </div>
        <div className="dark:bg-black ">
          <Footer />
        </div>
      </div>
    </>
  );
}
