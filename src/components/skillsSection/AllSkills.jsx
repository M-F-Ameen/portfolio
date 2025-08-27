import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { BsFiletypeCss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import SingleSkill from "./SingleSkill";
import { FaSass } from "react-icons/fa";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { SiJquery } from "react-icons/si";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: BsFiletypeCss,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "Jquery",
    icon: SiJquery,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "TailwindCSS",
    icon: SiTailwindcss,
  },
  {
    skill: "Bootstap",
    icon: FaBootstrap,
  },
  {
    skill: "Sass",
    icon: FaSass,
  },
  {
    skill: "Figma",
    icon: PiFigmaLogoDuotone,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
