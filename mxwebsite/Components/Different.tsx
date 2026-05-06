import React from "react";

// Data array for our differentiators to keep the component clean
const features = [
  {
    id: 1,
    title: "Engineering Excellence",
    description:
      "We don't just write code; we build scalable, future-proof architectures designed to handle growth without technical debt.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Design-Driven",
    description:
      "Aesthetics meet usability. We ensure every pixel serves a purpose, crafting interfaces that are as beautiful as they are functional.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Agile Execution",
    description:
      "Speed without compromise. Our streamlined workflows and rapid iteration cycles mean you get to market faster with a superior product.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

const Different = () => {
  return (
    <section className="bg-[#000029] py-24 px-6 sm:px-10 lg:px-16 font-sans relative overflow-hidden flex items-center min-h-screen">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#173DED] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.07] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 leading-tight text-[#DCDEE2]">
            WHAT MAKES US <span className="text-[#173DED]">DIFFERENT</span>
          </h2>
          <p className="text-[#BABABA] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            In a crowded digital landscape, we don't just follow industry
            standards—we aim to set new ones. Here is our edge.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-[#000051] border border-white/5 hover:border-[#173DED]/50 rounded-[32px] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(23,61,237,0.3)] flex flex-col relative overflow-hidden"
            >
              {/* Subtle inner hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#173DED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-[#000029] border border-white/10 flex items-center justify-center text-[#173DED] mb-8 group-hover:scale-110 group-hover:bg-[#173DED] group-hover:text-white transition-all duration-500 relative z-10">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-bold text-[#DCDEE2] mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[#BABABA] leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>

              {/* Decorative line that grows on hover */}
              <div className="h-1 w-12 bg-[#173DED]/30 rounded-full mt-8 group-hover:w-full group-hover:bg-[#173DED] transition-all duration-500 relative z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Different;
