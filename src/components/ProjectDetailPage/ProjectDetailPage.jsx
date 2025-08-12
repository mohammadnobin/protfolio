// project details page
import React from "react";
import { useParams, Link } from "react-router";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
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
const ProjectDetailPage = () => {
  const { id } = useParams();

  // id স্ট্রিং, তাই Number করে মিলাতে হবে
  const project = data.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link to="/" className="text-pink-600 underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-pink-600 font-semibold border border-pink-600 px-4 py-2 rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-300 mb-8"
      >
        <FaArrowLeft /> Back to Projects
      </Link>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Side - Image */}
        <div>
          <img
            src={project.image}
            alt={project.projectName}
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side - Details */}
        <div>
          <h1 className="text-4xl text-white font-bold mb-4">{project.projectName}</h1>
          <p className="mb-6 text-white leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-3 text-pink-600">
              Technologies Used
            </h3>
            <ul className="flex flex-wrap gap-3">
              {project.technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveSite}
              target="_blank"
              rel="noreferrer"
              className="bg-pink-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-pink-700 transition-all duration-300"
            >
              Live Site
            </a>

            <a
              href={project.githubLinks.client}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border-2 border-pink-600 text-pink-600 px-4 py-2 rounded-md font-semibold hover:bg-pink-600 hover:text-white transition-all duration-300"
            >
              <FaGithub /> Client Code
            </a>

            {project.githubLinks.server && (
              <a
                href={project.githubLinks.server}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border-2 border-pink-600 text-pink-600 px-4 py-2 rounded-md font-semibold hover:bg-pink-600 hover:text-white transition-all duration-300"
              >
                <FaGithub /> Server Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
);


};

export default ProjectDetailPage;
