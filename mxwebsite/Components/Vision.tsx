const Vision = () => {
  return (
    <section className="atmosphere relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-canvas opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="max-w-4xl">
          <p className="mb-4 font-display text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
            Direction
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] md:text-5xl">
            Our <span className="text-primary">vision</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground md:text-2xl">
            To set a higher standard for digital products by crafting premium,
            scalable, and precise applications — where technology feels
            effortless and brands connect through high-performance experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
