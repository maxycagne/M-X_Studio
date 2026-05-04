// src/Pages/Home.tsx
import React from "react";
import Header from "../../Components/Header";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#000029] font-sans overflow-hidden">
      <Header />

      <main className="flex min-h-[100dvh] items-center justify-center px-4 sm:px-6 pt-[140px] lg:pt-[170px] pb-12">
        <div className="relative z-10 text-center max-w-5xl w-full">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6 sm:mb-8 leading-[0.9] sm:leading-[0.85]">
            BUILD THE <br />
            <span className="text-[#173DED]">FUTURE</span> WITH US.
          </h1>

          <p className="text-[#DCDEE2] text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed font-light tracking-wide px-2 sm:px-0">
            From ideas to reality, we build digital solutions designed to solve
            real-world problems.
          </p>

          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
            <button className="group relative bg-white text-[#000029] w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-5 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.3em] font-black hover:bg-[#DCDEE2] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] active:scale-95">
              Let's Build Together
            </button>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-[#173DED]/15 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      </main>
    </div>
  );
};

export default Home;
