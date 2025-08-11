// // @flow strict
// import { BiLogoLinkedin } from "react-icons/bi";
// import { CiLocationOn } from "react-icons/ci";
// import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
// import { FaXTwitter } from "react-icons/fa6";
// import { IoLogoGithub, IoMdCall } from "react-icons/io";
// import { MdAlternateEmail } from "react-icons/md";
// import ContactFormDesignOnly from './ContactForm';
// import { Link } from "react-router";

// function ContactSection() {

// const personalData = {
//   name: "ABU SAID",
//   profile: '/profile.png',
//   designation: "Software Developer",
//   description: "My name is ABU SAID. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.",
//   email: 'abusaid7388@gmail.com',
//   phone: '+8801608797655',
//   address: 'Middle Badda, Dhaka, Bangladesh - 1212 ',
//   github: 'https://github.com/said7388',
//   facebook: 'https://www.facebook.com/abusaid.riyaz/',
//   linkedIn: 'https://www.linkedin.com/in/abu-said-bd/',
//   twitter: 'https://twitter.com/said7388',
//   stackOverflow: 'https://stackoverflow.com/users/16840768/abu-said',
//   leetcode: "https://leetcode.com/said3812/",
//   devUsername: "said7388",
//   resume: "https://drive.google.com/file/d/1eyutpKFFhJ9X-qpQGKhUNnVRkB5Wer00/view?usp=sharing"
// }


//   return (
//     <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
//       <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
//         <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
//           CONTACT
//         </span>
//         <span className="h-36 w-[2px] bg-[#1a1443]"></span>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
//         <ContactFormDesignOnly />
//         <div className="lg:w-3/4 ">
//           <div className="flex flex-col gap-5 lg:gap-9">
//             <p className="text-sm md:text-xl flex items-center gap-3">
//               <MdAlternateEmail
//                 className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={36}
//               />
//               <span>{personalData.email}</span>
//             </p>
//             <p className="text-sm md:text-xl flex items-center gap-3">
//               <IoMdCall
//                 className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={36}
//               />
//               <span>
//                 {personalData.phone}
//               </span>
//             </p>
//             <p className="text-sm md:text-xl flex items-center gap-3">
//               <CiLocationOn
//                 className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={36}
//               />
//               <span>
//                 {personalData.address}
//               </span>
//             </p>
//           </div>
//           <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
//             <Link target="_blank" href={personalData.github}>
//               <IoLogoGithub
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link>
//             <Link target="_blank" href={personalData.linkedIn}>
//               <BiLogoLinkedin
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link>
//             <Link target="_blank" href={personalData.twitter}>
//               <FaXTwitter
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link>
//             <Link target="_blank" href={personalData.stackOverflow}>
//               <FaStackOverflow
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link>
//             <Link target="_blank" href={personalData.facebook}>
//               <FaFacebook
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;

// @flow strict
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow, FaTwitter } from 'react-icons/fa';
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactFormDesignOnly from './ContactForm';
import React from 'react';

function ContactSection() {

  const personalData = {
    name: "ABU SAID",
    profile: '/profile.png',
    designation: "Software Developer",
    description: "My name is ABU SAID. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.",
    email: 'abusaid7388@gmail.com',
    phone: '+8801608797655',
    address: 'Middle Badda, Dhaka, Bangladesh - 1212 ',
    github: 'https://github.com/said7388',
    facebook: 'https://www.facebook.com/abusaid.riyaz/',
    linkedIn: 'https://www.linkedin.com/in/abu-said-bd/',
    twitter: 'https://twitter.com/said7388',
    stackOverflow: 'https://stackoverflow.com/users/16840768/abu-said',
    leetcode: "https://leetcode.com/said3812/",
    devUsername: "said7388",
    resume: "https://drive.google.com/file/d/1eyutpKFFhJ9X-qpQGKhUNnVRkB5Wer00/view?usp=sharing"
  }

  return (
    <div id="contact" className="my-12 lg:my-16  mt-24 text-white">
      <div className="container mx-auto relative">

      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactFormDesignOnly />
        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalData.phone}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalData.address}</span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <a href={personalData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <IoLogoGithub
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </a>
            <a href={personalData.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </a>
            <a href={personalData.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </a>
            <a href={personalData.stackOverflow} target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow">
              <FaStackOverflow
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </a>
            <a href={personalData.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactSection;
