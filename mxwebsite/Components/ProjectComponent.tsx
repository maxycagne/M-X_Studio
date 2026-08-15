import { useState } from "react";
import { Layout, Monitor, Smartphone, Building2 } from "lucide-react";
import TechChip from "./ui/TechChip";
import {
  portfolioFilters,
  portfolioProjects,
  type ProjectCategory,
} from "../src/data/projects";

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

const categoryIcon = (category: Exclude<ProjectCategory, "ALL">) => {
  if (category === "MOBILE") return Smartphone;
  if (category === "WEB") return Layout;
  if (category === "ENTERPRISE") return Building2;
  return Monitor;
};

const ProjectComponent = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("ALL");

  const filteredProjects = portfolioProjects.filter((project) =>
    activeTab === "ALL" ? true : project.category === activeTab,
  );

  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className="mb-8 flex gap-2 overflow-x-auto pb-1 md:mb-10 md:flex-wrap"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {portfolioFilters.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`tap-target shrink-0 rounded-full border px-4 py-2.5 font-mono text-xs transition-colors sm:px-5 ${
                activeTab === tab
                  ? "border-primary bg-primary text-background"
                  : "border-border bg-card text-muted-foreground hover:text-primary"
              }`}
            >
              {tab.toLowerCase()}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:gap-5 lg:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const Icon = categoryIcon(project.category);
            return (
              <article
                key={project.id}
                className="animate-rise-in border-y border-border bg-card/70 py-6 transition-colors hover:bg-card md:py-8"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div
                  className={`mb-5 h-px w-12 ${hairlines[index % hairlines.length]}`}
                />
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {project.categoryLabel}
                    </p>
                    <h2 className="mt-2 font-display text-xl font-extrabold tracking-tight sm:text-2xl">
                      {project.title}
                    </h2>
                  </div>
                  <span className={accents[index % accents.length]}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                      Problem
                    </p>
                    <p className="mt-2 text-sm text-foreground">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                      Solution
                    </p>
                    <p className="mt-2 text-sm text-foreground">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm text-foreground">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                  {project.tech.map((item) => (
                    <TechChip key={item}>{item}</TechChip>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="py-12 text-center text-muted-foreground">
            No projects in this category yet.
          </p>
        ) : null}
      </div>
    </section>
  );
};

export default ProjectComponent;
