import IllustrationFrame from "./IllustrationFrame";

const ServicesIllustration = () => {
  return (
    <IllustrationFrame
      chips={[
        { label: "API / REST", className: "-left-2 top-10", delay: "0s" },
        { label: "status: online", className: "right-0 top-20", delay: "0.5s" },
        { label: "v2.4.1", className: "bottom-8 -left-1", delay: "1s" },
      ]}
    >
      <svg
        viewBox="0 0 560 340"
        className="h-auto w-full text-foreground"
        role="img"
        aria-label="Wireframe browser interface for services"
      >
        <rect
          x="20"
          y="24"
          width="400"
          height="280"
          rx="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.65"
        />
        <rect
          x="20"
          y="24"
          width="400"
          height="36"
          fill="color-mix(in oklab, var(--secondary) 95%, transparent)"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.55"
        />
        <circle cx="42" cy="42" r="4" fill="var(--signal)" className="animate-pulse-soft" />
        <circle cx="56" cy="42" r="4" fill="var(--mint)" />
        <circle cx="70" cy="42" r="4" fill="var(--primary)" />
        <rect x="96" y="34" width="180" height="16" rx="8" fill="currentColor" opacity="0.08" />

        <rect
          x="36"
          y="78"
          width="68"
          height="204"
          rx="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.15"
          opacity="0.4"
        />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x="48"
            y={96 + i * 28}
            width={i === 1 ? 44 : 36}
            height="10"
            rx="3"
            fill={i === 1 ? "var(--primary)" : "currentColor"}
            opacity={i === 1 ? 0.8 : 0.18}
          />
        ))}

        {[0, 1, 2].map((i) => (
          <g key={`panel-${i}`}>
            <rect
              x="124"
              y={78 + i * 70}
              width="276"
              height="58"
              rx="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
              opacity="0.35"
            />
            <rect
              x="140"
              y={94 + i * 70}
              width="120"
              height="10"
              rx="2"
              fill="currentColor"
              opacity="0.2"
            />
            <rect
              x="140"
              y={112 + i * 70}
              width="200"
              height="8"
              rx="2"
              fill="currentColor"
              opacity="0.12"
            />
            <circle
              cx="372"
              cy={107 + i * 70}
              r="5"
              fill={["var(--primary)", "var(--violet)", "var(--mint)"][i]}
              className={i === 0 ? "animate-pulse-soft" : undefined}
            />
          </g>
        ))}

        <polyline
          points="450,80 500,120 470,170 520,220 480,270"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1.3"
          strokeDasharray="4 4"
          className="animate-draw-line"
        />
        {[
          [450, 80],
          [500, 120],
          [470, 170],
          [520, 220],
          [480, 270],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="4"
            fill={["var(--primary)", "var(--violet)", "var(--mint)", "var(--signal)", "var(--primary)"][i]}
          />
        ))}
      </svg>
    </IllustrationFrame>
  );
};

export default ServicesIllustration;
