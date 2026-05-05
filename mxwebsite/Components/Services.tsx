import React from "react";
import {
  Monitor,
  Smartphone,
  Layout,
  Laptop,
  ArrowUpRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Mobile Development",
      description:
        "iOS & Android mastery. Native and cross-platform apps built for performance.",
      icon: <Smartphone className="w-8 h-8 md:w-10 md:h-10" />,
      tag: "Native & Hybrid",
      // Spans 2 cols/rows on tablet and desktop. Custom padding for larger screens.
      className:
        "sm:col-span-2 lg:col-span-2 sm:row-span-2 bg-[#173DED] text-white p-6 sm:p-8 lg:p-12",
    },
    {
      title: "Web Development",
      description: "High-performance, SEO-optimized web engines.",
      icon: <Monitor className="w-5 h-5" />,
      tag: "Architecture",
      // Spans 2 cols on tablet and desktop.
      className:
        "sm:col-span-2 lg:col-span-2 bg-[#000051] text-[#DCDEE2] relative overflow-hidden p-6 lg:p-7",
      bgImage: "bd2f2d140f3887eb9718b8226996d041.jpg",
    },
    {
      title: "Desktop Development",
      description:
        "Powerful cross-platform tools for specialized enterprise needs.",
      icon: <Laptop className="w-5 h-5" />,
      tag: "Legacy & Modern",
      // 1 col on tablet and desktop
      className:
        "sm:col-span-1 lg:col-span-1 bg-[#BABABA] text-[#000029] p-6 lg:p-7",
    },
    {
      title: "UI/UX Design",
      description:
        "Human-centric interfaces built for the next generation of digital interaction.",
      icon: <Layout className="w-5 h-5" />,
      tag: "Creative",
      // 1 col on tablet and desktop
      className:
        "sm:col-span-1 lg:col-span-1 bg-[#DCDEE2] text-[#000029] p-6 lg:p-7",
    },
  ];

  return (
    <section className="bg-[#000029] py-12 md:py-16 px-4 sm:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">
            Our Services
          </h2>
          <p className="text-[#DCDEE2] text-sm md:text-base leading-relaxed opacity-90 px-2">
            Explore the full stack of what we build — from custom systems to
            full-scale automation. Designed to solve real business problems.
          </p>
        </div>

        {/* 
          Grid Setup:
          Mobile: 1 column, auto rows based on content.
          Tablet (sm): 2 columns, minimum row height 180px but expands if needed.
          Desktop (lg): 4 columns, minimum row height 180px.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-3 sm:gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-xl flex flex-col justify-between transition-all duration-500 ease-in-out hover:scale-[0.98] ${service.className}`}
            >
              {service.bgImage && (
                <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
                  <img
                    src={service.bgImage}
                    alt=""
                    className="w-full h-full object-cover opacity-30 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#000051]/50" />
                </div>
              )}

              <div className="relative z-10 flex justify-between items-start mb-6 sm:mb-0">
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
                  {service.tag}
                </span>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="relative z-10 mt-auto">
                <div className="mb-3 opacity-90">{service.icon}</div>
                <h4
                  className={`font-bold tracking-tighter uppercase mb-2 leading-none ${
                    service.title === "Mobile Development"
                      ? "text-3xl sm:text-4xl lg:text-5xl"
                      : "text-lg sm:text-xl"
                  }`}
                >
                  {service.title}
                </h4>
                <p className="text-xs font-medium opacity-80 max-w-[280px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
