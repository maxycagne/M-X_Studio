import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoWhite from "../src/assets/logo_white.png";

const Header: React.FC = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative text-[10px] md:text-xs uppercase tracking-[0.3em] transition-all duration-500 hover:text-white ${
      isActive ? "text-white font-black" : "text-[#BABABA]"
    }`;

  return (
    <header className="absolute top-0 left-0 right-0 z-50 font-sans">
      {/* 1. MOVING HEADLINE (MARQUEE) */}
      {/* Added 'flex' to the parent wrapper */}
      <div className="w-full bg-[#173DED] py-2.5 overflow-hidden border-b border-white/10 flex">
        {/* FIX 1: Changed 'inline-block' to 'flex w-max' for exact mathematical width */}
        <div className="flex w-max animate-marquee">
          {/* FIX 2: Increased from [1, 2] to [1, 2, 3, 4] so it never runs out of text on wide screens */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              <span className="text-[10px] uppercase tracking-[0.5em] text-white font-bold px-8 whitespace-nowrap">
                MINIMALIST DESIGN
              </span>
              <svg
                className="w-3 h-3 text-white fill-current opacity-80 shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M12 1.75l3.09 6.26L22 8.9l-5 4.87 1.18 6.88L12 17.4l-6.18 3.25L7 13.77l-5-4.87 6.91-.89L12 1.75z" />
              </svg>

              <span className="text-[10px] uppercase tracking-[0.5em] text-white font-bold px-8 whitespace-nowrap">
                SCALABLE ARCHITECTURE
              </span>
              <svg
                className="w-3 h-3 text-white fill-current opacity-80 shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M12 1.75l3.09 6.26L22 8.9l-5 4.87 1.18 6.88L12 17.4l-6.18 3.25L7 13.77l-5-4.87 6.91-.89L12 1.75z" />
              </svg>

              <span className="text-[10px] uppercase tracking-[0.5em] text-white font-bold px-8 whitespace-nowrap">
                SEAMLESS USER EXPERIENCES
              </span>
              <svg
                className="w-3 h-3 text-white fill-current opacity-80 shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M12 1.75l3.09 6.26L22 8.9l-5 4.87 1.18 6.88L12 17.4l-6.18 3.25L7 13.77l-5-4.87 6.91-.89L12 1.75z" />
              </svg>

              <span className="text-[10px] uppercase tracking-[0.5em] text-white font-bold px-8 whitespace-nowrap">
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

      <div className="relative flex items-center justify-between px-10 md:px-20 py-4">
        <Link to="/" className="group flex items-center shrink-0">
          <img
            src={logoWhite}
            alt="Logo"
            className="h-20 md:h-28 w-auto opacity-100 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </Link>

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

        {/* CTA Button */}
        <div className="shrink-0">
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
      </div>
    </header>
  );
};

export default Header;
