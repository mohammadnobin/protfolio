import React from "react";

import adobeXd from "../../assets/svg/skills/adobe-xd.svg";
// import adobeXd from '../../assets/svg/skills/adobe-xd.svg';
import adobeaudition from "../../assets/svg/skills/adobeaudition.svg";
import afterEffects from "../../assets/svg/skills/after-effects.svg";
import angular from "../../assets/svg/skills/angular.svg";
import aws from "../../assets/svg/skills/aws.svg";
import azure from "../../assets/svg/skills/azure.svg";
import blender from "../../assets/svg/skills/blender.svg";
import bootstrap from "../../assets/svg/skills/bootstrap.svg";
import bulma from "../../assets/svg/skills/bulma.svg";
import c from "../../assets/svg/skills/c.svg";
import canva from "../../assets/svg/skills/canva.svg";
import capacitorjs from "../../assets/svg/skills/capacitorjs.svg";
import coffeescript from "../../assets/svg/skills/coffeescript.svg";
import cplusplus from "../../assets/svg/skills/cplusplus.svg";
import csharp from "../../assets/svg/skills/csharp.svg";
import css from "../../assets/svg/skills/css.svg";
import dart from "../../assets/svg/skills/dart.svg";
import deno from "../../assets/svg/skills/deno.svg";
import django from "../../assets/svg/skills/django.svg";
import docker from "../../assets/svg/skills/docker.svg";
import fastify from "../../assets/svg/skills/fastify.svg";
import figma from "../../assets/svg/skills/figma.svg";
import firebase from "../../assets/svg/skills/firebase.svg";
import flutter from "../../assets/svg/skills/flutter.svg";
import gcp from "../../assets/svg/skills/gcp.svg";
import gimp from "../../assets/svg/skills/gimp.svg";
import git from "../../assets/svg/skills/git.svg";
import go from "../../assets/svg/skills/go.svg";
import graphql from "../../assets/svg/skills/graphql.svg";
import haxe from "../../assets/svg/skills/haxe.svg";
import html from "../../assets/svg/skills/html.svg";
import illustrator from "../../assets/svg/skills/illustrator.svg";
import ionic from "../../assets/svg/skills/ionic.svg";
import java from "../../assets/svg/skills/java.svg";
import javascript from "../../assets/svg/skills/javascript.svg";
import julia from "../../assets/svg/skills/julia.svg";
import kotlin from "../../assets/svg/skills/kotlin.svg";
import lightroom from "../../assets/svg/skills/lightroom.svg";
import markdown from "../../assets/svg/skills/markdown.svg";
import materialui from "../../assets/svg/skills/materialui.svg";
import matlab from "../../assets/svg/skills/matlab.svg";
import memsql from "../../assets/svg/skills/memsql.svg";
import microsoftoffice from "../../assets/svg/skills/microsoftoffice.svg";
import mongoDB from "../../assets/svg/skills/mongoDB.svg";
import mysql from "../../assets/svg/skills/mysql.svg";
import nextJS from "../../assets/svg/skills/nextJS.svg";
import nginx from "../../assets/svg/skills/nginx.svg";
import numpy from "../../assets/svg/skills/numpy.svg";
import nuxtJS from "../../assets/svg/skills/nuxtJS.svg";
import opencv from "../../assets/svg/skills/opencv.svg";
import photoshop from "../../assets/svg/skills/photoshop.svg";
import php from "../../assets/svg/skills/php.svg";
import picsart from "../../assets/svg/skills/picsart.svg";
import postgresql from "../../assets/svg/skills/postgresql.svg";
import premierepro from "../../assets/svg/skills/premierepro.svg";
import prisma from "../../assets/svg/skills/prisma.svg";
import python from "../../assets/svg/skills/python.svg";
import pytorch from "../../assets/svg/skills/pytorch.svg";
import react from "../../assets/svg/skills/react.svg";
import ruby from "../../assets/svg/skills/ruby.svg";
import selenium from "../../assets/svg/skills/selenium.svg";
import sketch from "../../assets/svg/skills/sketch.svg";
import strapi from "../../assets/svg/skills/strapi.svg";
import svelte from "../../assets/svg/skills/svelte.svg";
import swift from "../../assets/svg/skills/swift.svg";
import tailwind from "../../assets/svg/skills/tailwind.svg";
import tensorflow from "../../assets/svg/skills/tensorflow.svg";
import typescript from "../../assets/svg/skills/typescript.svg";
import unity from "../../assets/svg/skills/unity.svg";
import vitejs from "../../assets/svg/skills/vitejs.svg";
import vue from "../../assets/svg/skills/vue.svg";
import vuetifyjs from "../../assets/svg/skills/vuetifyjs.svg";
import webix from "../../assets/svg/skills/webix.svg";
import wolframalpha from "../../assets/svg/skills/wolframalpha.svg";
import wordpress from "../../assets/svg/skills/wordpress.svg";

import pandas from "../../assets/svg/skills/pandas.svg";
import scikitlearn from "../../assets/svg/skills/scikit-learn.svg";
import dotnet from "../../assets/svg/skills/dotnet.svg";
import dotnetcore from "../../assets/svg/skills/dotnetcore.svg";
import kubernetes from "../../assets/svg/skills/kubernetes.svg";
import linux from "../../assets/svg/skills/linux.svg";
import sqlalchemy from "../../assets/svg/skills/sqlalchemy.svg";
import fastapi from "../../assets/svg/skills/fastapi.svg";
import Marquee from "react-fast-marquee";

const SkillSecion = () => {
  const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
      case "gcp":
        return gcp;
      case "html":
        return html;
      case "photoshop":
        return photoshop;
      case "docker":
        return docker;
      case "illustrator":
        return illustrator;
      case "adobe xd":
        return adobeXd;
      case "after effects":
        return afterEffects;
      case "css":
        return css;
      case "angular":
        return angular;
      case "javascript":
        return javascript;
      case "next js":
        return nextJS;
      case "nuxt js":
        return nuxtJS;
      case "react":
        return react;
      case "svelte":
        return svelte;
      case "typescript":
        return typescript;
      case "vue":
        return vue;
      case "bootstrap":
        return bootstrap;
      case "bulma":
        return bulma;
      case "capacitorjs":
        return capacitorjs;
      case "coffeescript":
        return coffeescript;
      case "memsql":
        return memsql;
      case "mongodb":
        return mongoDB;
      case "mysql":
        return mysql;
      case "postgresql":
        return postgresql;
      case "tailwind":
        return tailwind;
      case "vitejs":
        return vitejs;
      case "vuetifyjs":
        return vuetifyjs;
      case "c":
        return c;
      case "c++":
        return cplusplus;
      case "c#":
        return csharp;
      case "dart":
        return dart;
      case "go":
        return go;
      case "java":
        return java;
      case "kotlin":
        return kotlin;
      case "julia":
        return julia;
      case "matlab":
        return matlab;
      case "php":
        return php;
      case "prisma":
        return prisma;
      case "python":
        return python;
      case "ruby":
        return ruby;
      case "swift":
        return swift;
      case "adobe audition":
        return adobeaudition;
      case "aws":
        return aws;
      case "deno":
        return deno;
      case "django":
        return django;
      case "firebase":
        return firebase;
      case "gimp":
        return gimp;
      case "git":
        return git;
      case "graphql":
        return graphql;
      case "lightroom":
        return lightroom;
      case "materialui":
        return materialui;
      case "nginx":
        return nginx;
      case "numpy":
        return numpy;
      case "opencv":
        return opencv;
      case "premiere pro":
        return premierepro;
      case "pytorch":
        return pytorch;
      case "selenium":
        return selenium;
      case "strapi":
        return strapi;
      case "tensorflow":
        return tensorflow;
      case "webix":
        return webix;
      case "wordpress":
        return wordpress;
      case "azure":
        return azure;
      case "blender":
        return blender;
      case "fastify":
        return fastify;
      case "figma":
        return figma;
      case "flutter":
        return flutter;
      case "haxe":
        return haxe;
      case "ionic":
        return ionic;
      case "markdown":
        return markdown;
      case "microsoft office":
        return microsoftoffice;
      case "picsart":
        return picsart;
      case "sketch":
        return sketch;
      case "unity":
        return unity;
      case "wolframalpha":
        return wolframalpha;
      case "canva":
        return canva;
      case "pandas":
        return pandas;
      case "sklearn":
        return scikitlearn;
      case ".net":
        return dotnet;
      case ".net core":
        return dotnetcore;
      case "kubernetes":
        return kubernetes;
      case "linux":
        return linux;
      case "sqlalchemy":
        return sqlalchemy;
      case "fastapi":
        return fastapi;
      default:
        break;
    }
  };

  const skillsData = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "Next JS",
    "Tailwind",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Git",
    "AWS",
    "Bootstrap",
    "Docker",
    "Go",
    "Figma",
    "Firebase",
    "MaterialUI",
    "Nginx",
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
