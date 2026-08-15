import type { ReactNode } from "react";

interface IllustrationFrameProps {
  children: ReactNode;
  className?: string;
}

const IllustrationFrame = ({
  children,
  className = "",
}: IllustrationFrameProps) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className="pointer-events-none absolute -left-8 top-6 h-44 w-44 rounded-full blur-3xl"
        style={{
          background: "color-mix(in oklab, var(--primary) 18%, transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-6 bottom-2 h-48 w-48 rounded-full blur-3xl"
        style={{
          background: "color-mix(in oklab, var(--mint) 14%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative overflow-hidden grid-canvas bg-gradient-to-br from-secondary/80 via-background to-card p-3 sm:p-5 md:p-6">
        <div className="animate-float">{children}</div>
      </div>
    </div>
  );
};

export default IllustrationFrame;
