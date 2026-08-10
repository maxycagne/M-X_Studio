import { FormEvent, useState } from "react";
import PageMeta from "../../Components/ui/PageMeta";
import ContactIllustration from "../../Components/illustrations/ContactIllustration";
import CtaButton from "../../Components/ui/CtaButton";
import TechChip from "../../Components/ui/TechChip";

const fieldClass =
  "w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageMeta
        title="Contact — M&X Studio"
        description="Contact M&X Studio to discuss product builds, systems work, and engineering engagements."
      />

      <section className="pb-20 pt-20 md:pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-2">
          <div className="max-w-4xl">
            <p className="mb-4 font-display text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
              Contact
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] md:text-7xl">
              Tell us what you need to{" "}
              <span className="text-primary">ship</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-2xl">
              Share the problem, constraints, and timeline. We’ll respond with a
              clear next step.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <TechChip>response &lt; 24h</TechChip>
              <TechChip>inbox: open</TechChip>
            </div>
          </div>
          <ContactIllustration />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_0.85fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8"
            noValidate
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-semibold">
                Name
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className={`mt-2 ${fieldClass}`}
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm font-semibold">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`mt-2 ${fieldClass}`}
                  placeholder="you@company.com"
                />
              </label>
              <label className="block text-sm font-semibold">
                Company
                <input
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className={`mt-2 ${fieldClass}`}
                  placeholder="Company name"
                />
              </label>
              <label className="block text-sm font-semibold">
                Project type
                <select
                  name="projectType"
                  className={`mt-2 ${fieldClass}`}
                  defaultValue="Web Application"
                >
                  <option>Web Application</option>
                  <option>Mobile Application</option>
                  <option>Backend System</option>
                  <option>Cloud & Infrastructure</option>
                  <option>AI & Automation</option>
                  <option>UI/UX Engineering</option>
                </select>
              </label>
              <label className="block text-sm font-semibold">
                Budget range
                <select
                  name="budget"
                  className={`mt-2 ${fieldClass}`}
                  defaultValue="To be discussed"
                >
                  <option>To be discussed</option>
                  <option>$5k – $15k</option>
                  <option>$15k – $40k</option>
                  <option>$40k+</option>
                </select>
              </label>
              <label className="block text-sm font-semibold">
                Timeline
                <select
                  name="timeline"
                  className={`mt-2 ${fieldClass}`}
                  defaultValue="Flexible"
                >
                  <option>Flexible</option>
                  <option>ASAP</option>
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                </select>
              </label>
            </div>

            <label className="mt-5 block text-sm font-semibold">
              Message
              <textarea
                required
                name="message"
                rows={5}
                className={`mt-2 resize-y ${fieldClass}`}
                placeholder="What are you trying to build, and what does success look like?"
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton type="submit">Send message</CtaButton>
              {submitted ? (
                <p className="text-sm font-semibold text-mint" role="status">
                  Message captured locally — we’ll follow up by email.
                </p>
              ) : null}
            </div>
          </form>

          <aside className="rounded-3xl border border-border bg-secondary/50 p-6 md:p-8">
            <h2 className="font-display text-2xl font-extrabold">
              Direct channels
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Prefer a direct line? Reach out and include links, constraints,
              and the outcome you need.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <p>
                <span className="block text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                  Email
                </span>
                <a
                  href="mailto:hello@mxstudio.dev"
                  className="mt-1 inline-block font-semibold text-primary"
                >
                  hello@mxstudio.dev
                </a>
              </p>
              <p>
                <span className="block text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                  Response target
                </span>
                <span className="mt-1 inline-block font-semibold">
                  Within 24 hours on business days
                </span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
