"use client";

import Skills from "../components/about/skills/Section";
import Testimonials from "../components/about/testimonials/Section";
import Experiences from "../components/about/experiences/Section";
import Education from "../components/about/education/Section";

import PresentationCard from "../components/about/skills/PresentationCard";

export default function About() {
  return (
    <>
      <PresentationCard />
      <div className="overflow-auto custom-scrollbar my-4 flex flex-col gap-3">
        <Skills />
        <Experiences />
        <Education />
        <Testimonials />
      </div>
    </>
  );
}
