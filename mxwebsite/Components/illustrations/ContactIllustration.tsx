import IllustrationFrame from "./IllustrationFrame";

const ContactIllustration = () => {
  return (
    <IllustrationFrame
      chips={[
        { label: "inbox: open", className: "-left-2 top-12", delay: "0s" },
        { label: "SLA < 24h", className: "right-0 top-20", delay: "0.4s" },
        { label: "reply: ready", className: "bottom-8 left-6", delay: "0.9s" },
      ]}
    >
      <svg
        viewBox="0 0 560 320"
        className="h-auto w-full text-foreground"
        role="img"
        aria-label="Chat and mail routing illustration for contact"
      >
        <rect
          x="36"
          y="40"
          width="220"
          height="150"
          rx="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.55"
        />
        <rect x="52" y="60" width="120" height="10" rx="2" fill="currentColor" opacity="0.18" />
        <rect x="52" y="84" width="180" height="28" rx="8" fill="var(--secondary)" />
        <rect x="52" y="124" width="140" height="28" rx="8" fill="color-mix(in oklab, var(--primary) 14%, transparent)" />

        <rect
          x="300"
          y="70"
          width="220"
          height="170"
          rx="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.55"
        />
        <circle cx="324" cy="96" r="8" fill="var(--primary)" className="animate-pulse-soft" />
        <rect x="344" y="90" width="140" height="10" rx="2" fill="currentColor" opacity="0.18" />
        <rect x="320" y="124" width="180" height="8" rx="2" fill="currentColor" opacity="0.12" />
        <rect x="320" y="144" width="150" height="8" rx="2" fill="currentColor" opacity="0.12" />
        <rect x="320" y="164" width="168" height="8" rx="2" fill="currentColor" opacity="0.12" />
        <rect x="320" y="196" width="96" height="24" rx="12" fill="var(--primary)" opacity="0.85" />

        <circle cx="180" cy="250" r="10" fill="none" stroke="var(--mint)" strokeWidth="1.2" />
        <circle cx="260" cy="270" r="10" fill="none" stroke="var(--violet)" strokeWidth="1.2" />
        <circle cx="340" cy="250" r="10" fill="none" stroke="var(--signal)" strokeWidth="1.2" />
        <polyline
          points="146,190 180,250 260,270 340,250 300,200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeDasharray="4 4"
          className="animate-draw-line"
          opacity="0.55"
        />
      </svg>
    </IllustrationFrame>
  );
};

export default ContactIllustration;
