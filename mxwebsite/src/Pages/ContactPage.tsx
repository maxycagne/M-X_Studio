import { FormEvent, useState } from "react";
import PageMeta from "../../Components/ui/PageMeta";
import PageHero from "../../Components/ui/PageHero";
import ContactIllustration from "../../Components/illustrations/ContactIllustration";
import CtaButton from "../../Components/ui/CtaButton";

const fieldClass =
  "mt-2 w-full min-h-11 rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

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

      <PageHero
        headline={
          <>
            Tell us what you need to{" "}
            <span className="text-primary">ship</span>
          </>
        }
        lead="Share the problem, constraints, and timeline. We’ll respond with a clear next step."
        visual={<ContactIllustration />}
      />

      <section className="pb-20 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1fr_0.85fr] lg:gap-10">
          {submitted ? (
            <div
              className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10"
              role="status"
            >
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-mint">
                message received
              </p>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                Thanks — we’ll follow up shortly
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Your note was captured. Expect a reply at the email you shared,
                usually within one business day. Prefer a direct line? Email{" "}
                <a
                  href="mailto:hello@mxstudio.dev"
                  className="font-semibold text-primary"
                >
                  hello@mxstudio.dev
                </a>
                .
              </p>
              <button
                type="button"
                className="mt-8 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-6 md:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Name
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    className={fieldClass}
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
                    className={fieldClass}
                    placeholder="you@company.com"
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Company
                  <input
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className={fieldClass}
                    placeholder="Company name"
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Project type
                  <select
                    name="projectType"
                    className={fieldClass}
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
                    className={fieldClass}
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
                    className={fieldClass}
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
                  className={`resize-y ${fieldClass}`}
                  placeholder="What are you trying to build, and what does success look like?"
                />
              </label>

              <div className="mt-6">
                <CtaButton type="submit">Send message</CtaButton>
              </div>
            </form>
          )}

          <aside className="h-fit rounded-3xl border border-border bg-secondary/60 p-5 sm:p-6 md:sticky md:top-28 md:p-8">
            <h2 className="font-display text-xl font-extrabold sm:text-2xl">
              Direct channels
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Prefer a direct line? Reach out and include links, constraints,
              and the outcome you need.
            </p>
            <div className="mt-8 space-y-5 text-sm">
              <p>
                <span className="block text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                  Email
                </span>
                <a
                  href="mailto:hello@mxstudio.dev"
                  className="mt-1 inline-block min-h-11 font-semibold text-primary"
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
