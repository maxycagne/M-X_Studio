import { Code2, PenTool, Zap } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const features = [
  {
    title: "Engineering excellence",
    description:
      "We build scalable, future-proof architectures designed to handle growth without accumulating avoidable technical debt.",
    icon: Code2,
    accent: "text-primary",
    hairline: "bg-primary",
  },
  {
    title: "Design-driven systems",
    description:
      "Every interface decision serves usability. We craft surfaces that are as precise visually as they are operationally sound.",
    icon: PenTool,
    accent: "text-violet",
    hairline: "bg-violet",
  },
  {
    title: "Agile execution",
    description:
      "Focused delivery cycles and clear ownership mean you reach production faster without sacrificing product quality.",
    icon: Zap,
    accent: "text-mint",
    hairline: "bg-mint",
  },
];

const Different = () => {
  return (
    <section className="border-y border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Differentiators"
          title={
            <>
              What makes us <span className="text-primary">different</span>
            </>
          }
          lead="We don’t chase generic industry patterns — we set a higher bar for clarity, craft, and delivery."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="animate-rise-in rounded-3xl border border-border bg-background p-6 transition-transform hover:-translate-y-1 hover:shadow-soft md:p-8"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className={`mb-5 h-px w-12 ${feature.hairline}`} />
                <Icon className={`mb-4 h-5 w-5 ${feature.accent}`} aria-hidden="true" />
                <h3 className="font-display text-xl font-extrabold">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Different;
