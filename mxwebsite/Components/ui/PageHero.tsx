import type { ReactNode } from "react";

interface PageHeroProps {
  brand?: string;
  headline: ReactNode;
  lead: string;
  actions?: ReactNode;
  visual?: ReactNode;
  className?: string;
}

const PageHero = ({
  brand = "M&X Studio",
  headline,
  lead,
  actions,
  visual,
  className = "",
}: PageHeroProps) => {
  return (
    <section className={`atmosphere relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24 ${className}`}>
      <div className="pointer-events-none absolute inset-0 dot-canvas opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="max-w-4xl animate-rise-in">
          <p className="mb-4 font-display text-sm font-extrabold tracking-[-0.02em] text-foreground sm:text-base md:text-lg">
            {brand}
          </p>
          <h1 className="hero-title text-foreground">{headline}</h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg md:mt-6 md:text-xl lg:text-2xl">
            {lead}
          </p>
          {actions ? (
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
              {actions}
            </div>
          ) : null}
        </div>

        {visual ? (
          <div className="animate-rise-in lg:-mr-4 xl:-mr-8" style={{ animationDelay: "120ms" }}>
            {visual}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default PageHero;
