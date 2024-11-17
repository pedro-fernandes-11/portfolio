"use client";

import { useState, ReactNode } from "react";

import Chevron from "../assets/svg/chevron.svg";

interface SectionDescriptionProps {
  Icon: ReactNode;
  title: string;
  subject: string;
  description: string;
  handleDescription: () => void;
  openSection: boolean;
}

export default function SectionDescription({
  Icon,
  title,
  subject,
  description,
  handleDescription,
  openSection,
}: SectionDescriptionProps) {
  return (
    <div
      className="flex flex-col px-4 py-2 cursor-pointer"
      onClick={handleDescription}
    >
      <span className="flex default-hl-color text-3xl items-center gap-2">
        {Icon}
        {title}
        <Chevron
          className={`h-3 ${openSection ? "rotate-180" : "rotate-90"}`}
        />
      </span>
      <span className="text-1xl text-slate-400">{subject}</span>
      <span
        className={`text-1xl text-slate-300 my-4 ${
          openSection ? "block" : "hidden"
        }`}
      >
        {description}
      </span>
    </div>
  );
}
