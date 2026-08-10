import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type CtaButtonProps = {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
};

const basePrimary =
  "cta-gradient inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5 focus-visible:outline-none";
const baseSecondary =
  "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition-transform transition-colors hover:-translate-y-0.5 hover:text-primary focus-visible:outline-none";

const CtaButton = ({
  to,
  href,
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  showArrow = variant === "primary",
}: CtaButtonProps) => {
  const classes = `${variant === "primary" ? basePrimary : baseSecondary} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default CtaButton;
