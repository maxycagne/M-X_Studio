import {
  Monitor,
  Smartphone,
  Server,
  Cloud,
  Bot,
  PenTool,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import CtaButton from "./ui/CtaButton";

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

const services = [
  {
    title: "Web Applications",
    description:
      "High-performance product surfaces engineered for clarity, speed, and long-term maintainability.",
    meta: "SPA · SSR · Design systems",
    icon: Monitor,
  },
  {
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile systems with reliable offline flows and polished interaction models.",
    meta: "iOS · Android · React Native",
    icon: Smartphone,
  },
  {
    title: "Backend Systems",
    description:
      "APIs, services, and data layers built for secure throughput and predictable operational behavior.",
    meta: "REST · Auth · Data models",
    icon: Server,
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Deployment topology, observability, and infrastructure patterns that keep releases calm and reversible.",
    meta: "CI/CD · Cloud · Monitoring",
    icon: Cloud,
  },
  {
    title: "AI & Automation",
    description:
      "Practical automation and AI-assisted workflows that reduce toil without sacrificing control.",
    meta: "Workflows · Agents · Integrations",
    icon: Bot,
  },
  {
    title: "UI/UX Engineering",
    description:
      "Interface systems where visual precision and interaction quality are treated as engineering concerns.",
    meta: "Prototypes · Systems · A11y",
    icon: PenTool,
  },
];

interface ServicesProps {
  showCta?: boolean;
}

const Services = ({ showCta = true }: ServicesProps) => {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Capabilities"
          title={
            <>
              Engineering capabilities built as a{" "}
              <span className="text-primary">system</span>
            </>
          }
          lead="Each service is a composable capability — not a disconnected offering."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const accent = accents[index % accents.length];
            const hairline = hairlines[index % hairlines.length];

            return (
              <article
                key={service.title}
                className="animate-rise-in rounded-3xl border border-border bg-card p-6 transition-transform transition-colors hover:-translate-y-1 hover:shadow-soft"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className={`mb-5 h-px w-12 ${hairline}`} />
                <Icon className={`mb-4 h-5 w-5 ${accent}`} aria-hidden="true" />
                <h3 className="font-display text-xl font-extrabold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <p className="mt-5 font-mono text-xs text-muted-foreground">
                  {service.meta}
                </p>
              </article>
            );
          })}
        </div>

        {showCta ? (
          <div className="mt-12">
            <CtaButton to="/services">Explore services</CtaButton>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Services;
