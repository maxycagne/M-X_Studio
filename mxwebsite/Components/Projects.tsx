import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import TechChip from "./ui/TechChip";
import CtaButton from "./ui/CtaButton";
import { featuredProjects } from "../src/data/projects";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const project = featuredProjects[currentIndex];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === featuredProjects.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  if (!project) return null;

  return (
    <section className="section-band relative py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl px-4">
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

        <div className="relative mt-12 md:mt-14">
          <div
            className={`border-y border-border bg-card/80 py-8 transition-opacity duration-300 md:py-10 ${
              isAnimating ? "opacity-60" : "opacity-100"
            }`}
          >
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <TechChip>{project.categoryLabel}</TechChip>
              <span className="font-mono text-xs text-muted-foreground">
                0{currentIndex + 1} / 0{featuredProjects.length}
              </span>
            </div>

            <h3 className="font-display text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl md:text-4xl">
              {project.title}
            </h3>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
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
              <div className="sm:col-span-2 md:col-span-1">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                  Outcome
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {project.outcome}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
              {project.tech.map((tech) => (
                <TechChip key={tech}>{tech}</TechChip>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous project"
                className="tap-target rounded-full border border-border bg-card p-3 text-foreground transition-colors hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next project"
                className="tap-target rounded-full border border-border bg-card p-3 text-foreground transition-colors hover:text-primary"
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
