import PageMeta from "../../Components/ui/PageMeta";
import PageHero from "../../Components/ui/PageHero";
import CtaButton from "../../Components/ui/CtaButton";
import HomeIllustration from "../../Components/illustrations/HomeIllustration";
import Services from "../../Components/Services";
import Process from "../../Components/Process";
import Projects from "../../Components/Projects";
import Metrics from "../../Components/Metrics";
import Partners from "../../Components/Partners";
import DemoCallCard from "../../Components/DemoCallCard";

const Home = () => {
  return (
    <>
      <PageMeta
        title="M&X Studio — Software Development Agency"
        description="M&X Studio builds precise, scalable software for product teams and operators who need reliable engineering."
      />

      <PageHero
        headline={
          <>
            We build software that makes teams move{" "}
            <span className="text-primary">faster</span>.
          </>
        }
        lead="Product interfaces, backend systems, and infrastructure — engineered with precision for teams that need software they can trust in production."
        actions={
          <>
            <CtaButton to="/contact">Start a project</CtaButton>
            <CtaButton to="/projects" variant="secondary" showArrow={false}>
              View selected work
            </CtaButton>
          </>
        }
        visual={<HomeIllustration />}
      />

      <Services />
      <Projects />
      <Metrics />
      <Partners />
      <Process />
      <DemoCallCard />
    </>
  );
};

export default Home;
