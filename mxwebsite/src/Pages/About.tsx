import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Mission from "../../Components/Mission";
import OurTeam from "../../Components/OurTeam";

const About = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#000029] font-sans overflow-x-hidden text-white">
      <Header />

      <main>
        <section className="relative flex min-h-[100dvh] items-center justify-center px-4 sm:px-6 pt-[140px] lg:pt-[170px] pb-12">
          <div className="relative z-10 w-full max-w-6xl mx-auto">
            <Mission />
          </div>
        </section>

        <section className="relative flex min-h-[100dvh] items-center justify-center px-4 sm:px-6 py-12">
          <div className="relative z-10 w-full max-w-6xl mx-auto">
            <OurTeam />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
