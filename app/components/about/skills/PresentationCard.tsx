"use client";

import React from "react";
import Link from "next/link";

import Image from "next/image";
import myImage from "@/app/assets/png/pedro.png";
import DownloadIcon from "../../../assets/svg/download.svg";

import TiltCard from "../../TiltCard";
import TypingEffect from "../../TypingEffect";

export default function PresentationCard() {
  const phrases: string[] = [
    "Back-end developer",
    "Front-end developer",
    "UI/UX design enthusiast",
    "AI enthusiast",
    "Problem solver",
    "Self-taught software engineer",
  ];

  return (
    <TiltCard>
      <div className="flex">
        <div className="flex items-center">
          <Image
            src={myImage}
            alt="Profile picture"
            height={200}
            width={200}
            className="rounded"
          />
        </div>

        <div className="flex flex-col justify-center p-6">
          <span className="text-slate-400">I am</span>
          <span className="mt-2 text-4xl font-thin text-slate-300">
            PEDRO{" "}
            <span className="animated-text-gradient font-bold">POUZADA</span>
          </span>
          <span className="animated-text-gradient text-2xl mb-2 flex gap-1">
            {"| "}
            <TypingEffect phrases={phrases} />
          </span>
          <span className="text-slate-400">
            <i>"Turning complexity into elegant simplicity."</i>
          </span>
          <span className="text-slate-300">Based on Porto Alegre, Brazil</span>
        </div>
      </div>
      <div className="flex items-end">
        <Link href={"/portfolio"} className="bg-transparent rounded px-5 py-1">
          <span className="text-slate-300 text-1xl flex gap-2">
            <DownloadIcon className="w-6 h-6" />
            Curriculum Vitae
          </span>
        </Link>
        <Link
          href={"/projects"}
          className="bg-transparent border-2 rounded border-default-hl-color px-5 py-1 duration-100 hover:scale-110 hover:bg-[#6366f1] group"
        >
          <span className="default-hl-color text-1xl group-hover:text-slate-300">
            Portfolio
          </span>
        </Link>
      </div>
    </TiltCard>
  );
}
