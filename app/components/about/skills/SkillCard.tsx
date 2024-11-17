"use client";

import { ReactNode } from "react";

interface SkillCardProps {
  name: string;
  Icon: ReactNode;
  subitems: Array<string>;
  experienceInYears: number;
  expertiseLevel: number;
}

export default function SkillCard({
  name,
  Icon,
  subitems,
  experienceInYears,
  expertiseLevel,
}: SkillCardProps) {
  return (
    <div className="flex flex-col flex-1 bgc-custom-gray-gradient rounded-lg p-3 flex-1 min-w-[calc(33.333%-1rem)]">
      <div className="flex justify-between items-center p-2">
        <span className="flex items-center gap-2">
          {Icon}
          <span className="text-slate-300">{name}</span>
        </span>
        <span className="text-slate-300">{experienceInYears} years</span>
      </div>
      <div className="flex flex-wrap gap-1 p-2">
        {subitems.map((item) => (
          <div className="text-sm text-slate-400 text-nowrap px-4 py-0.5 border-2 border-slate-400 rounded">
            {item}
          </div>
        ))}
      </div>
      <div className="p-2">
        <div className="bg-[#302b27] rounded-full p-2 h-6">
          <div
            className={`bgc-custom-gradient rounded-full h-2`}
            style={{ maxWidth: `${expertiseLevel * 10}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
