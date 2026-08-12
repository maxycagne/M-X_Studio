import PageMeta from "../../Components/ui/PageMeta";
import CareersIllustration from "../../Components/illustrations/CareersIllustration";
import SectionHeading from "../../Components/ui/SectionHeading";
import TechChip from "../../Components/ui/TechChip";
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

      <section className="pb-20 pt-20 md:pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-2">
          <div className="max-w-4xl">
            <p className="mb-4 font-display text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
              Careers
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] md:text-7xl">
              Build with a studio that takes craft{" "}
              <span className="text-primary">seriously</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-2xl">
              We hire engineers and designers who care about clarity, systems
              thinking, and shipping work that holds up.
            </p>
          </div>
          <CareersIllustration />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-soft md:p-16">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              status: no open roles
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.02em] md:text-5xl">
              Coming <span className="text-primary">soon</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              We don’t have open roles right now. Reach out anyway if you’d like
              to be considered for future openings.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <TechChip>hiring: paused</TechChip>
              <TechChip>talent pipeline</TechChip>
            </div>
            <div className="mt-10">
              <CtaButton to="/contact">Get in touch</CtaButton>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
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
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground"
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
            <ol className="mt-8 space-y-4">
              {hiringSteps.map((step, index) => (
                <li key={step} className="flex items-center gap-4">
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
