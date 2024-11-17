"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface NavItemProps {
  label: string;
  Icon: ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

export default function NavItem({
  label,
  Icon,
  isSelected,
  onClick,
}: NavItemProps) {
  const formattedLabel = label == "Home" ? "" : label.toLowerCase();

  return (
    <Link
      href={"/" + formattedLabel}
      onClick={onClick}
      className={`relative flex items-center p-3 rounded-full group duration-1000 hover:scale-110 ${
        isSelected
          ? "bgc-custom-gradient"
          : "bg-[#454545] hover-bgc-custom-gradient"
      }`}
    >
      <div className="relative flex items-center">
        <span className="text-slate-300 bg-[#454545] px-3 rounded text-lg absolute right-12 opacity-0 transform translate-x-8 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-x-0">
          {label}
        </span>
        {Icon}
      </div>
    </Link>
  );
}
