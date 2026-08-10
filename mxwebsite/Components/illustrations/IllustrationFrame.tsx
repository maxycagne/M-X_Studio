import type { ReactNode } from "react";
import TechChip from "../ui/TechChip";

interface Chip {
  label: string;
  className?: string;
  delay?: string;
}

interface IllustrationFrameProps {
  children: ReactNode;
  chips?: Chip[];
  className?: string;
}

const IllustrationFrame = ({
  children,
  chips = [],
  className = "",
}: IllustrationFrameProps) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className="pointer-events-none absolute -left-6 top-8 h-36 w-36 rounded-full blur-3xl"
        style={{
          background: "color-mix(in oklab, var(--primary) 18%, transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-4 bottom-4 h-40 w-40 rounded-full blur-3xl"
        style={{
          background: "color-mix(in oklab, var(--violet) 16%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-soft grid-canvas sm:p-6">
        {children}
      </div>

      {chips.map((chip) => (
        <TechChip
          key={chip.label}
          floating
          style={{ animationDelay: chip.delay }}
          className={`absolute hidden shadow-soft md:inline-flex ${chip.className ?? ""}`}
        >
          {chip.label}
        </TechChip>
      ))}
    </div>
  );
};

export default IllustrationFrame;
