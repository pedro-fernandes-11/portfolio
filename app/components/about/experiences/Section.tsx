"use client";

import { useState } from "react";

import ExperienceCard from "../../ExperienceCard";

import SectionDescription from "../../SectionDescription";

import WorkIcon from "../../../assets/svg/work.svg";
import Star from "../../../assets/svg/star.svg";

import Picture from "../../../assets/png/pedro.png";

import Image from "next/image";
import { StaticImageData } from "next/image";
import { select } from "three/webgpu";

interface Experience {
  id: number;
  title: string;
  companyName: string;
  companyImage: StaticImageData;
  startDate: Date;
  finalDate: Date;
  isCurrent: boolean;
  model: string;
  description: string;
  city: string;
  skills: Array<string>;
}

interface SectionDetails {
  title: string;
  subject: string;
  descripion: string;
}

export default function Section() {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  const sectionDetails: SectionDetails = {
    title: "Experiences",
    subject: "Companies/startups I worked for",
    descripion:
      "I've worked with diverse companies and startups, gaining valuable experience in delivering impactful solutions and thriving in dynamic environments. Each role has sharpened my ability to adapt and contribute effectively across varied projects and challenges.",
  };

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Software developer",
      companyName: "NGXit",
      companyImage: Picture,
      startDate: new Date("2022-11-25"),
      finalDate: new Date(),
      isCurrent: true,
      model: "Full-time",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec purus non nulla fringilla tempor eget nec eros.",
      city: "Remote",
      skills: ["python", "css"],
    },
    {
      id: 2,
      title: "Software developeru",
      companyName: "NGXit",
      companyImage: Picture,
      startDate: new Date("2020-2-25"),
      finalDate: new Date("2022-4-10"),
      isCurrent: false,
      model: "Full-time",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec purus non nulla fringilla tempor eget nec eros.",
      city: "Remote",
      skills: ["python", "css"],
    },
    {
      id: 3,
      title: "Software developeru",
      companyName: "NGXit",
      companyImage: Picture,
      startDate: new Date("2020-2-25"),
      finalDate: new Date("2022-4-10"),
      isCurrent: false,
      model: "Internship",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec purus non nulla fringilla tempor eget nec eros.",
      city: "Remote",
      skills: ["python", "css"],
    },
    {
      id: 4,
      title: "Software developeru",
      companyName: "NGXit",
      companyImage: Picture,
      startDate: new Date("2020-2-25"),
      finalDate: new Date("2022-4-10"),
      isCurrent: false,
      model: "Full-time",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec purus non nulla fringilla tempor eget nec eros.",
      city: "Remote",
      skills: ["python", "css"],
    },
  ];

  const [openSection, setOpenSection] = useState(false);

  const handleSection = () => {
    setOpenSection(!openSection);
  };

  const handleExperienceClick = (experience: Experience) => {
    setSelectedExperience(experience);
  };

  const formatDateRange = (
    initial: Date,
    final: Date,
    isCurrent: boolean = false,
    isDetailed: boolean = false
  ) => {
    console.log(initial);
    const startDate = new Date(initial);
    const endDate = isCurrent ? new Date() : new Date(final);

    const startMonth = startDate.toLocaleString("default", { month: "short" });
    const startYear = startDate.getFullYear();
    const endMonth = endDate.toLocaleString("default", { month: "short" });
    const endYear = endDate.getFullYear();

    let yearsDiff = endDate.getFullYear() - startDate.getFullYear();
    let monthsDiff = endDate.getMonth() - startDate.getMonth();

    if (monthsDiff < 0) {
      yearsDiff -= 1;
      monthsDiff += 12;
    }

    const dateRange = `${startMonth} ${startYear} - ${
      isCurrent ? "Present" : `${endMonth} ${endYear}`
    }`;
    const duration = `${yearsDiff > 0 ? `${yearsDiff} yr ` : ""}${
      monthsDiff > 0 ? `${monthsDiff} mos` : ""
    }`.trim();

    return isDetailed ? `${dateRange} | ${duration}` : `${dateRange}`;
  };

  return (
    <div>
      <SectionDescription
        Icon={<WorkIcon className="h-6" />}
        title={sectionDetails.title}
        subject={sectionDetails.subject}
        description={sectionDetails.descripion}
        handleDescription={handleSection}
        openSection={openSection}
      />
      <div className={`flex gap-4 ${openSection ? "block" : "hidden"}`}>
        <div className="flex flex-col flex-auto w-32 custom-scrollbar gap-4 max-h-72 overflow-auto">
          {experiences.map((experience) => (
            <div className="flex flex-col gap-4" key={experience.id}>
              <ExperienceCard
                key={experience.id}
                title={experience.companyName + " - " + experience.title}
                dateRange={formatDateRange(
                  experience.startDate,
                  experience.finalDate,
                  experience.isCurrent
                )}
                Icon={
                  <Image
                    src={experience.companyImage}
                    alt={`${experience.companyName}`}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                }
                onClick={() => handleExperienceClick(experience)}
                isSelected={selectedExperience?.id === experience.id}
              />
            </div>
          ))}
        </div>
        <div className="rounded-2xl p-4 bgc-custom-gray-gradient rounded-lg flex-auto w-64">
          {selectedExperience ? (
            <div className="space-y-4">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src={selectedExperience.companyImage}
                      alt={`${selectedExperience.companyName}`}
                      width={56}
                      height={56}
                      className="rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="text-slate-200">
                        {selectedExperience.title}
                      </span>
                      <span className="text-slate-400">
                        {selectedExperience.city} - {selectedExperience.model}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-slate-400">
                      {formatDateRange(
                        selectedExperience.startDate,
                        selectedExperience.finalDate,
                        selectedExperience.isCurrent,
                        true
                      )}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-slate-300">
                    {selectedExperience.description}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {selectedExperience.skills.map((item) => (
                    <div className="text-sm text-slate-400 text-nowrap px-4 py-0.5 border-2 border-slate-400 rounded">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">
              Select an experience to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
