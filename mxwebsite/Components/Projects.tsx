import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  GitBranch,
} from "lucide-react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Listah Smart Home",
      category: "Mobile Application",
      description:
        "A sleek smart home productivity app for chore organization and meal planning. Features a minimalist UI and a clean, rounded 'Walis Tambo' inspired brand identity.",
      techStack: ["React Native", "Tailwind CSS", "Firebase"],
      bgImage: "bd2f2d140f3887eb9718b8226996d041.jpg",
      accent: "#173DED",
    },
    {
      id: 2,
      title: "Coinsdrop Apparel",
      category: "E-Commerce Platform",
      description:
        "A high-conversion streetwear e-commerce storefront. Engineered with horizontal brand alignment, seamless cart flows, and dynamic asset routing.",
      techStack: ["React", "Tailwind", "Node.js"],
      bgImage: null,
      accent: "#DCDEE2",
    },
    {
      id: 3,
      title: "WAH Enterprise System",
      category: "Secure Architecture",
      description:
        "Scalable backend infrastructure managing complex payroll systems, faculty evaluations, and secure live-server authentication.",
      techStack: ["PHP", "Laravel", "MySQL"],
      bgImage: null,
      accent: "#BABABA",
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 700);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="relative w-full max-w-[100vw] min-h-screen px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center bg-[#000029] overflow-hidden py-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#000051] via-[#000029] to-[#000029] opacity-80" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 max-w-2xl mx-auto space-y-3 relative z-10 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Projects
          </h2>
          <p className="text-[#DCDEE2] text-sm sm:text-base md:text-lg leading-relaxed">
            From startups to enterprise, we’ve launched platforms that
            transformed operations, accelerated sales, and unlocked growth.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full group">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 md:-left-6 lg:-left-8 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 md:p-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white hover:bg-[#173DED] hover:border-[#173DED] transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 md:-right-6 lg:-right-8 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 md:p-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white hover:bg-[#173DED] hover:border-[#173DED] transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* 
            2. THE FIX: Removed `aspect-ratio` entirely. 
            Using strict pixel heights: 550px (mobile) -> 450px (tablet) -> 550px (desktop) 
          */}
          <div className="relative w-full overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-[#000051] h-[550px] sm:h-[500px] md:h-[450px] lg:h-[550px] shadow-[0_0_50px_rgba(0,0,81,0.5)] border border-white/5 ring-1 ring-white/10">
            {/* Slide Counter */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 font-mono text-[9px] md:text-[10px] tracking-widest text-white/80 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
              0{currentIndex + 1}{" "}
              <span className="opacity-40">/ 0{projects.length}</span>
            </div>

            {/* Sliding Track */}
            <div
              className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full h-full relative flex-shrink-0 flex items-center justify-center"
                >
                  {/* Background Rendering */}
                  {project.bgImage ? (
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <img
                        src={project.bgImage}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105 group-hover:scale-100 transition-transform duration-[3000ms] ease-out"
                      />
                      <div className="absolute inset-0 bg-[#000051]/60" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#173DED]/20 via-[#000051] to-[#000029]" />
                  )}

                  {/* Text Mask */}
                  <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,41,0.4)_0%,transparent_70%)]" />

                  {/* 
                    3. TEXT CONTAINER FIX: Force max-w-[75%] on mobile so text can NEVER 
                    slide underneath the navigation arrows and break the layout. 
                  */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full max-w-[75%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-8 mt-2 md:mt-0">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] mb-4 border bg-white/5 backdrop-blur-md shadow-lg"
                      style={{
                        color: project.accent,
                        borderColor: `${project.accent}40`,
                      }}
                    >
                      {project.category}
                    </span>

                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase mb-3 md:mb-4 leading-[1.1] drop-shadow-2xl">
                      {project.title}
                    </h4>

                    <p className="text-[#DCDEE2] text-xs sm:text-sm md:text-base leading-relaxed mb-6 md:mb-8 opacity-90 drop-shadow-md">
                      {project.description}
                    </p>

                    {/* Tech Stack & Buttons */}
                    <div className="flex flex-col items-center gap-5 pt-5 w-full border-t border-white/10">
                      <div className="flex flex-wrap justify-center gap-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-[9px] sm:text-[10px] md:text-xs text-[#BABABA] font-medium bg-white/5 px-2.5 md:px-3 py-1 rounded-md backdrop-blur-sm border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-1">
                        <button className="group flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs font-bold text-white uppercase tracking-widest hover:text-[#173DED] transition-colors">
                          View Code
                          <GitBranch className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                        </button>
                        <button className="group flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs font-bold text-[#173DED] uppercase tracking-widest hover:text-white transition-colors">
                          Live Site
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 md:mt-12 h-1 w-full max-w-[200px] sm:max-w-xs md:max-w-sm mx-auto bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#173DED] transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] relative"
            style={{
              width: `${((currentIndex + 1) / projects.length) * 100}%`,
            }}
          >
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-[2px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
