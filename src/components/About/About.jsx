import myimage from "../../assets/images/bannerleft.png";
export default function About() {
  return (
    <>
      <section id="about" className="py-10  text-white bg-[#04081A]">
        <div className="mx-auto container space-y-8 px-6 md:space-y-16">
          <div className="flex justify-center">
            <div className="flex  items-center">
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                ABOUT ME
              </span>
              <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            </div>
          </div>
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b w-full lg:w-8/12 aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={myimage} // add your photo URL here
                  className="rounded-[15px] w-full mx-auto shadow block"
                  alt="Md Nobin"
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hi, I’m <span className="font-bold">Md Nobin</span>, a
                passionate{" "}
                <span className="font-semibold">MERN Stack Developer</span> with
                over 1 years of hands-on experience building modern, responsive,
                and user-focused web applications. My programming journey
                started with curiosity about how websites work — that curiosity
                soon turned into a love for turning ideas into working products
                through clean, well-structured code.
              </p>

              <p className="text-white">
                I have worked extensively with{" "}
                <span className="font-medium">MongoDB, Express.js, React,</span>{" "}
                and <span className="font-medium">Node.js</span>, and I often
                use tools like{" "}
                <span className="font-medium">Tailwind CSS, Firebase,</span> and
                Git to ship scalable and maintainable solutions. I especially
                enjoy projects where <em>design meets functionality</em>:
                crafting intuitive interfaces while ensuring a robust backend
                and smooth performance.
              </p>

              <p className="text-white">
                Problem-solving excites me — I love debugging tricky issues,
                improving performance, and writing code that other developers
                can read and build upon. I take pride in producing well-tested,
                maintainable work and in collaborating closely with designers
                and teammates to deliver the best result.
              </p>

              <p className="text-white">
                Outside of programming, I stay curious: I follow new tech
                trends, play cricket, and spend quality time with friends and
                family. These activities keep me balanced and fuel my
                creativity.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    My goal is to keep growing as a developer, contribute to
                    meaningful projects, and create products that help and
                    inspire people. I believe in continuous learning, staying
                    humble, and always trying to do a little better than
                    yesterday.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Md Nobin, MERN Stack Developer
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
