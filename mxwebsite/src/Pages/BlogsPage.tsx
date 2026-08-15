import PageMeta from "../../Components/ui/PageMeta";
import PageHero from "../../Components/ui/PageHero";
import BlogsIllustration from "../../Components/illustrations/BlogsIllustration";
import TechChip from "../../Components/ui/TechChip";
import DemoCallCard from "../../Components/DemoCallCard";

const posts = [
  {
    title: "Designing APIs that stay stable under product pressure",
    category: "Backend",
    readingTime: "7 min",
    excerpt:
      "How we keep contract boundaries clean when product scope expands mid-sprint.",
    tags: ["API", "contracts", "versioning"],
  },
  {
    title: "Interface systems that engineers can actually extend",
    category: "UI Engineering",
    readingTime: "6 min",
    excerpt:
      "A practical approach to tokens, components, and compositional rules without design-system theater.",
    tags: ["design systems", "frontend"],
  },
  {
    title: "Release checklists for calm production deploys",
    category: "Operations",
    readingTime: "5 min",
    excerpt:
      "The minimal set of signals we verify before promoting a build to production.",
    tags: ["CI/CD", "observability"],
  },
  {
    title: "When automation helps — and when it hides risk",
    category: "Automation",
    readingTime: "8 min",
    excerpt:
      "A framework for introducing AI-assisted workflows without losing operational clarity.",
    tags: ["AI", "process"],
  },
];

const accents = ["bg-primary", "bg-violet", "bg-mint", "bg-signal"] as const;

const BlogsPage = () => {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageMeta
        title="Blogs — M&X Studio"
        description="Technical notes from M&X Studio on systems design, delivery, and product engineering."
      />

      <PageHero
        headline={
          <>
            Technical writing for builders who ship{" "}
            <span className="text-primary">seriously</span>
          </>
        }
        lead="Notes on architecture, interfaces, and delivery — written like engineering docs, not marketing posts."
        visual={<BlogsIllustration />}
      />

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <article className="animate-rise-in border-y border-border py-8 md:py-10">
              <div className={`mb-5 h-px w-16 ${accents[0]}`} />
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
                <span className="text-primary">{featured.category}</span>
                <span aria-hidden="true">·</span>
                <span>{featured.readingTime} read</span>
              </div>
              <h2 className="mt-4 max-w-3xl font-display text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <TechChip key={tag}>{tag}</TechChip>
                ))}
              </div>
            </article>

            <div className="flex flex-col gap-0 border-t border-border lg:border-t-0">
              {rest.map((post, index) => (
                <article
                  key={post.title}
                  className="animate-rise-in border-b border-border py-6"
                  style={{ animationDelay: `${(index + 1) * 70}ms` }}
                >
                  <div
                    className={`mb-3 h-px w-10 ${accents[(index + 1) % accents.length]}`}
                  />
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
                    <span>{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTime} read</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-extrabold tracking-tight sm:text-xl">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DemoCallCard />
    </>
  );
};

export default BlogsPage;
