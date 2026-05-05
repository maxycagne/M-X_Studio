import React from "react";

const Mission = () => {
  return (
    <section className="relative group">
      <div className="absolute -left-10 top-0 w-32 h-32 bg-[#173DED]/10 rounded-full blur-[50px] pointer-events-none" />

      <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
        WHAT IS <span className="text-[#173DED]">M&X STUDIO?</span>
      </h2>
      <p className="text-[#DCDEE2] text-lg md:text-xl max-w-3xl leading-relaxed font-light tracking-wide">
        We are a digital-first creative studio focused on building the future
        through clean code and premium design. We bridge the gap between complex
        technical problems and elegant user experiences.
      </p>
    </section>
  );
};

export default Mission;
