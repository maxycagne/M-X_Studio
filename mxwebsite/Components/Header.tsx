import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logoWhite from "../src/assets/logo_white.png";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative text-[10px] md:text-xs uppercase tracking-[0.3em] transition-all duration-500 hover:text-white ${
      isActive ? "text-white font-black" : "text-[#BABABA]"
    }`;

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block w-full text-center py-4 text-sm sm:text-base uppercase tracking-[0.3em] transition-all duration-300 hover:text-white ${
      isActive
        ? "text-white font-black bg-white/5 rounded-xl"
        : "text-[#BABABA]"
    }`;

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 font-sans">
      <div className="w-full bg-[#173DED] py-2.5 overflow-hidden border-b border-white/10 flex">
        <div className="flex w-max animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              <span className="text-[10px] uppercase tracking-[0.5em] text-white font-bold px-4 sm:px-8 whitespace-nowrap">
                MINIMALIST DESIGN
              </span>
              <svg
                className="w-3 h-3 text-white fill-current opacity-80 shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M12 1.75l3.09 6.26L22 8.9l-5 4.87 1.18 6.88L12 17.4l-6.18 3.25L7 13.77l-5-4.87 6.91-.89L12 1.75z" />
              </svg>

              <span className="text-[10px] uppercase tracking-[0.5em] text-white font-bold px-4 sm:px-8 whitespace-nowrap">
                SCALABLE ARCHITECTURE
              </span>
              <svg
                className="w-3 h-3 text-white fill-current opacity-80 shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M12 1.75l3.09 6.26L22 8.9l-5 4.87 1.18 6.88L12 17.4l-6.18 3.25L7 13.77l-5-4.87 6.91-.89L12 1.75z" />
              </svg>

              <span className="text-[10px] uppercase tracking-[0.5em] text-white font-bold px-4 sm:px-8 whitespace-nowrap">
                SEAMLESS USER EXPERIENCES
              </span>
              <svg
                className="w-3 h-3 text-white fill-current opacity-80 shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M12 1.75l3.09 6.26L22 8.9l-5 4.87 1.18 6.88L12 17.4l-6.18 3.25L7 13.77l-5-4.87 6.91-.89L12 1.75z" />
              </svg>

              <span className="text-[10px] uppercase tracking-[0.5em] text-white font-bold px-4 sm:px-8 whitespace-nowrap">
                FULL-STACK EXCELLENCE
              </span>
              <svg
                className="w-3 h-3 text-white fill-current opacity-80 shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M12 1.75l3.09 6.26L22 8.9l-5 4.87 1.18 6.88L12 17.4l-6.18 3.25L7 13.77l-5-4.87 6.91-.89L12 1.75z" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-between px-6 sm:px-10 lg:px-20 py-4">
        <Link
          to="/"
          className="group flex items-center shrink-0 z-50"
          onClick={closeMenu}
        >
          <img
            src={logoWhite}
            alt="Logo"
            className="h-10 sm:h-20 md:h-20 lg:h-28 w-auto opacity-100 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/5 bg-[#000051]/20 backdrop-blur-xl rounded-full px-12 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <ul className="flex gap-16 m-0 p-0 list-none items-center">
            <li className="relative group">
              <NavLink to="/" className={navLinkClasses}>
                Home
              </NavLink>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#173DED] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </li>
            <li className="relative group">
              <NavLink to="/about" className={navLinkClasses}>
                About
              </NavLink>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#173DED] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </li>
            <li className="relative group">
              <NavLink to="/projects" className={navLinkClasses}>
                Projects
              </NavLink>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#173DED] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </li>
          </ul>
        </nav>

        <div className="hidden lg:block shrink-0 z-50">
          <Link
            to="/get-started"
            className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden rounded-full transition-all duration-500 bg-[#173DED] shadow-[0_0_30px_rgba(23,61,237,0.4)] hover:shadow-[0_0_50px_rgba(23,61,237,0.6)] hover:-translate-y-1 active:scale-95"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white">
              Get Started
            </span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
          </Link>
        </div>

        <button
          className="lg:hidden text-white p-2 z-[60] focus:outline-none relative"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.11 5.7A1 1 0 005.7 7.11L10.59 12 5.7 16.89a1 1 0 101.41 1.42L12 13.41l4.89 4.9a1 1 0 001.42-1.42L13.41 12l4.89-4.89a1 1 0 000-1.4z"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] transition-opacity duration-400 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        className={`lg:hidden fixed inset-x-0 bottom-0 z-[80] w-full bg-[#000020] border-t border-white/10 rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div
          className="w-full flex justify-center pt-4 pb-2"
          onClick={closeMenu}
        >
          <div className="w-12 h-1.5 bg-white/20 rounded-full" />
        </div>

        <nav className="flex flex-col items-center gap-4 px-6 pt-4 pb-12 overflow-y-auto max-h-[80vh]">
          <NavLink to="/" className={mobileNavLinkClasses} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={mobileNavLinkClasses}
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={mobileNavLinkClasses}
            onClick={closeMenu}
          >
            Projects
          </NavLink>

          <Link
            to="/get-started"
            onClick={closeMenu}
            className="mt-6 w-full group relative inline-flex items-center justify-center px-8 py-5 overflow-hidden rounded-full transition-all duration-500 bg-[#173DED] shadow-[0_0_30px_rgba(23,61,237,0.4)] active:scale-95"
          >
            <span className="relative text-sm font-black uppercase tracking-[0.3em] text-white">
              Get Started
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
