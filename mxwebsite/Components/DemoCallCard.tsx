import { CalendarDays, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const DemoCallCard = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-primary-deep px-6 py-12 md:px-12 md:py-16">
          <div
            className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full blur-3xl"
            style={{
              background: "color-mix(in oklab, var(--primary) 35%, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 font-display text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
                Next step
              </p>
              <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] text-background md:text-5xl">
                Ready to build software that{" "}
                <span className="text-primary">holds up</span>
              </h2>
              <p className="mt-5 text-lg text-background/75 md:text-2xl">
                Share the problem space. We’ll map the architecture, timeline,
                and the first shipping increment.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/contact"
                className="cta-gradient inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
              >
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Schedule time
              </Link>
              <a
                href="mailto:hello@mxstudio.dev"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-background/20 bg-background/5 px-6 py-3 text-sm font-bold text-background transition-colors hover:bg-background/10"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoCallCard;
