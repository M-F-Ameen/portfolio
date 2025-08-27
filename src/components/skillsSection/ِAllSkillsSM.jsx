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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm-grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
