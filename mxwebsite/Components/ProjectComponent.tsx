import { useState } from "react";
import { GitBranch, Monitor, Smartphone, Layout } from "lucide-react";
import TechChip from "./ui/TechChip";

type Category = "ALL" | "MOBILE" | "WEB" | "DESKTOP";

interface Project {
  id: number;
  title: string;
  description: string;
  problem: string;
  outcome: string;
  category: Category;
  tech: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "AGILA",
    description:
      "Report corruption, rate public services, and view government information in one app.",
    problem: "Citizen feedback was scattered and difficult to act on.",
    outcome: "A clearer civic reporting loop with structured service ratings.",
    category: "MOBILE",
    tech: ["Android", "Java", "Firebase", "Maps"],
  },
  {
    id: 2,
    title: "MEAL PLANNER",
    description:
      "Plan meals, track nutrition, and create grocery lists without friction.",
    problem: "Meal planning required too many disconnected tools.",
    outcome: "One planning surface from recipe intent to grocery execution.",
    category: "MOBILE",
    tech: ["Android", "Java", "MySQL"],
  },
  {
    id: 3,
    title: "DINE SYNC",
    description:
      "A tablet system for ordering, kitchen processing, and restaurant sales.",
    problem: "Floor-to-kitchen communication broke under peak load.",
    outcome: "Synchronized order flow across dining and kitchen stations.",
    category: "DESKTOP",
    tech: ["Android", "Java", "MySQL", "PHP"],
  },
  {
    id: 4,
    title: "PORTFOLIO",
    description:
      "A personal website to showcase projects, skills, and experience.",
    problem: "Work history lacked a durable public presentation layer.",
    outcome: "A fast editorial site with clear project narrative structure.",
    category: "WEB",
    tech: ["Next.js", "Tailwind", "React"],
  },
];

const accents = [
  "text-primary",
  "text-violet",
  "text-mint",
  "text-signal",
] as const;

const hairlines = [
  "bg-primary",
  "bg-violet",
  "bg-mint",
  "bg-signal",
] as const;

const ProjectComponent = () => {
  const [activeTab, setActiveTab] = useState<Category>("ALL");

  const filteredProjects = projects.filter((project) =>
    activeTab === "ALL" ? true : project.category === activeTab,
  );

  return (
    <section className="pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-wrap gap-2">
          {(["ALL", "MOBILE", "WEB", "DESKTOP"] as Category[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full border px-5 py-2 font-mono text-xs transition-colors ${
                activeTab === tab
                  ? "border-primary bg-primary text-background"
                  : "border-border bg-card text-muted-foreground hover:text-primary"
              }`}
            >
              {tab.toLowerCase()}
            </button>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="animate-rise-in rounded-3xl border border-border bg-card p-6 transition-transform hover:-translate-y-1 hover:shadow-soft md:p-8"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className={`mb-5 h-px w-12 ${hairlines[index % hairlines.length]}`} />
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {project.category}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight">
                    {project.title}
                  </h2>
                </div>
                <span className={accents[index % accents.length]}>
                  {project.category === "MOBILE" ? (
                    <Smartphone className="h-5 w-5" aria-hidden="true" />
                  ) : project.category === "WEB" ? (
                    <Layout className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Monitor className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                    Problem
                  </p>
                  <p className="mt-2 text-sm text-foreground">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                    Outcome
                  </p>
                  <p className="mt-2 text-sm text-foreground">{project.outcome}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <TechChip key={item}>{item}</TechChip>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`${project.title} repository`}
                >
                  Code
                  <GitBranch className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;
