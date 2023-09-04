"use client"

import EducationSection from "@/components/EducationSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import Footer from "@/components/Footer";
import PersonalCard from "@/components/PersonalCard";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { Container, Divider } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    document.title = 'Sheila Craus | Portfolio';
  }, []);

  return (
    <Container className="p-0">
      <PersonalCard/>
      <Divider/>
      <ExperiencesSection/>
      <ProjectsSection/>
      <SkillsSection/>
      <EducationSection/>      
      <Footer/>
    </Container>
  ) 
}
