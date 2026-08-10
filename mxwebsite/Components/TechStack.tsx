import SectionHeading from "./ui/SectionHeading";
import TechChip from "./ui/TechChip";

const stack = [
  "TypeScript",
  "React",
  "React Native",
  "Node.js",
  "Laravel",
  "PostgreSQL",
  "MySQL",
  "Firebase",
  "Tailwind CSS",
  "Vite",
  "CI/CD",
  "Cloud",
];

const TechStack = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Stack"
          title={
            <>
              Tools chosen for durability, not{" "}
              <span className="text-primary">novelty</span>
            </>
          }
          lead="We pick technologies that keep teams shipping with confidence after launch day."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {stack.map((item) => (
            <TechChip key={item}>{item}</TechChip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
