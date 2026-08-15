import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logoBlack from "../src/assets/logo_black.png";
import SiteMarquee from "./SiteMarquee";

const NAV_ITEMS = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/blogs", label: "Blogs" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors ${
      isActive ? "text-primary" : "text-foreground hover:text-primary"
    }`;

  return (
    <>
      <SiteMarquee />
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4">
          <Link
            to="/"
            className="shrink-0 focus-visible:outline-none"
            onClick={closeMenu}
            aria-label="M&X Studio home"
          >
            <img
              src={logoBlack}
              alt="M&X Studio"
              className="h-9 w-auto sm:h-11"
            />
          </Link>

          <nav
            className="hidden items-center gap-5 lg:flex xl:gap-7"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <Link
              to="/contact"
              className="cta-gradient inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
            >
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            className="tap-target inline-flex items-center justify-center rounded-full border border-border bg-card p-2.5 text-foreground lg:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`border-t border-border bg-card lg:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4"
            aria-label="Mobile"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `min-h-11 rounded-2xl px-4 py-3 text-base font-semibold ${
                    isActive
                      ? "bg-secondary text-primary"
                      : "text-foreground hover:bg-secondary hover:text-primary"
                  }`
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="cta-gradient mt-3 min-h-11 rounded-full px-5 py-3 text-center text-sm font-bold"
            >
              Start a project
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
