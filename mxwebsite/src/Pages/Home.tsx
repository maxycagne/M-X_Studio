// src/Pages/Home.tsx
import React from "react";
import Header from "../../Components/Header";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#000029] font-sans overflow-hidden">
      <Header />

      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="relative z-10 text-center max-w-5xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-8 leading-[0.85]">
            BUILD THE <br />
            <span className="text-[#173DED]">FUTURE</span> WITH US.
          </h1>

          <p className="text-[#DCDEE2] text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
            From ideas to reality, we build digital solutions designed to solve
            real-world problems.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-white text-[#000029] px-12 py-5 rounded-full text-xs uppercase tracking-[0.3em] font-black hover:bg-[#DCDEE2] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              Let's Build Together
            </button>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#173DED]/10 rounded-full blur-[120px] pointer-events-none" />
      </main>
    </div>
  );
};

export default Home;
