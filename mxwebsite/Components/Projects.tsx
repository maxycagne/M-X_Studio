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

  // Project Data (Text unchanged)
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
    <section className="relative w-full min-h-screen  px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center bg-[#000029] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#000051] via-[#000029] to-[#000029] opacity-80" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Centered Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Projects
          </h2>
          <p className="text-[#DCDEE2] text-base md:text-lg leading-relaxed">
            From startups to enterprise, we’ve launched platforms that
            transformed operations, accelerated sales, and unlocked growth.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full group">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:-left-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white hover:bg-[#173DED] hover:border-[#173DED] hover:shadow-[0_0_30px_rgba(23,61,237,0.5)] hover:scale-110 transition-all duration-300 disabled:opacity-50"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 md:-right-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white hover:bg-[#173DED] hover:border-[#173DED] hover:shadow-[0_0_30px_rgba(23,61,237,0.5)] hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Carousel Viewport with added ambient glow */}
          <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-[#000051] aspect-[4/5] md:aspect-[16/9] shadow-[0_0_50px_rgba(0,0,81,0.5)] border border-white/5 ring-1 ring-white/10">
            {/* Slide Counter */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 font-mono text-[10px] md:text-xs tracking-widest text-white/80 bg-black/30 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
              0{currentIndex + 1}{" "}
              <span className="opacity-40">/ 0{projects.length}</span>
            </div>

            {/* Sliding Track */}
            <div
              className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="min-w-full h-full relative flex-shrink-0 flex items-center justify-center"
                >
                  {/* Background Rendering */}
                  {project.bgImage ? (
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <img
                        src={project.bgImage}
                        alt={project.title}
                        // Added a slow pan/zoom effect to the image
                        className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105 group-hover:scale-100 transition-transform duration-[3000ms] ease-out"
                      />
                      <div className="absolute inset-0 bg-[#000051]/60" />
                    </div>
                  ) : (
                    // Richer fallback gradient for items without images
                    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#173DED]/20 via-[#000051] to-[#000029]" />
                  )}

                  {/* Ambient text legibility mask */}
                  <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,41,0.4)_0%,transparent_70%)]" />

                  {/* Centered Content Overlay */}
                  <div className="relative z-10 p-8 md:p-24 flex flex-col items-center justify-center text-center w-full">
                    <span
                      className="inline-block px-4 py-1.5 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] mb-6 md:mb-8 border bg-white/5 backdrop-blur-md shadow-lg"
                      style={{
                        color: project.accent,
                        borderColor: `${project.accent}40`,
                      }}
                    >
                      {project.category}
                    </span>

                    <h4 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-[1.1] max-w-4xl drop-shadow-2xl">
                      {project.title}
                    </h4>

                    <p className="text-[#DCDEE2] text-sm md:text-lg leading-relaxed max-w-2xl mb-10 md:mb-12 opacity-90 drop-shadow-md">
                      {project.description}
                    </p>

                    {/* Centered Tech Stack & Actions */}
                    <div className="flex flex-col items-center gap-8 pt-8 w-full border-t border-white/10 max-w-2xl">
                      <div className="flex flex-wrap justify-center gap-3">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs text-[#BABABA] font-medium bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 cursor-default px-4 py-1.5 rounded-md backdrop-blur-sm border border-white/5 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-2">
                        <button className="group flex items-center gap-2 text-xs md:text-sm font-bold text-white uppercase tracking-widest hover:text-[#173DED] transition-colors">
                          View Code
                          <GitBranch className="w-4 h-4 md:w-5 md:h-5 opacity-70 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
                        </button>
                        <button className="group flex items-center gap-2 text-xs md:text-sm font-bold text-[#173DED] uppercase tracking-widest hover:text-white transition-colors">
                          Live Site
                          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="mt-12 h-1 w-full max-w-md mx-auto bg-white/10 rounded-full overflow-hidden shadow-[0_0_10px_rgba(23,61,237,0.2)]">
          <div
            className="h-full bg-[#173DED] shadow-[0_0_10px_#173DED] transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] relative"
            style={{
              width: `${((currentIndex + 1) / projects.length) * 100}%`,
            }}
          >
            {/* Added a tiny highlight to the end of the progress bar */}
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-[2px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
