import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "../../assets/css/tomorrow.css";
import Meteors from "../../components/ui/meteors";
import SparklesText from "../../components/ui/sparkles-text";
import { FlipWords } from "../../components/ui/flip-words";
import { Link } from "react-router";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import profile from '../../assets/images/mypic copy.png'

// Grid Background - Replacing the HexagonBackground
const GridBackground = () => {

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function Hero() {




  const words = [
    "MARN Stack Developer & UI/UX Enthusiast",
    "JavaScript Developer ",
    "Learning Next js",
    "Linux & GitHub for DevOps Enthusiast",
  ];



  useEffect(() => {
    Prism.highlightAll();

    // Add CSS animation for grid and dots
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
      
      /* Media query for 1366x768 resolution */
      @media screen and (width: 1366px) and (height: 768px), 
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .hero {
          padding-top: 12rem !important;
        }
        .hero .container {
          padding-top: 10rem !important;
          margin-top: 5rem !important;
        }
        .hero-section-padding {
          padding-top: 12rem !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Apply extra padding for 1366x768 resolution
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty(
          "--hero-padding-top",
          "12rem"
        );
      } else {
        document.documentElement.style.setProperty("--hero-padding-top", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <>
      <main id="home" className="bg-[#020617] text-white min-h-screen">
  <section className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding">
    {/* Grid Background */}
    <GridBackground />

    {/* Meteors */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Meteors number={10} />
    </div>

    {/* Animated particles */}
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>

    {/* Main content container */}
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28">
      
      {/* ✅ Profile Image (on top for small devices) */}
      <div className="w-full lg:w-1/2 flex justify-center relative group order-first lg:order-last mb-12 lg:mb-0">
        <div className="absolute -inset-6 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-700 ease-in-out animate-pulse z-0"></div>

        <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl shadow-blue-500/10 group-hover:shadow-blue-500/30 transition-all duration-700">
          <img
            src={profile}
            alt="Md. Nobin"
            className="w-72 sm:w-96 lg:w-10/12 mx-auto object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>
        </div>

        {/* Floating badge */}
        <div className="absolute opacity-50 -z-30 top-5 right-5  px-4 py-1.5 rounded-full bg-blue-500/30 backdrop-blur-lg border border-blue-400/40 text-blue-100 text-sm font-semibold shadow-md animate-float">
          <i className="fas fa-code mr-1"></i> MERN Developer
        </div>
      </div>

      {/* ✅ Text Content */}
      <div className="w-full lg:w-1/2 animate__animated animate__fadeInLeft relative">
        {/* Decorative blurs */}
        <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

        {/* Welcome badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 sm:mb-8 animate__animated animate__fadeInDown animate__delay-1s">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
          <span className="text-gray-300 text-sm font-medium">
            Welcome to my universe
          </span>
        </div>

        {/* Name and intro */}
        <div className="relative mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <SparklesText text="Hello" />
            <span className="relative inline-block">
              I&apos;m
              <span className="typing-effect gradient-text">
                {" "}Md. Nobin
              </span>
            </span>
          </h1>
          <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
        </div>

        {/* Role flip badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
          <i className="fas fa-rocket text-blue-400 animate-bounce text-base"></i>
          <span>
            <FlipWords className="text-xl text-blue-400 font-medium" words={words} />
          </span>
        </div>

        {/* Description */}
        <div className="mb-10 max-w-xl">
          <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
            JavaScript lover  | Crafting frameworks and coding the future 
          </p>
        </div>

        {/* Social links */}
        <div className="my-10 flex items-center gap-5">
          <a href='https://github.com/MdNobinfd' target="_blank" className="text-pink-500 hover:scale-125 transition-transform duration-300">
            <BsGithub size={28} />
          </a>
          <a href='https://www.linkedin.com/in/mdnobin/' target="_blank" className="text-pink-500 hover:scale-125 transition-transform duration-300">
            <BsLinkedin size={28} />
          </a>
          <a href='https://www.facebook.com/mohammad.nobin.581840' target="_blank" className="text-pink-500 hover:scale-125 transition-transform duration-300">
            <FaFacebook size={28} />
          </a>
          <a href='/' target="_blank" className="text-pink-500 hover:scale-125 transition-transform duration-300">
            <SiLeetcode size={28} />
          </a>
          <a href='/' target="_blank" className="text-pink-500 hover:scale-125 transition-transform duration-300">
            <FaTwitterSquare size={28} />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <a href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
            <button className="px-3 text-xs md:px-8 py-3 cursor-pointer md:py-4 bg-[#0d1224] rounded-full text-white font-medium uppercase tracking-wider flex items-center gap-1 hover:gap-3">
              <span>Contact me</span>
              <RiContactsFill size={16} />
            </button>
          </a>

          <a href='' target="_blank" className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-sm font-medium uppercase text-white transition-all duration-200">
            <span>Get Resume</span>
            <MdDownload size={16} />
          </a>
        </div>

        {/* Floating badges */}
        <div className="hidden opacity-50 -z-30 lg:block absolute left-[5.5rem] top-[2.3rem] animate-float-slow">
          <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
            <i className="fas fa-wand-magic-sparkles"></i>&nbsp;&nbsp;UI Magic
          </div>
        </div>
        <div className="hidden opacity-50 -z-30 lg:block absolute right-10 top-20 animate-float">
          <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
            <i className="fas fa-code"></i>&nbsp;&nbsp;Clean Code
          </div>
        </div>
        <div className="hidden opacity-50 -z-30 lg:block absolute top-[17rem] left-[70%] transform -translate-x-1/2 animate-float">
          <div className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
            <i className="fas fa-lightbulb"></i>&nbsp;&nbsp;Innovation
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
    <span className="text-gray-400 text-sm flex items-center gap-2">
      <i className="fas fa-mouse text-blue-400"></i>
      About me
    </span>
    <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
  </div>
</main>

    </>
  );
}
