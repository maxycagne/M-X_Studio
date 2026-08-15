import PageMeta from "../../Components/ui/PageMeta";
import PageHero from "../../Components/ui/PageHero";
import SectionHeading from "../../Components/ui/SectionHeading";
import ServicesIllustration from "../../Components/illustrations/ServicesIllustration";
import Services from "../../Components/Services";
import DemoCallCard from "../../Components/DemoCallCard";
import CtaButton from "../../Components/ui/CtaButton";

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

      <PageHero
        headline={
          <>
            Capabilities designed like an engineering{" "}
            <span className="text-primary">system</span>
          </>
        }
        lead="From product surfaces to infrastructure — each engagement is structured, measurable, and built to last."
        actions={<CtaButton to="/contact">Discuss a build</CtaButton>}
        visual={<ServicesIllustration />}
      />

      <Services showCta={false} />

      <section className="section-band relative pb-20 md:pb-28">
        <div className="relative mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Delivery posture"
            title={
              <>
                How we keep complex builds under{" "}
                <span className="text-primary">control</span>
              </>
            }
          />
          <div className="mt-10 grid gap-8 border-t border-border pt-10 md:mt-12 md:grid-cols-3 md:gap-6">
            {serviceNotes.map((note, index) => (
              <article
                key={note.title}
                className="animate-rise-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className={`mb-4 h-px w-12 ${note.accent}`} />
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
