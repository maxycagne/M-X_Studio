const ITEMS = [
  "BUILD",
  "SHIP",
  "SCALE",
  "ENGINEER",
  "AUTOMATE",
  "OPTIMIZE",
  "DEPLOY",
  "ITERATE",
  "LAUNCH",
  "SECURE",
  "MONITOR",
  "REFINE",
  "INTEGRATE",
  "DELIVER",
  "ARCHITECTURE",
  "PRODUCT SYSTEMS",
  "CLEAN CODE",
  "FAST FEEDBACK",
  "UPTIME 99.9%",
  "FROM IDEA → PRODUCTION",
  "CUSTOM-BUILT",
  "BUSINESS-FIRST",
  "END-TO-END",
  "LONG-TERM PARTNERS",
] as const;

const SiteMarquee = () => {
  return (
    <div
      className="marquee-band overflow-hidden border-b border-border py-2 text-background sm:py-3"
      role="presentation"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {ITEMS.map((item, index) => (
              <span
                key={`${copy}-${item}-${index}`}
                className="inline-flex items-center px-2.5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] sm:px-5 sm:text-[11px] sm:tracking-[0.2em]"
              >
                <span className={index % 3 === 0 ? "opacity-100" : "opacity-85"}>
                  {item}
                </span>
                <span
                  className="mx-2 inline-flex items-center opacity-60 sm:mx-3"
                  aria-hidden="true"
                >
                  •
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SiteMarquee;
