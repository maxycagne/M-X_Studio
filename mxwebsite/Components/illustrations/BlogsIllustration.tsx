import IllustrationFrame from "./IllustrationFrame";

const BlogsIllustration = () => {
  return (
    <IllustrationFrame
      chips={[
        { label: "editorial", className: "-left-2 top-10", delay: "0s" },
        { label: "read: 6 min", className: "right-0 top-16", delay: "0.5s" },
        { label: "tag: systems", className: "bottom-8 left-4", delay: "1s" },
      ]}
    >
      <svg
        viewBox="0 0 560 320"
        className="h-auto w-full text-foreground"
        role="img"
        aria-label="Editorial publication wireframe illustration"
      >
        <rect
          x="40"
          y="36"
          width="300"
          height="240"
          rx="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.55"
        />
        <rect x="64" y="60" width="120" height="12" rx="2" fill="var(--primary)" opacity="0.7" />
        <rect x="64" y="88" width="240" height="14" rx="2" fill="currentColor" opacity="0.2" />
        <rect x="64" y="112" width="200" height="10" rx="2" fill="currentColor" opacity="0.12" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x="64"
            y={150 + i * 22}
            width={220 - i * 18}
            height="8"
            rx="2"
            fill="currentColor"
            opacity="0.12"
          />
        ))}

        <rect
          x="360"
          y="56"
          width="160"
          height="200"
          rx="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.45"
        />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect
              x="376"
              y={76 + i * 56}
              width="128"
              height="42"
              rx="8"
              fill="color-mix(in oklab, var(--secondary) 80%, transparent)"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.6"
            />
            <circle
              cx="392"
              cy={97 + i * 56}
              r="4"
              fill={["var(--primary)", "var(--violet)", "var(--mint)"][i]}
            />
          </g>
        ))}

        <line
          x1="340"
          y1="100"
          x2="360"
          y2="100"
          stroke="var(--primary)"
          strokeWidth="1.2"
          className="animate-draw-line"
        />
      </svg>
    </IllustrationFrame>
  );
};

export default BlogsIllustration;
