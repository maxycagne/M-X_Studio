import React, { useState } from "react";
import { GitBranch, Monitor, Smartphone, Layout } from "lucide-react";

type Category = "ALL" | "MOBILE" | "WEB" | "DESKTOP";

interface Project {
  id: number;
  title: string;
  description: string;
  category: Category;
  tech: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "AGILA",
    description:
      "Report corruption, rate public services, and view government information in one app.",
    category: "MOBILE",
    tech: ["Android", "Java", "Firebase", "Maps"],
  },
  {
    id: 2,
    title: "MEAL PLANNER",
    description:
      "Plan your meals, track your nutrition, and create grocery lists.",
    category: "MOBILE",
    tech: ["Android", "Java", "MySQL"],
  },
  {
    id: 3,
    title: "DINE SYNC",
    description:
      "A tablet system for ordering, kitchen processing, and sales in restaurants.",
    category: "DESKTOP",
    tech: ["Android", "Java", "MySQL", "PHP"],
  },
  {
    id: 4,
    title: "PORTFOLIO",
    description:
      "A personal website to showcase my projects, skills, and experience.",
    category: "WEB",
    tech: ["Next.js", "Tailwind", "React"],
  },
];

const ProjectComponent = () => {
  const [activeTab, setActiveTab] = useState<Category>("ALL");

  const filteredProjects = projects.filter((project) =>
    activeTab === "ALL" ? true : project.category === activeTab,
  );

  return (
    <div className="min-h-screen bg-[#000029] text-white font-sans py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-400 uppercase tracking-[0.4em] text-xs font-bold mb-10">
            Glimpse to our Projects
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {["ALL", "MOBILE", "WEB", "DESKTOP"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as Category)}
                className={`px-10 py-2 rounded-full border text-xs font-bold tracking-widest transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#2563eb] border-[#2563eb] shadow-[0_0_20px_rgba(37,99,235,0.4)] text-white"
                    : "border-gray-700 text-gray-400 hover:border-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0f172a]/40 border border-gray-800 rounded-[3rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 hover:border-gray-600 transition-all group"
            >
              {/* Image/Mockup Placeholder */}
              <div className="w-full md:w-1/2 flex justify-center items-center aspect-square bg-[#1e293b]/50 rounded-3xl overflow-hidden relative">
                <div className="opacity-20 group-hover:opacity-40 transition-opacity">
                  {project.category === "MOBILE" && <Smartphone size={80} />}
                  {project.category === "WEB" && <Layout size={80} />}
                  {project.category === "DESKTOP" && <Monitor size={80} />}
                </div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-500 text-xs">
                  [PROJECT MOCKUP]
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-black tracking-tight uppercase">
                    {project.title}
                  </h3>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <GitBranch size={20} />
                  </a>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tech.map((item) => (
                    <div
                      key={item}
                      className="w-10 h-10 rounded-xl bg-[#1e293b] border border-gray-700 flex items-center justify-center text-[10px] font-bold text-gray-300 hover:border-[#2563eb] transition-colors cursor-default"
                      title={item}
                    >
                      {item.substring(0, 2)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
