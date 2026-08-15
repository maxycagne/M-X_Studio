import IllustrationFrame from "./IllustrationFrame";

const ProjectsIllustration = () => {
  return (
    <IllustrationFrame>
      <svg
        viewBox="0 0 560 340"
        className="h-auto w-full text-foreground"
        role="img"
        aria-label="Isometric stacked product surfaces illustration"
      >
        <g opacity="0.85">
          <path
            d="M120 210 L260 140 L400 210 L260 280 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
          />
          <path
            d="M140 180 L280 110 L420 180 L280 250 Z"
            fill="color-mix(in oklab, var(--card) 80%, transparent)"
            stroke="currentColor"
            strokeWidth="1.2"
            opacity="0.9"
          />
          <path
            d="M160 150 L300 80 L440 150 L300 220 Z"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="1.35"
          />
        </g>

        <rect x="210" y="118" width="90" height="8" rx="2" fill="currentColor" opacity="0.18" />
        <rect x="210" y="134" width="60" height="8" rx="2" fill="var(--primary)" opacity="0.55" />
        <rect x="230" y="168" width="70" height="8" rx="2" fill="currentColor" opacity="0.15" />

        <circle cx="460" cy="90" r="8" fill="none" stroke="var(--violet)" strokeWidth="1.2" />
        <circle cx="500" cy="140" r="8" fill="none" stroke="var(--mint)" strokeWidth="1.2" />
        <circle cx="470" cy="200" r="8" fill="none" stroke="var(--signal)" strokeWidth="1.2" />
        <polyline
          points="440,150 460,90 500,140 470,200 400,210"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeDasharray="4 4"
          className="animate-draw-line"
          opacity="0.55"
        />

        <text
          x="48"
          y="70"
          style={{ fontSize: "11px", fontFamily: "ui-monospace, monospace" }}
          fill="var(--muted-foreground)"
        >
          release / prod
        </text>
        <rect x="48" y="84" width="72" height="10" rx="2" fill="var(--mint)" opacity="0.7" />
        <rect x="48" y="104" width="96" height="8" rx="2" fill="currentColor" opacity="0.15" />
        <rect x="48" y="120" width="84" height="8" rx="2" fill="currentColor" opacity="0.12" />
      </svg>
    </IllustrationFrame>
  );
};

export default ProjectsIllustration;
