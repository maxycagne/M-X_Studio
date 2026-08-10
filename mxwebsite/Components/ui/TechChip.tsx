import type { CSSProperties, ReactNode } from "react";

interface TechChipProps {
  children: ReactNode;
  className?: string;
  floating?: boolean;
  style?: CSSProperties;
}

const TechChip = ({
  children,
  className = "",
  floating = false,
  style,
}: TechChipProps) => {
  return (
    <span
      style={style}
      className={`inline-flex items-center rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground ${
        floating ? "animate-float shadow-soft" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
};

export default TechChip;
