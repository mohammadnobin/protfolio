// @flow strict
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../assets/lottie/study.json';
import AnimationLottie from "../helper/animation-lottie";
import GlowCard from "../helper/glow-card";

function Education() {
  const educations = [
    {
      id: 1,
      title: "Bachelor Degree",
      duration: "2020 - Present",
      institution: "National University of Bangladesh",
    },
    {
      id: 2,
      title: "Higher Secondary Certificate",
      duration: "2018 - 2020",
      institution: "Noakhali Islamia Kamil Madrasah",
    },
    {
      id: 3,
      title: "Secondary School Certificate",
      duration: "2008 - 2018",
      institution: "Baitus Saif Islamia Madrasah",
    }
  ];

  return (
    <section
      id="education"
      className="relative z-50 border-t border-[#25213b] my-12 lg:my-24"
    >
      {/* Container Wrapper */}
      <div className="container mx-auto px-4 lg:px-8">
        {/* Background Image */}
        <img
          src="/section.svg"
          alt="Hero"
          width={1572}
          height={795}
          className="absolute top-0 left-1/2 -translate-x-1/2 -z-10"
        />

        {/* Top Border Line */}
        <div className="flex justify-center -translate-y-[1px]">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
          </div>
        </div>

        {/* Section Title */}
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Educations
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Animation Section */}
            <div className="flex justify-center items-start">
              <div className="w-3/4 h-3/4">
                <AnimationLottie animationPath={lottieFile} />
              </div>
            </div>

            {/* Education Cards */}
            <div>
              <div className="flex flex-col gap-6">
                {educations.map((education) => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="p-3 relative text-white">
                      <img
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base">{education.institution}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
