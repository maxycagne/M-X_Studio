import PageMeta from "../../Components/ui/PageMeta";
import AboutIllustration from "../../Components/illustrations/AboutIllustration";
import Mission from "../../Components/Mission";
import OurTeam from "../../Components/OurTeam";
import Vision from "../../Components/Vision";
import Different from "../../Components/Different";
import DemoCallCard from "../../Components/DemoCallCard";
import TechChip from "../../Components/ui/TechChip";

const About = () => {
  return (
    <>
      <PageMeta
        title="About — M&X Studio"
        description="Learn about M&X Studio — an engineering studio focused on precise software, clear systems, and premium execution."
      />

      <section className="pb-20 pt-20 md:pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-2">
          <div className="max-w-4xl">
            <p className="mb-4 font-display text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
              About
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] md:text-7xl">
              An engineering studio built for serious{" "}
              <span className="text-primary">software</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-2xl">
              We bridge complex technical problems and elegant product
              experiences — with discipline in both code and design.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <TechChip>clean architecture</TechChip>
              <TechChip>product systems</TechChip>
            </div>
          </div>
          <AboutIllustration />
        </div>
      </section>

      <Mission />
      <OurTeam />
      <Vision />
      <Different />
      <DemoCallCard />
    </>
  );
};

export default About;
