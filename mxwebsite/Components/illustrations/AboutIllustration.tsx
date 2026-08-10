import IllustrationFrame from "./IllustrationFrame";

const AboutIllustration = () => {
  return (
    <IllustrationFrame
      chips={[
        { label: "studio: eng", className: "-left-2 top-10", delay: "0s" },
        { label: "focus: systems", className: "right-0 top-16", delay: "0.5s" },
        { label: "quality: high", className: "bottom-8 left-2", delay: "1s" },
      ]}
    >
      <svg
        viewBox="0 0 560 320"
        className="h-auto w-full text-foreground"
        role="img"
        aria-label="Studio node network illustration"
      >
        <circle cx="280" cy="160" r="36" fill="none" stroke="var(--primary)" strokeWidth="1.4" />
        <circle cx="280" cy="160" r="8" fill="var(--primary)" className="animate-pulse-soft" />
        {[
          [140, 80],
          [420, 80],
          [120, 220],
          [440, 220],
          [280, 60],
          [280, 270],
        ].map(([x, y], i) => (
          <g key={i}>
            <line
              x1="280"
              y1="160"
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeWidth="1.1"
              strokeDasharray="4 4"
              opacity="0.45"
              className={i < 2 ? "animate-draw-line" : undefined}
            />
            <circle
              cx={x}
              cy={y}
              r="10"
              fill="none"
              stroke={["var(--violet)", "var(--mint)", "var(--signal)", "var(--primary)", "var(--violet)", "var(--mint)"][i]}
              strokeWidth="1.2"
            />
          </g>
        ))}
        <rect x="200" y="148" width="160" height="24" rx="6" fill="var(--secondary)" opacity="0.9" />
        <text
          x="220"
          y="164"
          style={{ fontSize: "11px", fontFamily: "ui-monospace, monospace" }}
          fill="var(--muted-foreground)"
        >
          M&X engineering graph
        </text>
      </svg>
    </IllustrationFrame>
  );
};

export default AboutIllustration;
