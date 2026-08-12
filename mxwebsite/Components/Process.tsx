import {
  Hammer,
  Brain,
  Network,
  Target,
  Route,
  Handshake,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import CtaButton from "./ui/CtaButton";

const accents = [
  "text-primary",
  "text-violet",
  "text-mint",
  "text-signal",
  "text-primary",
  "text-violet",
] as const;

const hairlines = [
  "bg-primary",
  "bg-violet",
  "bg-mint",
  "bg-signal",
  "bg-primary",
  "bg-violet",
] as const;

const principles = [
  {
    title: "Custom-Built From Scratch",
    description: "No off-the-shelf systems",
    icon: Hammer,
  },
  {
    title: "Business-First Thinking",
    description: "We design logic before code",
    icon: Brain,
  },
  {
    title: "Scalable Architecture",
    description: "Built to grow with you",
    icon: Network,
  },
  {
    title: "Results-Focused Execution",
    description: "Solve real operational problems",
    icon: Target,
  },
  {
    title: "End-to-End Ownership",
    description: "From idea to deployment",
    icon: Route,
  },
  {
    title: "Long-Term Partner Mindset",
    description: "Not a one-off dev shop",
    icon: Handshake,
  },
];

const Process = () => {
  return (
    <section className="border-y border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Development process"
          title={
            <>
              Build better <span className="text-primary">together</span>
            </>
          }
          lead="A partnership approach — custom systems, clear logic, and ownership from idea through deployment."
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="animate-rise-in rounded-3xl border border-border bg-background p-6 transition-transform hover:-translate-y-1 hover:shadow-soft"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className={`mb-5 h-px w-12 ${hairlines[index]}`} />
                <div className="mb-6 flex items-center justify-between">
                  <Icon
                    className={`h-5 w-5 ${accents[index]}`}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-extrabold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-12">
          <CtaButton to="/contact">Free strategy call</CtaButton>
        </div>
      </div>
    </section>
  );
};

export default Process;
