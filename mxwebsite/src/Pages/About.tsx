import PageMeta from "../../Components/ui/PageMeta";
import PageHero from "../../Components/ui/PageHero";
import AboutIllustration from "../../Components/illustrations/AboutIllustration";
import Mission from "../../Components/Mission";
import OurTeam from "../../Components/OurTeam";
import Vision from "../../Components/Vision";
import Different from "../../Components/Different";
import DemoCallCard from "../../Components/DemoCallCard";
import CtaButton from "../../Components/ui/CtaButton";

const About = () => {
  return (
    <>
      <PageMeta
        title="About — M&X Studio"
        description="Learn about M&X Studio — an engineering studio focused on precise software, clear systems, and premium execution."
      />

      <PageHero
        headline={
          <>
            An engineering studio built for serious{" "}
            <span className="text-primary">software</span>
          </>
        }
        lead="We bridge complex technical problems and elegant product experiences — with discipline in both code and design."
        actions={
          <>
            <CtaButton to="/contact">Work with us</CtaButton>
            <CtaButton to="/projects" variant="secondary" showArrow={false}>
              See our work
            </CtaButton>
          </>
        }
        visual={<AboutIllustration />}
      />

      <Mission />
      <OurTeam />
      <Vision />
      <Different />
      <DemoCallCard />
    </>
  );
};

export default About;
