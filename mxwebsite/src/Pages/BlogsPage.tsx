import PageMeta from "../../Components/ui/PageMeta";
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
  return (
    <>
      <PageMeta
        title="Blogs — M&X Studio"
        description="Technical notes from M&X Studio on systems design, delivery, and product engineering."
      />

      <section className="pb-20 pt-20 md:pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-2">
          <div className="max-w-4xl">
            <p className="mb-4 font-display text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
              Publication
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] md:text-7xl">
              Technical writing for builders who ship{" "}
              <span className="text-primary">seriously</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-2xl">
              Notes on architecture, interfaces, and delivery — written like
              engineering docs, not marketing posts.
            </p>
          </div>
          <BlogsIllustration />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-5">
            {posts.map((post, index) => (
              <article
                key={post.title}
                className="animate-rise-in rounded-3xl border border-border bg-card p-6 transition-transform hover:-translate-y-1 hover:shadow-soft md:p-8"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className={`mb-5 h-px w-12 ${accents[index % accents.length]}`} />
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
                  <span>{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime} read</span>
                </div>
                <h2 className="mt-3 max-w-3xl font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-3xl text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <TechChip key={tag}>{tag}</TechChip>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DemoCallCard />
    </>
  );
};

export default BlogsPage;
