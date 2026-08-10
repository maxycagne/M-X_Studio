import { Search, Map, Hammer, ShieldCheck, Rocket } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import CtaButton from "./ui/CtaButton";

const accents = [
  "text-primary",
  "text-violet",
  "text-mint",
  "text-signal",
  "text-primary",
] as const;

const steps = [
  {
    title: "Discover",
    description:
      "Understand the problem, constraints, and business goals before writing a line of production code.",
    icon: Search,
  },
  {
    title: "Strategize",
    description:
      "Define architecture, delivery milestones, and the technical decisions that keep the path clear.",
    icon: Map,
  },
  {
    title: "Build",
    description:
      "Implement in focused increments with strong interfaces, tests where they matter, and clean ownership.",
    icon: Hammer,
  },
  {
    title: "Validate",
    description:
      "Pressure-test reliability, accessibility, and performance before the release window opens.",
    icon: ShieldCheck,
  },
  {
    title: "Launch",
    description:
      "Ship with observability, rollback plans, and a calm handoff into ongoing iteration.",
    icon: Rocket,
  },
];

const Process = () => {
  return (
    <section className="border-y border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              A delivery rhythm built for{" "}
              <span className="text-primary">clarity</span>
            </>
          }
          lead="Listen deeply, design smart, build with discipline, and ship with confidence."
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="animate-rise-in rounded-3xl border border-border bg-background p-6 transition-transform hover:-translate-y-1 hover:shadow-soft"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="mb-8 flex items-center justify-between">
                  <Icon
                    className={`h-5 w-5 ${accents[index]}`}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-extrabold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-12">
          <CtaButton to="/contact">Get started</CtaButton>
        </div>
      </div>
    </section>
  );
};

export default Process;
