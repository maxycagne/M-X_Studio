const ITEMS = [
  "BUILD",
  "SHIP",
  "SCALE",
  "ENGINEER",
  "AUTOMATE",
  "OPTIMIZE",
];

const SiteMarquee = () => {
  const sequence = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div
      className="marquee-band overflow-hidden border-b border-border py-2.5 text-background"
      role="presentation"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {sequence.map((item, index) => (
              <span
                key={`${copy}-${item}-${index}`}
                className="px-4 font-mono text-[10px] font-medium uppercase tracking-[0.22em] sm:px-6"
              >
                {item}
                <span className="mx-3 opacity-60">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SiteMarquee;
