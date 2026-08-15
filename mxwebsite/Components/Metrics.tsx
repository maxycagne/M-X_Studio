const metrics = [
  { value: "99.9%", label: "System uptime" },
  { value: "40%", label: "Faster delivery cycles" },
  { value: "12+", label: "Products shipped" },
  { value: "24h", label: "Average response SLA" },
];

const Metrics = () => {
  return (
    <section className="border-y border-border bg-secondary/60 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className="animate-rise-in"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <p className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              {metric.value}
            </p>
            <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Metrics;
