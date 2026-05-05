import React from "react";
import { Plus, Lightbulb, Waypoints, Rocket, Network } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "1. Discover",
    description:
      "Understand the problem.\nGather insights, requirements, and business goals.",
    icon: Plus,
  },
  {
    id: 2,
    title: "2. Strategize",
    description:
      "Plan the solution.\nDesign architecture, features, and execution roadmap.",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "3. Build",
    description:
      "Bring ideas to life.\nDevelop a scalable and functional system.",
    icon: Waypoints,
  },
  {
    id: 4,
    title: "4. Validate",
    description:
      "Ensure reliability.\nTest, refine, and optimize for performance.",
    icon: Rocket,
  },
  {
    id: 5,
    title: "5. Launch",
    description:
      "Go live with confidence.\nDeploy and deliver real-world impact.",
    icon: Network,
  },
];

const Process = () => {
  return (
    <section className="relative w-full min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center bg-[#000029] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#000051] via-[#000029] to-[#000029] opacity-80" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto space-y-3 md:space-y-4 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Onboard Process
          </h2>
          <p className="text-[#DCDEE2] text-sm sm:text-base md:text-lg leading-relaxed">
            Our approach is simple: listen deeply, design smart, build fast.
            Here's how we bring your vision to life with clarity and care.
          </p>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 w-full">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                // Swapped fixed `h-64` for `min-h-[16rem]` to allow safe wrapping on narrow devices
                className="group flex flex-col min-h-[16rem] p-6 rounded-2xl bg-[#000051]/40 border border-[#173DED]/20 hover:bg-[#000051]/80 hover:border-[#173DED]/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(23,61,237,0.15)] hover:-translate-y-1"
              >
                {/* Icon positioned at top-left */}
                <div className="flex-1">
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-white group-hover:text-[#DCDEE2] transition-colors"
                  />
                </div>

                {/* Text positioned at bottom-left */}
                <div className="mt-auto pt-6">
                  <h3 className="text-white font-semibold text-lg mb-1.5">
                    {step.title}
                  </h3>
                  {/* Added whitespace-pre-line so your \n characters actually render as line breaks */}
                  <p className="text-[#BABABA] text-xs sm:text-sm font-medium leading-relaxed whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Button */}
        <div className="mt-12 md:mt-16">
          <button className="bg-white text-[#000029] font-semibold text-sm md:text-base py-3 px-8 rounded-full hover:bg-[#DCDEE2] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
