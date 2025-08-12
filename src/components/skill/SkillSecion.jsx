import React from "react";
import html from "../../assets/svg/skills/html.svg";
import css from "../../assets/svg/skills/css.svg";
import javascript from "../../assets/svg/skills/javascript.svg";
import react from "../../assets/svg/skills/react.svg";
import nextJS from "../../assets/svg/skills/nextJS.svg";
import tailwind from "../../assets/svg/skills/tailwind.svg";
import mongoDB from "../../assets/svg/skills/mongoDB.svg";
import git from "../../assets/svg/skills/git.svg";
import bootstrap from "../../assets/svg/skills/bootstrap.svg";
import figma from "../../assets/svg/skills/figma.svg";
import firebase from "../../assets/svg/skills/firebase.svg";
import materialui from "../../assets/svg/skills/materialui.svg";
import strapi from "../../assets/svg/skills/strapi.svg";

import Marquee from "react-fast-marquee";

const SkillSecion = () => {
const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "next js":
      return nextJS;
    case "tailwind":
      return tailwind;
    case "mongodb":
      return mongoDB;
    case "git":
      return git;
    case "bootstrap":
      return bootstrap;
    case "figma":
      return figma;
    case "firebase":
      return firebase;
    case "materialui":
      return materialui;
    case "strapi":
      return strapi;
    default:
      return null;
  }
};


  const skillsData = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Next JS",
    "Tailwind",
    "MongoDB",
    "Git",
    "Bootstrap",
    "Figma",
    "Firebase",
    "MaterialUI",
    "Strapi",
  ];

  return (
    <div
      id="skills"
      className="relative z-50 bg-[#020617] border-t py-12 lg:py-24 border-[#25213b]"
    >
        <div className="container mx-auto">

      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <img
                      src={skillsImage(skill)}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
        </div>
    </div>
  );
};

export default SkillSecion;
