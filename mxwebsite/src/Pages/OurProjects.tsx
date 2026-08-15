import PageMeta from "../../Components/ui/PageMeta";
import PageHero from "../../Components/ui/PageHero";
import ProjectsIllustration from "../../Components/illustrations/ProjectsIllustration";
import ProjectComponent from "../../Components/ProjectComponent";
import DemoCallCard from "../../Components/DemoCallCard";
import CtaButton from "../../Components/ui/CtaButton";

const OurProjects = () => {
  return (
    <>
      <PageMeta
        title="Projects — M&X Studio"
        description="Selected software projects spanning mobile products, commerce platforms, and enterprise systems."
      />

      <PageHero
        headline={
          <>
            Work defined by problem, solution, and{" "}
            <span className="text-primary">result</span>
          </>
        }
        lead="A portfolio of systems where architecture, interface, and outcome stay tightly connected."
        actions={<CtaButton to="/contact">Start a project</CtaButton>}
        visual={<ProjectsIllustration />}
      />

      <ProjectComponent />
      <DemoCallCard />
    </>
  );
};

export default OurProjects;
