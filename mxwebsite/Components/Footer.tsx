import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logoBlack from "../src/assets/logo_black.png";
import TechChip from "./ui/TechChip";

const columns = [
  {
    title: "Studio",
    links: [
      { to: "/services", label: "Services" },
      { to: "/projects", label: "Projects" },
      { to: "/about", label: "About" },
      { to: "/blogs", label: "Blogs" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact" },
      { to: "/about", label: "Engineering culture" },
      { to: "/blogs", label: "Technical notes" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { to: "/services", label: "Web applications" },
      { to: "/services", label: "Mobile systems" },
      { to: "/services", label: "Backend & cloud" },
      { to: "/services", label: "UI/UX engineering" },
    ],
  },
] as const;

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="max-w-md">
            <Link to="/" aria-label="M&X Studio home">
              <img src={logoBlack} alt="M&X Studio" className="h-12 w-auto" />
            </Link>
            <p className="mt-5 text-muted-foreground">
              An engineering studio that designs, builds, and ships serious
              software with precision and clarity.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <TechChip>build: passing</TechChip>
              <TechChip>uptime 99.9%</TechChip>
              <TechChip>v2.4.1</TechChip>
            </div>
            <Link
              to="/contact"
              className="cta-gradient mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
            >
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-foreground">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link
                        to={link.to}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            <a
              href="mailto:hello@mxstudio.dev"
              className="transition-colors hover:text-primary"
            >
              hello@mxstudio.dev
            </a>
            <span className="mx-2 text-border">|</span>
            Engineering studio · Remote-first
          </p>
          <p>© {new Date().getFullYear()} M&X Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
