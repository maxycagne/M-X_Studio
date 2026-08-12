import {
  Monitor,
  Smartphone,
  Server,
  Cloud,
  Bot,
  PenTool,
} from "lucide-react";
import CtaButton from "./ui/CtaButton";
import TechChip from "./ui/TechChip";

const accents = [
  "text-primary",
  "text-violet",
  "text-mint",
  "text-signal",
] as const;

const services = [
  {
    title: "Web Applications",
    description:
      "High-performance product surfaces engineered for clarity, speed, and long-term maintainability.",
    meta: "SPA · SSR · Design systems",
    icon: Monitor,
    id: "web",
  },
  {
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile systems with reliable offline flows and polished interaction models.",
    meta: "iOS · Android · React Native",
    icon: Smartphone,
    id: "mobile",
  },
  {
    title: "Backend Systems",
    description:
      "APIs, services, and data layers built for secure throughput and predictable operational behavior.",
    meta: "REST · Auth · Data models",
    icon: Server,
    id: "backend",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Deployment topology, observability, and infrastructure patterns that keep releases calm and reversible.",
    meta: "CI/CD · Cloud · Monitoring",
    icon: Cloud,
    id: "cloud",
  },
  {
    title: "AI & Automation",
    description:
      "Practical automation and AI-assisted workflows that reduce toil without sacrificing control.",
    meta: "Workflows · Agents · Integrations",
    icon: Bot,
    id: "ai",
  },
  {
    title: "UI/UX Engineering",
    description:
      "Interface systems where visual precision and interaction quality are treated as engineering concerns.",
    meta: "Prototypes · Systems · A11y",
    icon: PenTool,
    id: "ui",
  },
];

interface ServicesProps {
  showCta?: boolean;
}

const Services = ({ showCta = true }: ServicesProps) => {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div
            className="pointer-events-none absolute -left-8 top-10 h-44 w-44 rounded-full blur-3xl"
            style={{
              background: "color-mix(in oklab, var(--primary) 16%, transparent)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-6 bottom-16 h-48 w-48 rounded-full blur-3xl"
            style={{
              background: "color-mix(in oklab, var(--violet) 14%, transparent)",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-t-2xl border border-border bg-primary-deep shadow-soft sm:rounded-t-3xl">
              <div className="relative flex items-center justify-center py-2.5 sm:py-3">
                <span
                  className="h-2 w-2 rounded-full border border-background/20 bg-background/25"
                  aria-hidden="true"
                />
                <span className="sr-only">MacBook display</span>
              </div>

              <div className="mx-2 mb-2 overflow-hidden rounded-xl border border-border bg-card sm:mx-3 sm:mb-3 sm:rounded-2xl">
                <div className="flex items-center justify-between border-b border-border bg-secondary/70 px-3 py-2 sm:px-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-signal" />
                      <span className="h-2.5 w-2.5 rounded-full bg-mint" />
                      <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse-soft" />
                    </div>
                    <p className="hidden font-mono text-[10px] text-muted-foreground sm:block">
                      M&X Studio — Capabilities.app
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <TechChip className="!px-2 !py-0.5">macOS</TechChip>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      09:41
                    </span>
                  </div>
                </div>

                <div className="grid-canvas bg-background/50 p-4 sm:p-5 md:p-6">
                  <div className="mb-5 flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
                          Capabilities
                        </p>
                        <TechChip>modules: 6</TechChip>
                      </div>
                      <h2 className="mt-3 font-display text-2xl font-extrabold tracking-[-0.02em] md:text-4xl">
                        Engineering capabilities built as a{" "}
                        <span className="text-primary">system</span>
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground md:text-base">
                        Each service is a composable capability — not a
                        disconnected offering.
                      </p>
                    </div>
                    {showCta ? (
                      <CtaButton to="/services" className="shrink-0">
                        Explore services
                      </CtaButton>
                    ) : null}
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      const accent = accents[index % accents.length];

                      return (
                        <article
                          key={service.title}
                          className="animate-rise-in rounded-2xl border border-border bg-card p-4 transition-transform hover:-translate-y-1 hover:shadow-soft"
                          style={{ animationDelay: `${index * 70}ms` }}
                        >
                          <div className="mb-3 flex items-start justify-between gap-3">
                            <Icon
                              className={`h-4 w-4 ${accent}`}
                              aria-hidden="true"
                            />
                            <span className="font-mono text-[10px] text-muted-foreground">
                              {service.id}
                            </span>
                          </div>
                          <h3 className="font-display text-base font-extrabold tracking-tight">
                            {service.title}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                            {service.description}
                          </p>
                          <p className="mt-3 border-t border-border pt-2.5 font-mono text-[10px] text-muted-foreground">
                            {service.meta}
                          </p>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="h-2 bg-primary-deep"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in oklab, var(--primary-deep) 92%, var(--foreground)), var(--primary-deep))",
              }}
              aria-hidden="true"
            />

            <div className="relative mx-auto w-[108%] -translate-x-[3.7%] rounded-b-[1.25rem] border border-border border-t-0 bg-secondary px-6 pb-3 pt-2 shadow-soft sm:rounded-b-[1.5rem]">
              <div
                className="mx-auto h-1 w-24 rounded-full bg-border sm:w-32"
                aria-hidden="true"
              />
              <div
                className="mx-auto mt-3 h-8 w-[42%] rounded-xl border border-border bg-card/80 sm:h-10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
