import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Mission from "../../Components/Mission";
const About = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#000029] font-sans overflow-x-hidden text-white">
      <Header />

      <main className="pt-[140px] lg:pt-[170px] pb-20">
        <div className="max-w-6xl mx-auto px-6 space-y-40">
          <Mission />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
