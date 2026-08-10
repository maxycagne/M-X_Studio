import IllustrationFrame from "./IllustrationFrame";

const CareersIllustration = () => {
  return (
    <IllustrationFrame
      chips={[
        { label: "status: hiring", className: "-left-2 top-10", delay: "0s" },
        { label: "team: eng", className: "right-0 top-16", delay: "0.5s" },
        { label: "process: open", className: "bottom-8 left-4", delay: "1s" },
      ]}
    >
      <svg
        viewBox="0 0 560 320"
        className="h-auto w-full text-foreground"
        role="img"
        aria-label="Kanban board illustration for careers"
      >
        {["Backlog", "Interview", "Offer"].map((label, col) => (
          <g key={label}>
            <rect
              x={36 + col * 170}
              y="36"
              width="148"
              height="240"
              rx="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              opacity="0.4"
            />
            <text
              x={52 + col * 170}
              y="62"
              style={{ fontSize: "12px", fontFamily: "ui-monospace, monospace" }}
              fill="var(--muted-foreground)"
            >
              {label}
            </text>
            {[0, 1, 2].map((row) => (
              <rect
                key={`${label}-${row}`}
                x={48 + col * 170}
                y={80 + row * 56}
                width="124"
                height="42"
                rx="8"
                fill="color-mix(in oklab, var(--secondary) 70%, transparent)"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.55"
              />
            ))}
            <circle
              cx={156 + col * 170}
              cy="100"
              r="4"
              fill={["var(--primary)", "var(--violet)", "var(--mint)"][col]}
              className={col === 1 ? "animate-pulse-soft" : undefined}
            />
          </g>
        ))}

        <polyline
          points="184,120 206,120 206,176 356,176"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          className="animate-draw-line"
        />
        <polyline
          points="354,232 376,232 376,120 526,120"
          fill="none"
          stroke="var(--violet)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
      </svg>
    </IllustrationFrame>
  );
};

export default CareersIllustration;
