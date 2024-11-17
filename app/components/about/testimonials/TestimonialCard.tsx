"use client";

import { ReactNode } from "react";

interface TestimonialCardProps {
  name: string;
  title: string;
  Icon: ReactNode;
  onClick: () => void;
  isSelected: boolean;
}

export default function TestimonialCard({
  name,
  title,
  Icon,
  onClick,
  isSelected,
}: TestimonialCardProps) {
  return (
    <div
      className={`rounded-2xl p-px cursor-pointer ${
        isSelected
          ? "bgc-custom-gray-gradient"
          : "bgc-custom-gradient-transparent"
      }`}
      onClick={onClick}
    >
      <div
        className={`${
          isSelected ? "bgc-custom-gray-gradient" : "bg-[#302b27] "
        } p-4 rounded-2xl flex`}
      >
        {Icon}
        <div className="flex flex-col px-4 justify-center">
          <span className="text-slate-200">{name}</span>
          <span className="text-slate-400">{title}</span>
        </div>
      </div>
    </div>
  );
}
