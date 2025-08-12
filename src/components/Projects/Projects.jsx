// this is project componets
import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Projects = () => {
  const data = [
    {
      id: 1,
      projectName: "Pet Adoption",
      liveSite: "https://pet-adoption-80592.web.app/",
      description:
        "A responsive React-based platform to adopt rescued pets, manage adoptions, and donate using Stripe. Features dark mode, authentication, rich text editing, image uploads, and a powerful dashboard experience.",
      technologies: ["React", "Firebase", "Express.js", "MongoDB", "Tailwind CSS"],
      githubLinks: {
        client: "https://github.com/MdNobinfd/pet-adoption-client.git",
        server: "https://github.com/MdNobinfd/pet-adoption-server.git",
      },
      image: "https://i.ibb.co.com/KpFC09pb/Screenshot-12-8-2025-17417-pet-adoption-80592-web-app.jpg",
    },
    {
      id: 2,
      projectName: "Food Delivery App",
      liveSite: "https://assignment-eleven-3badc.web.app/",
      description:
        "A full-stack restaurant management system with food browsing, ordering, and admin features. Built using React, Node.js, Express & MongoDB with JWT auth, Firebase login, and responsive UI.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      githubLinks: {
        client: "https://github.com/MdNobinfd/restaurant-management-client.git",
        server: "https://github.com/MdNobinfd/restaurant-management-server.git",
      },
      image: "https://i.ibb.co.com/mrbp5GJV/Screenshot-2025-08-08-at-19-28-56-Restaurant-Management.png",
    },
    {
      id: 3,
      projectName: "E-commerce Store",
      liveSite: "https://garden-ten.web.app/",
      description:
        "A full-stack gardening hub for sharing tips, exploring gardeners, and engaging with a plant-loving community. Built with React, Node.js, Firebase, and MongoDB. Includes authentication, filtering, likes, and dark/light theme toggle.",
      technologies: ["React", "Redux", "Firebase", "Stripe", "Tailwind CSS"],
      githubLinks: {
        client: "https://github.com/MdNobinfd/garden-ten-client.git",
        server: "https://github.com/MdNobinfd/garden-ten-server.git",
      },
      image: "https://i.ibb.co.com/4wtPHbsf/Screenshot-2025-08-12-at-17-10-22-Assignment-Ten.png",
    },
    {
      id: 4,
      projectName: "Portfolio Website",
      liveSite: "https://use-effect-gamma.vercel.app/",
      description:
        "Orebi E-Commerce is a modern and responsive online shop built with React, Vite, Redux Toolkit, and Firebase. It includes routing, authentication, and stylish UI using Tailwind CSS and other popular libraries.",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      githubLinks: {
        client: "https://github.com/MdNobinfd/use-effect.git",
        server: null,
      },
      image: "https://i.ibb.co.com/whLJvpLG/Screenshot-2025-08-12-at-17-12-40-Vite-React.png",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-gradient-to-b relative overflow-hidden pt-32 pb-20"
    >
      <div className="absolute inset-0 bg-[#04081A]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

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

      <div className="container mx-auto relative">
        <div className="flex justify-center">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              My Projects
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="grid text-white lg:grid-cols-2 grid-cols-1 gap-10 pt-22">
          {data.map((item) => (
            <div
              key={item.id}
              className="py-8 px-10 space-y-4 rounded-2xl bg-purple-500/10 backdrop-blur-sm cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-secondary">
                  {item.projectName}
                </h2>
                <a href={item.liveSite} target="_blank" rel="noreferrer">
                  <button className="px-3 cursor-pointer text-[#f6339a] font-bold text-purple-500 text-sm rounded-2xl bg-white/10 py-1">
                    Live Site
                  </button>
                </a>
              </div>

              <p>{item.description}</p>

              <div className="flex items-center gap-3 flex-wrap">
                {item.technologies.map((tech, idx) => (
                  <h5
                    key={idx}
                    className="badge bg-white/20 px-3 rounded-md border-none text-secondary/80 opacity-80"
                  >
                    {tech}
                  </h5>
                ))}
              </div>

              <div className="flex items-center gap-x-4">
                <a
                  href={item.githubLinks.client}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="flex items-center border-2 px-3 py-1 font-bold cursor-pointer border-white/80 rounded-3xl text-sm gap-x-1 text-white/80 opacity-[0.7]">
                    <FaGithub />
                    Client
                  </button>
                </a>
                {item.githubLinks.server && (
                  <a
                    href={item.githubLinks.server}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="flex items-center border-2 px-3 py-1 font-bold cursor-pointer border-white/80 rounded-3xl text-sm gap-x-1 text-white/80 opacity-[0.7]">
                      <FaGithub />
                      Server
                    </button>
                  </a>
                )}
                <Link to={`details/${item.id}`}>
                <button className="flex items-center border-2 px-3 py-1 font-bold cursor-pointer border-white/80 rounded-3xl text-sm gap-x-1 text-white/80 opacity-[0.7]">
                  Details
                </button>
                </Link>
              </div>

              {/* Image with hover animation */}
              <div className="w-full 2xl:h-[440px] xl:h-[350px] lg:h-[200px] md:h-[440px] sm:h-[350px] h-[340px] overflow-hidden rounded-xl relative group">
                <img
                  alt={item.projectName}
                  className="transition-transform duration-[6000ms] ease-linear w-full object-cover group-hover:translate-y-[-1050px]"
                  src={item.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
