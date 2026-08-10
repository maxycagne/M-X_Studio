import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight, GitBranch } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import TechChip from "./ui/TechChip";
import CtaButton from "./ui/CtaButton";

const projects = [
  {
    id: 1,
    title: "Listah Smart Home",
    category: "Mobile Application",
    problem: "Household coordination was fragmented across chats and notes.",
    solution:
      "A focused productivity app for chores, meals, and shared routines with a calm, minimal interface.",
    outcome: "Faster planning loops and clearer household ownership.",
    techStack: ["React Native", "Tailwind CSS", "Firebase"],
  },
  {
    id: 2,
    title: "Coinsdrop Apparel",
    category: "E-Commerce Platform",
    problem: "The brand needed a storefront that converted without visual noise.",
    solution:
      "A high-conversion commerce system with clean catalog flows and disciplined brand alignment.",
    outcome: "Smoother checkout paths and stronger merchandising clarity.",
    techStack: ["React", "Tailwind", "Node.js"],
  },
  {
    id: 3,
    title: "WAH Enterprise System",
    category: "Secure Architecture",
    problem: "Operations depended on fragile, disconnected internal tools.",
    solution:
      "A secure backend platform for payroll, evaluations, and authenticated live-server workflows.",
    outcome: "Centralized operations with stronger access control.",
    techStack: ["PHP", "Laravel", "MySQL"],
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const project = projects[currentIndex];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Projects engineered for measurable{" "}
              <span className="text-primary">outcomes</span>
            </>
          }
          lead="From product interfaces to enterprise systems — each engagement is treated like production infrastructure."
        />

        <div className="relative mt-14">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <TechChip>{project.category}</TechChip>
              <span className="font-mono text-xs text-muted-foreground">
                0{currentIndex + 1} / 0{projects.length}
              </span>
            </div>

            <h3 className="font-display text-3xl font-extrabold tracking-[-0.02em] md:text-4xl">
              {project.title}
            </h3>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                  Problem
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {project.problem}
                </p>
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                  Solution
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {project.solution}
                </p>
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                  Outcome
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {project.outcome}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <TechChip key={tech}>{tech}</TechChip>
                ))}
              </div>
              <div className="flex gap-5">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                >
                  View code
                  <GitBranch className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary"
                >
                  Live site
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous project"
                className="rounded-full border border-border bg-card p-3 text-foreground transition-colors hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next project"
                className="rounded-full border border-border bg-card p-3 text-foreground transition-colors hover:text-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <CtaButton to="/projects" variant="secondary" showArrow={false}>
              View all projects
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
