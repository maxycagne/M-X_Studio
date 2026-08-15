import IllustrationFrame from "./IllustrationFrame";

const HomeIllustration = () => {
  return (
    <IllustrationFrame>
      <svg
        viewBox="0 0 560 360"
        className="h-auto w-full text-foreground"
        role="img"
        aria-label="Wireframe application architecture illustration"
      >
        <rect
          x="24"
          y="28"
          width="360"
          height="240"
          rx="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.7"
        />
        <rect
          x="24"
          y="28"
          width="360"
          height="34"
          rx="10"
          fill="color-mix(in oklab, var(--secondary) 90%, transparent)"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.55"
        />
        <circle cx="44" cy="45" r="4" fill="var(--signal)" className="animate-pulse-soft" />
        <circle cx="58" cy="45" r="4" fill="var(--mint)" />
        <circle cx="72" cy="45" r="4" fill="var(--primary)" />

        <rect
          x="40"
          y="82"
          width="54"
          height="168"
          rx="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.45"
        />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x="50"
            y={96 + i * 28}
            width="34"
            height="8"
            rx="2"
            fill="currentColor"
            opacity={0.22 + i * 0.05}
          />
        ))}

        {[0, 1, 2, 3].map((i) => (
          <rect
            key={`row-${i}`}
            x="112"
            y={92 + i * 36}
            width="248"
            height="22"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
            opacity="0.35"
          />
        ))}

        <polyline
          points="220,220 260,180 300,200 340,150"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1.4"
          className="animate-draw-line"
        />
        <circle cx="220" cy="220" r="3.5" fill="var(--primary)" />
        <circle cx="260" cy="180" r="3.5" fill="var(--violet)" />
        <circle cx="300" cy="200" r="3.5" fill="var(--mint)" />
        <circle cx="340" cy="150" r="3.5" fill="var(--signal)" />

        <rect
          x="400"
          y="70"
          width="136"
          height="90"
          rx="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.5"
        />
        <text
          x="416"
          y="96"
          fill="var(--muted-foreground)"
          style={{ fontSize: "11px", fontFamily: "ui-monospace, monospace" }}
        >
          status: online
        </text>
        <rect x="416" y="112" width="72" height="8" rx="2" fill="var(--primary)" opacity="0.7" />
        <rect x="416" y="128" width="96" height="8" rx="2" fill="currentColor" opacity="0.2" />

        <g opacity="0.7">
          <circle cx="430" cy="220" r="18" fill="none" stroke="currentColor" strokeWidth="1.1" />
          <circle cx="490" cy="250" r="14" fill="none" stroke="var(--violet)" strokeWidth="1.1" />
          <circle cx="450" cy="290" r="12" fill="none" stroke="var(--mint)" strokeWidth="1.1" />
          <line
            x1="444"
            y1="232"
            x2="478"
            y2="240"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 3"
            className="animate-draw-line"
          />
          <line
            x1="480"
            y1="262"
            x2="458"
            y2="280"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        </g>
      </svg>
    </IllustrationFrame>
  );
};

export default HomeIllustration;
