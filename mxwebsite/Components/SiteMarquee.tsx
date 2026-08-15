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
  "BUILD: PASSING",
  "STATUS: ONLINE",
  "FROM IDEA → PRODUCTION",
  "CUSTOM-BUILT",
  "BUSINESS-FIRST",
  "END-TO-END",
  "LONG-TERM PARTNERS",
] as const;

const SiteMarquee = () => {
  return (
    <div
      className="marquee-band overflow-hidden border-b border-border py-3 text-background"
      role="presentation"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {ITEMS.map((item, index) => (
              <span
                key={`${copy}-${item}-${index}`}
                className="inline-flex items-center px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] sm:px-5 sm:text-[11px]"
              >
                <span className={index % 3 === 0 ? "opacity-100" : "opacity-90"}>
                  {item}
                </span>
                <span className="mx-3 inline-flex items-center gap-2 opacity-70" aria-hidden="true">
                  <span>•</span>
                  <span className="hidden h-1 w-1 rounded-full bg-background/70 sm:inline-block" />
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
