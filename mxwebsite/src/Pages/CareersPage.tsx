import PageMeta from "../../Components/ui/PageMeta";
import PageHero from "../../Components/ui/PageHero";
import CareersIllustration from "../../Components/illustrations/CareersIllustration";
import SectionHeading from "../../Components/ui/SectionHeading";
import CtaButton from "../../Components/ui/CtaButton";
import DemoCallCard from "../../Components/DemoCallCard";

const benefits = [
  "High-ownership engineering culture",
  "Direct collaboration with founders",
  "Remote-first operating rhythm",
  "Serious craft over theater",
];

const hiringSteps = [
  "Intro conversation",
  "Technical deep-dive",
  "Paid work sample / pairing",
  "Offer & onboarding",
];

const CareersPage = () => {
  return (
    <>
      <PageMeta
        title="Careers — M&X Studio"
        description="Join M&X Studio to build precise software with an engineering-first culture."
      />

      <PageHero
        headline={
          <>
            Build with a studio that takes craft{" "}
            <span className="text-primary">seriously</span>
          </>
        }
        lead="We hire engineers and designers who care about clarity, systems thinking, and shipping work that holds up."
        actions={<CtaButton to="/contact">Join the pipeline</CtaButton>}
        visual={<CareersIllustration />}
      />

      <section className="section-band relative pb-16 md:pb-20">
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="grid gap-6 border-y border-border py-10 md:grid-cols-[1.2fr_0.8fr] md:items-end md:py-14">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                status: no open roles
              </p>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl md:text-4xl">
                We’re not hiring right now — but we’re always{" "}
                <span className="text-primary">listening</span>
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
                Reach out if you’d like to be considered for future openings.
                Strong builders with systems instincts are welcome anytime.
              </p>
            </div>
            <div className="md:justify-self-end">
              <CtaButton to="/contact">Get in touch</CtaButton>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Culture"
              title={
                <>
                  Benefits of working inside the{" "}
                  <span className="text-primary">studio</span>
                </>
              }
            />
            <ul className="mt-8 space-y-0">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="border-t border-border py-4 text-sm text-foreground first:border-t-0"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Hiring process"
              title={
                <>
                  A clear path from intro to{" "}
                  <span className="text-primary">offer</span>
                </>
              }
            />
            <ol className="mt-8 space-y-0">
              {hiringSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-4 border-t border-border py-4 first:border-t-0"
                >
                  <span className="font-mono text-xs text-primary">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <DemoCallCard />
    </>
  );
};

export default CareersPage;
