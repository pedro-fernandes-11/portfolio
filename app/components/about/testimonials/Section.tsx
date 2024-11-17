"use client";

import { useState } from "react";

import TestimonialCard from "./TestimonialCard";

import SectionDescription from "../../SectionDescription";

import QuotesIcon from "../../../assets/svg/quotes.svg";
import Star from "../../../assets/svg/star.svg";

import Picture from "../../../assets/png/pedro.png";

import Image from "next/image";
import { StaticImageData } from "next/image";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  picture: StaticImageData;
  main: string;
  rating: number;
  content: string;
}

interface SectionDetails {
  title: string;
  subject: string;
  descripion: string;
}

export default function Section() {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  const sectionDetails: SectionDetails = {
    title: "Testimonials",
    subject: "References from collaborators and clients",
    descripion:
      "Here's what clients and colleagues say about working with me. Their feedback highlights my commitment to quality, teamwork, and solving challenges effectively.",
  };

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emillio",
      title: "Founder and CEO of X",
      picture: Picture,
      main: "Carry on with your superd work.asasss",
      rating: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec purus non nulla fringilla tempor eget nec eros. Phasellus volutpat nibh dictum neque fringilla tristique. Nunc neque mi, malesuada in sodales nec, venenatis id lorem. Cras sit amet ante in dolor vehicula consectetur. Aliquam erat volutpat. Donec faucibus tellus quis ipsum dignissim ornare. Cras molestie nec quam vitae malesuada. Maecenas sollicitudin maximus maximus.",
    },
    {
      id: 2,
      name: "Mauricio",
      title: "Founder and CEO of Xa",
      picture: Picture,
      main: "Carry on with your superd work.assa",
      rating: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec purus non nulla fringilla tempor eget nec eros. Phasellus volutpat nibh dictum neque fringilla tristique. Nunc neque mi, malesuada in sodales nec, venenatis id lorem. Cras sit amet ante in dolor vehicula consectetur. Aliquam erat volutpat. Donec faucibus tellus quis ipsum dignissim ornare. Cras molestie nec quam vitae malesuada. Maecenas sollicitudin maximus maximus.",
    },
    {
      id: 3,
      name: "Jorge",
      title: "Founder and CEO of Xy",
      picture: Picture,
      main: "Carry on with your superd workasas.",
      rating: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec purus non nulla fringilla tempor eget nec eros. Phasellus volutpat nibh dictum neque fringilla tristique. Nunc neque mi, malesuada in sodales nec, venenatis id lorem. Cras sit amet ante in dolor vehicula consectetur. Aliquam erat volutpat. Donec faucibus tellus quis ipsum dignissim ornare. Cras molestie nec quam vitae malesuada. Maecenas sollicitudin maximus maximus.",
    },
    {
      id: 4,
      name: "Kleber",
      title: "Founder and CEO of Xz",
      picture: Picture,
      main: "Carry on with your superd work.ddd",
      rating: 5,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec purus non nulla fringilla tempor eget nec eros. Phasellus volutpat nibh dictum neque fringilla tristique. Nunc neque mi, malesuada in sodales nec, venenatis id lorem. Cras sit amet ante in dolor vehicula consectetur. Aliquam erat volutpat. Donec faucibus tellus quis ipsum dignissim ornare. Cras molestie nec quam vitae malesuada. Maecenas sollicitudin maximus maximus.",
    },
  ];

  const [openSection, setOpenSection] = useState(false);

  const handleSection = () => {
    setOpenSection(!openSection);
  };

  const handleTestimonialClick = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  return (
    <div>
      <SectionDescription
        Icon={<QuotesIcon className="h-6" />}
        title={sectionDetails.title}
        subject={sectionDetails.subject}
        description={sectionDetails.descripion}
        handleDescription={handleSection}
        openSection={openSection}
      />
      <div className={`flex gap-4 ${openSection ? "block" : "hidden"}`}>
        <div className="flex flex-col flex-auto w-32 custom-scrollbar gap-4 max-h-72 overflow-auto">
          {testimonials.map((testimonial) => (
            <div className="flex flex-col gap-4" key={testimonial.id}>
              <TestimonialCard
                key={testimonial.id}
                onClick={() => handleTestimonialClick(testimonial)}
                name={testimonial.name}
                title={testimonial.title}
                Icon={
                  <Image
                    src={testimonial.picture}
                    alt={`${testimonial.name}'s picture`}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                }
                isSelected={selectedTestimonial?.id === testimonial.id}
              />
            </div>
          ))}
        </div>
        <div className="rounded-2xl p-4 bgc-custom-gray-gradient rounded-lg flex-auto w-64">
          {selectedTestimonial ? (
            <div className="space-y-4">
              <div className="space-y-3">
                <span className="text-slate-400">
                  "{selectedTestimonial.main}"
                </span>
                <div className="flex">
                  {Array.from(
                    { length: selectedTestimonial.rating },
                    (_, index) => (
                      <Star className="h-6" />
                    )
                  )}
                </div>
                <div>
                  <span className="text-slate-300">
                    "{selectedTestimonial.content}"
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">
              Select a testimonial to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
