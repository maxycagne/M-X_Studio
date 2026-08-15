import CtaButton from "./ui/CtaButton";
import SectionHeading from "./ui/SectionHeading";
import oranjeLogo from "../src/assets/partners/logo.jpg";
import logoOne from "../src/assets/partners/logo1.png";
import moncadaLogo from "../src/assets/partners/moncadalogo.jpg";
import priLogo from "../src/assets/partners/pri-removebg-.png";
import primeAgentLogo from "../src/assets/partners/prime_agent-removebg-preview.png";

const partners = [
  { name: "Oranje Cafe", src: oranjeLogo },
  { name: "Coins Drop", src: logoOne },
  { name: "Bayan ng Moncada", src: moncadaLogo },
  { name: "PRI", src: priLogo },
  { name: "Prime Agent", src: primeAgentLogo },
] as const;

const PartnerMark = ({ name, src }: { name: string; src: string }) => (
  <div className="flex shrink-0 items-center justify-center px-5 sm:px-10">
    <img
      src={src}
      alt={name}
      className="h-12 w-auto max-w-[6.5rem] object-contain opacity-60 grayscale transition-[filter,opacity] duration-300 hover:opacity-100 hover:grayscale-0 sm:h-16 sm:max-w-[9rem]"
    />
  </div>
);

const Partners = () => {
  const sequence = [...partners, ...partners];

  return (
    <>
      <section
        className="overflow-hidden border-y border-border bg-secondary/70"
        aria-label="Our partners and clients"
      >
        <div className="border-b border-border bg-card/80 px-4 py-10 md:py-14">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 font-display text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
              Trust
            </p>
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] text-foreground md:text-5xl">
              Partners & <span className="text-primary">clients</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-xl">
              Trusted by forward-thinking businesses across industries.
            </p>
          </div>
        </div>

        <div className="relative py-8 md:py-10">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-secondary to-transparent sm:w-24"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-secondary to-transparent sm:w-24"
            aria-hidden="true"
          />

          <div className="flex w-max animate-marquee">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center">
                {sequence.map((partner, index) => (
                  <div
                    key={`${copy}-${partner.name}-${index}`}
                    className="flex items-center"
                  >
                    <PartnerMark name={partner.name} src={partner.src} />
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

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-8 border-y border-border py-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12 md:py-14">
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
            </div>

            <div>
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
