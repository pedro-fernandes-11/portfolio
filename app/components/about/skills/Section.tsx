"use client";

import { useState } from "react";

import SkillCard from "./SkillCard";
import SectionDescription from "../../SectionDescription";

import SkillsIcon from "../../../assets/svg/skills.svg";

import PythonIcon from "../../../assets/svg/python.svg";
import NodeJSIcon from "../../../assets/svg/node.svg";
import ReactJSIcon from "../../../assets/svg/react.svg";
import AzureIcon from "../../../assets/svg/azure.svg";
import PHPIcon from "../../../assets/svg/php.svg";
import DatabaseIcon from "../../../assets/svg/db.svg";
import JavaIcon from "../../../assets/svg/java.svg";
import CppIcon from "../../../assets/svg/cpp.svg";
import CsharpIcon from "../../../assets/svg/cs.svg";
import GitIcon from "../../../assets/svg/git.svg";
import FigmaIcon from "../../../assets/svg/figma.svg";

export default function Section() {
  const sectionDetails = {
    title: "Skills",
    subject: "Technologies I work with",
    descripion:
      "As a versatile, self-taught software developer with a passion for problem-solving, I thrive on quickly mastering new technologies, languages, and frameworks to tackle diverse challenges. I continuously expand my skill set to stay ahead in this ever-evolving field. My tech stack includes:",
  };

  const techStack = [
    {
      react: {
        name: "ReactJS",
        icon: ReactJSIcon,
        experienceInYears: 3,
        subitems: [
          "NextJS",
          "TailwindCSS",
          "SASS",
          "Axios",
          "React Hooks",
          "Typescript",
          "UI/UX",
          "Testing",
        ],
        expertiseLevel: 10,
      },
      azure: {
        name: "Microsoft Azure",
        icon: AzureIcon,
        experienceInYears: 4,
        subitems: [
          "Dynamics CRM",
          "Data Factory",
          "Databricks",
          "Data Lake",
          "Synapse Analytics",
          "ETL processes",
        ],
        expertiseLevel: 8,
      },
      php: {
        name: "PHP",
        icon: PHPIcon,
        experienceInYears: 6,
        subitems: [
          "Server rendered",
          "OOP",
          "Laravel",
          "Structured databases",
          ".ini config",
          "AJAX",
        ],
        expertiseLevel: 9,
      },
      database: {
        name: "SQL & NoSQL",
        icon: DatabaseIcon,
        experienceInYears: 5,
        subitems: [
          "Backup & Recovery",
          "Stored Procedures",
          "Complex queries",
          "Triggers",
          "Security",
          "MySQL",
          "SQL Server",
          "PostgreSQL",
          "MongoDB",
          "JSON",
        ],
        expertiseLevel: 9,
      },
    },
    {
      node: {
        name: "NodeJS",
        icon: NodeJSIcon,
        experienceInYears: 3,
        subitems: [
          "API",
          "Express",
          "Typescript",
          "Prisma",
          "Sequelize",
          "MVC",
          "Jest",
          "CORS",
          "EJS",
        ],
        expertiseLevel: 10,
      },
      java: {
        name: "Java",
        icon: JavaIcon,
        experienceInYears: 3,
        subitems: ["Spring", "Swing", "OOP", "Database connection", "Logging"],
        expertiseLevel: 7,
      },
      cpp: {
        name: "CPP",
        icon: CppIcon,
        experienceInYears: 6,
        subitems: [
          "Logic programming",
          "Control Structures",
          "Data Structures",
          "OOP",
        ],
        expertiseLevel: 5,
      },
      csharp: {
        name: "C#",
        icon: CsharpIcon,
        experienceInYears: 3,
        subitems: [
          "Logic programming",
          "Control Structures",
          "Data Structures",
          "OOP",
          ".NET",
        ],
        expertiseLevel: 6,
      },
    },
    {
      python: {
        name: "Python",
        icon: PythonIcon,
        experienceInYears: 6,
        subitems: [
          "Automation",
          "Selenium",
          "Tkinter",
          "Auto GUI",
          "Simple GUI",
          "Domain Analysis",
          "Turtle",
          "Numpy",
        ],
        expertiseLevel: 10,
      },
      git: {
        name: "Git",
        icon: GitIcon,
        experienceInYears: 6,
        subitems: ["Version control", "Repository", "Branching", "Github"],
        expertiseLevel: 9,
      },
      figma: {
        name: "Figma",
        icon: FigmaIcon,
        experienceInYears: 5,
        subitems: ["Prototyping", "UI/UX"],
        expertiseLevel: 10,
      },
    },
  ];

  const [openSection, setOpenSection] = useState(false);

  const handleSection = () => {
    setOpenSection(openSection ? false : true);
  };

  return (
    <div>
      <SectionDescription
        Icon={<SkillsIcon className="h-6" />}
        title={sectionDetails.title}
        subject={sectionDetails.subject}
        description={sectionDetails.descripion}
        handleDescription={handleSection}
        openSection={openSection}
      />
      <div
        className={`grid grid-cols-3 gap-4 items-start custom-scrollbar gap-4 max-h-96 overflow-auto ${
          openSection ? "block" : "hidden"
        }`}
      >
        {techStack.map((item) => (
          <div className="flex flex-col gap-4">
            {Object.entries(item).map(
              ([
                key,
                {
                  name,
                  icon: Icon,
                  subitems,
                  experienceInYears,
                  expertiseLevel,
                },
              ]) => (
                <SkillCard
                  key={key}
                  name={name}
                  Icon={<Icon className="w-14 h-14" />}
                  subitems={subitems}
                  experienceInYears={experienceInYears}
                  expertiseLevel={expertiseLevel}
                />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
