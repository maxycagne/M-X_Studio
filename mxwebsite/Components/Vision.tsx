import React from "react";

const Vision = () => {
  return (
    <section className="relative group">
      {/* Glow positioned on the right to balance with the Mission component */}
      <div className="absolute -right-10 top-0 w-32 h-32 bg-[#000051] rounded-full blur-[50px] pointer-events-none" />

      <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
        OUR <span className="text-[#173DED]">VISION</span>
      </h2>
      <p className="text-[#DCDEE2] text-lg md:text-xl max-w-3xl leading-relaxed font-light tracking-wide">
        To set a new standard in the digital landscape by crafting premium,
        scalable, and minimalist applications. We envision a future where
        technology feels effortless, empowering brands to connect with their
        audiences through seamless, high-performance design.
      </p>
    </section>
  );
};

export default Vision;
