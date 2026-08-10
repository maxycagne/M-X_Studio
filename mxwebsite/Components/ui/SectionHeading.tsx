import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
}: SectionHeadingProps) => {
  return (
    <div
      className={`max-w-4xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <p className="mb-4 font-display text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] text-foreground md:text-5xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 text-lg text-muted-foreground md:text-2xl">{lead}</p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
