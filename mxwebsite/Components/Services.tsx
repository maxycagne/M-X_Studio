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
      icon: <Smartphone className="w-8 h-8" />,
      tag: "Native & Hybrid",
      className: "md:col-span-2 md:row-span-2 bg-[#173DED] text-white p-12",
    },
    {
      title: "Web Development",
      description: "High-performance, SEO-optimized web engines.",
      icon: <Monitor className="w-5 h-5" />,
      tag: "Architecture",
      className:
        "md:col-span-2 bg-[#000051] text-[#DCDEE2] relative overflow-hidden",
      bgImage: "bd2f2d140f3887eb9718b8226996d041.jpg",
    },
    {
      title: "Desktop Development",
      description:
        "Powerful cross-platform tools for specialized enterprise needs.",
      icon: <Laptop className="w-5 h-5" />,
      tag: "Legacy & Modern",
      className: "md:col-span-1 bg-[#BABABA] text-[#000029]",
    },
    {
      title: "UI/UX Design",
      description:
        "Human-centric interfaces built for the next generation of digital interaction.",
      icon: <Layout className="w-5 h-5" />,
      tag: "Creative",
      className: "md:col-span-1 bg-[#DCDEE2] text-[#000029]",
    },
  ];

  return (
    <section className="bg-[#000029] py-16 px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">
            Our Services
          </h2>
          <p className="text-[#DCDEE2] text-sm md:text-base leading-relaxed opacity-90">
            Explore the full stack of what we build — from custom systems to
            full-scale automation. Designed to solve real business problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-xl flex flex-col justify-between p-7 transition-all duration-500 ease-in-out hover:scale-[0.98] ${service.className}`}
            >
              {service.bgImage && (
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.bgImage}
                    alt=""
                    className="w-full h-full object-cover opacity-30 mix-blend-luminosity transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#000051]/50" />
                </div>
              )}

              <div className="relative z-10 flex justify-between items-start">
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
                  {service.tag}
                </span>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="relative z-10">
                <div className="mb-2 opacity-90">{service.icon}</div>
                <h4
                  className={`font-bold tracking-tighter uppercase mb-1 leading-none ${
                    service.title === "Mobile Development"
                      ? "text-4xl md:text-5xl"
                      : "text-xl"
                  }`}
                >
                  {service.title}
                </h4>
                <p className="text-[11px] md:text-xs font-medium opacity-80 max-w-[240px] leading-snug">
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
