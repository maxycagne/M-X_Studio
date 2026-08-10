import PageMeta from "../../Components/ui/PageMeta";
import SectionHeading from "../../Components/ui/SectionHeading";
import ServicesIllustration from "../../Components/illustrations/ServicesIllustration";
import Services from "../../Components/Services";
import DemoCallCard from "../../Components/DemoCallCard";
import TechChip from "../../Components/ui/TechChip";

const serviceNotes = [
  {
    title: "Discovery to architecture",
    body: "We map constraints early so delivery stays grounded in real operating conditions.",
    accent: "bg-primary",
  },
  {
    title: "Interface + systems together",
    body: "Frontend, API, and infrastructure decisions stay aligned instead of drifting apart.",
    accent: "bg-violet",
  },
  {
    title: "Ship with observability",
    body: "Releases include instrumentation, rollback paths, and clear ownership after launch.",
    accent: "bg-mint",
  },
];

const ServicesPage = () => {
  return (
    <>
      <PageMeta
        title="Services — M&X Studio"
        description="Engineering capabilities across web, mobile, backend, cloud, automation, and UI/UX systems."
      />

      <section className="pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-2">
          <div className="max-w-4xl">
            <p className="mb-4 font-display text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
              Services
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] md:text-7xl">
              Capabilities designed like an engineering{" "}
              <span className="text-primary">system</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-2xl">
              From product surfaces to infrastructure — each engagement is
              structured, measurable, and built to last.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <TechChip>web</TechChip>
              <TechChip>mobile</TechChip>
              <TechChip>backend</TechChip>
              <TechChip>cloud</TechChip>
            </div>
          </div>
          <ServicesIllustration />
        </div>
      </section>

      <Services showCta={false} />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Delivery posture"
            title={
              <>
                How we keep complex builds under{" "}
                <span className="text-primary">control</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {serviceNotes.map((note, index) => (
              <article
                key={note.title}
                className="animate-rise-in rounded-3xl border border-border bg-card p-6 transition-transform hover:-translate-y-1 hover:shadow-soft"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className={`mb-5 h-px w-12 ${note.accent}`} />
                <h3 className="font-display text-xl font-extrabold">
                  {note.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {note.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DemoCallCard />
    </>
  );
};

export default ServicesPage;
