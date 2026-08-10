import PageMeta from "../../Components/ui/PageMeta";
import ProjectsIllustration from "../../Components/illustrations/ProjectsIllustration";
import ProjectComponent from "../../Components/ProjectComponent";
import DemoCallCard from "../../Components/DemoCallCard";
import TechChip from "../../Components/ui/TechChip";

const OurProjects = () => {
  return (
    <>
      <PageMeta
        title="Projects — M&X Studio"
        description="Selected software projects spanning mobile products, commerce platforms, and enterprise systems."
      />

      <section className="pb-20 pt-20 md:pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-2">
          <div className="max-w-4xl">
            <p className="mb-4 font-display text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
              Projects
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] md:text-7xl">
              Work defined by problem, solution, and{" "}
              <span className="text-primary">result</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-2xl">
              A portfolio of systems where architecture, interface, and outcome
              stay tightly connected.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <TechChip>mobile</TechChip>
              <TechChip>web</TechChip>
              <TechChip>enterprise</TechChip>
            </div>
          </div>
          <ProjectsIllustration />
        </div>
      </section>

      <ProjectComponent />
      <DemoCallCard />
    </>
  );
};

export default OurProjects;
