import React from "react";
import logoWhite from "../src/assets/logo_white.png";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="1em"
    height="1em"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.63-.33 3.27-1.12 4.71-1.44 2.64-4.22 4.31-7.18 4.34-3.1.04-6.1-1.57-7.7-4.2-1.45-2.42-1.5-5.5-.17-7.97 1.1-2.04 3.08-3.48 5.31-3.95 1.09-.23 2.22-.2 3.32-.06v4.11c-.55-.17-1.14-.19-1.71-.12-.9.11-1.74.57-2.32 1.25-.8.93-1.07 2.25-.7 3.4.38 1.19 1.34 2.15 2.55 2.53 1.25.39 2.66.2 3.73-.55 1.03-.73 1.62-1.89 1.65-3.15V.02h-1.43z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="1em"
    height="1em"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width="1em"
    height="1em"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width="1em"
    height="1em"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A1121] text-white border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 md:px-12 lg:px-8 lg:py-16 flex flex-col gap-10 lg:gap-16">
        {/* Responsive Grid System */}
        <div className="grid grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-2 gap-y-10 lg:gap-12">
          {/* Logo Section - Full width on mobile, 1 fraction on desktop */}
          <div className="flex justify-start col-span-3 lg:col-span-1">
            <img
              src={logoWhite}
              alt="Logo"
              className="h-16 lg:h-24 w-auto object-contain"
            />
          </div>

          {/* Home Links */}
          <div className="col-span-1 flex flex-col gap-3 lg:gap-5">
            <h3 className="font-bold text-xs sm:text-sm lg:text-lg">Home</h3>
            <ul className="flex flex-col gap-2 lg:gap-3 text-xs lg:text-base text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  What do we do?
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Our Onboarding
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  M&X Studio <br className="hidden lg:block" /> Partners
                </a>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div className="col-span-1 flex flex-col gap-3 lg:gap-5">
            <h3 className="font-bold text-xs sm:text-sm lg:text-lg">About</h3>
            <ul className="flex flex-col gap-2 lg:gap-3 text-xs lg:text-base text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  What is M&X Studio?
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Vision
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block leading-tight lg:leading-normal"
                >
                  What Makes Us <br className="block sm:hidden" /> Different
                </a>
              </li>
            </ul>
          </div>

          {/* Projects Links */}
          <div className="col-span-1 flex flex-col gap-3 lg:gap-5">
            <h3 className="font-bold text-xs sm:text-sm lg:text-lg">
              Our Projects
            </h3>
            <ul className="flex flex-col gap-2 lg:gap-3 text-xs lg:text-base text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block leading-tight lg:leading-normal"
                >
                  Glimpse to our Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 block"
                >
                  Our Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6 pt-6 lg:pt-8 border-t border-white/5">
          <button className="w-full sm:w-auto bg-[#0F2344] hover:bg-[#1A3868] text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm md:text-base shadow-lg">
            Send Us Message
          </button>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="TikTok"
              className="bg-[#0F2344] hover:bg-[#1A3868] p-3 rounded-full transition-colors duration-300 group"
            >
              <TikTokIcon className="w-4 h-4 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="#"
              aria-label="X (Twitter)"
              className="bg-[#0F2344] hover:bg-[#1A3868] p-3 rounded-full transition-colors duration-300 group"
            >
              <XIcon className="w-4 h-4 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="bg-[#0F2344] hover:bg-[#1A3868] p-3 rounded-full transition-colors duration-300 group"
            >
              <FacebookIcon className="w-4 h-4 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="bg-[#0F2344] hover:bg-[#1A3868] p-3 rounded-full transition-colors duration-300 group"
            >
              <InstagramIcon className="w-4 h-4 text-gray-300 group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
