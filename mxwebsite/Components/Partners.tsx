import CtaButton from "./ui/CtaButton";
import SectionHeading from "./ui/SectionHeading";
import TechChip from "./ui/TechChip";

/**
 * Drop partner logo files into `src/assets/partners/` and wire them here.
 * Until then, wordmark placeholders keep the layout intentional.
 */
const partners = [
  { name: "Northline", mark: "NL" },
  { name: "Cascade Ops", mark: "CO" },
  { name: "Vertex Labs", mark: "VL" },
  { name: "Harbor Systems", mark: "HS" },
  { name: "Pulsefield", mark: "PF" },
  { name: "Aperture Co", mark: "AC" },
] as const;

const PartnerMark = ({
  name,
  mark,
}: {
  name: string;
  mark: string;
}) => (
  <div className="flex shrink-0 items-center gap-3 px-8 sm:px-10">
    <span
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card font-mono text-[10px] font-bold text-primary"
      aria-hidden="true"
    >
      {mark}
    </span>
    <span className="whitespace-nowrap font-display text-sm font-extrabold tracking-tight text-foreground sm:text-base">
      {name}
    </span>
  </div>
);

const Partners = () => {
  const sequence = [...partners, ...partners];

  return (
    <>
      <section
        className="overflow-hidden border-y border-border bg-secondary/70"
        aria-label="Partner logos"
      >
        <div className="border-b border-border bg-card px-4 py-2.5">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
              Partners
            </p>
            <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Trusted delivery network
            </p>
          </div>
        </div>

        <div className="relative py-6 md:py-8">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary to-transparent sm:w-24"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary to-transparent sm:w-24"
            aria-hidden="true"
          />

          <div className="flex w-max animate-marquee">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center">
                {sequence.map((partner, index) => (
                  <div key={`${copy}-${partner.name}-${index}`} className="flex items-center">
                    <PartnerMark name={partner.name} mark={partner.mark} />
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-border"
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <SectionHeading
                eyebrow="Partnerships"
                title={
                  <>
                    We can connect for{" "}
                    <span className="text-primary">partnership</span>
                  </>
                }
                lead="Looking to collaborate, co-build, or refer work? We’re open to agency partnerships, product alliances, and long-term delivery relationships."
              />
              <div className="mt-8 flex flex-wrap gap-2">
                <TechChip>co-build</TechChip>
                <TechChip>referrals</TechChip>
                <TechChip>white-label</TechChip>
                <TechChip>long-term</TechChip>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-background p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                next step
              </p>
              <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight">
                Let’s explore the fit
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Share how you work, who you serve, and where a partnership could
                create clearer delivery for both sides.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaButton to="/contact">Connect for partnership</CtaButton>
                <CtaButton
                  href="mailto:hello@mxstudio.dev?subject=Partnership%20inquiry"
                  variant="secondary"
                  showArrow={false}
                >
                  Email us
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
