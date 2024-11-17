"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import HomeIcon from "../assets/svg/home.svg";
import AboutIcon from "../assets/svg/about.svg";
import ProjectsIcon from "../assets/svg/projects.svg";
import ContactIcon from "../assets/svg/contact.svg";

import NavItem from "./NavItem";

export default function Navigation() {
  const rawPath = usePathname();
  const [selected, setSelected] = useState("");

  const routeConfig = {
    home: { icon: HomeIcon, label: "Home" },
    about: { icon: AboutIcon, label: "About" },
    portfolio: { icon: ProjectsIcon, label: "Portfolio" },
    contact: { icon: ContactIcon, label: "Contact" },
  };

  useEffect(() => {
    let path = rawPath.replaceAll("/", "");

    if (path == "") {
      path = "home";
    }

    if (
      Object.values(routeConfig)
        .map((route) => route.label.toLowerCase())
        .includes(path)
    ) {
      setSelected(path.charAt(0).toUpperCase() + path.slice(1));
    }
  }, [rawPath]);

  return (
    <nav className="flex flex-col justify-center items-center space-y-7">
      {Object.entries(routeConfig).map(([key, { icon: Icon, label }]) => (
        <NavItem
          key={key}
          label={label}
          Icon={<Icon className="w-7 h-7" />}
          isSelected={selected === label}
          onClick={() => setSelected(label)}
        />
      ))}
    </nav>
  );
}
