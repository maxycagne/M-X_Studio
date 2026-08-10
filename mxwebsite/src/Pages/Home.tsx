import PageMeta from "../../Components/ui/PageMeta";
import CtaButton from "../../Components/ui/CtaButton";
import HomeIllustration from "../../Components/illustrations/HomeIllustration";
import Services from "../../Components/Services";
import Process from "../../Components/Process";
import Projects from "../../Components/Projects";
import Metrics from "../../Components/Metrics";
import TechStack from "../../Components/TechStack";
import DemoCallCard from "../../Components/DemoCallCard";

const Home = () => {
  return (
    <>
      <PageMeta
        title="M&X Studio — Software Development Agency"
        description="M&X Studio builds precise, scalable software for product teams and operators who need reliable engineering."
      />

      <section className="pb-32 pt-20 md:pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-4xl animate-rise-in">
            <p className="mb-4 font-display text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
              Software development agency
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] md:text-7xl">
              We build software that makes teams move{" "}
              <span className="text-primary">faster</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-2xl">
              Product interfaces, backend systems, and infrastructure —
              engineered with precision for teams that need software they can
              trust in production.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CtaButton to="/contact">Start a project</CtaButton>
              <CtaButton to="/projects" variant="secondary" showArrow={false}>
                View selected work
              </CtaButton>
            </div>
          </div>

          <HomeIllustration />
        </div>
      </section>

      <Services />
      <Projects />
      <Metrics />
      <Process />
      <TechStack />
      <DemoCallCard />
    </>
  );
};

export default Home;
