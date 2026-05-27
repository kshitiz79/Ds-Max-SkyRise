"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Simplified inline SVG Flag Components for standalone, premium icons without asset dependencies
const USFlag = () => (
  <svg viewBox="0 0 20 20" className="w-full h-full object-cover">
    <rect width="20" height="20" fill="#B22234" />
    <rect y="1.54" width="20" height="1.54" fill="#FFF" />
    <rect y="4.62" width="20" height="1.54" fill="#FFF" />
    <rect y="7.69" width="20" height="1.54" fill="#FFF" />
    <rect y="10.77" width="20" height="1.54" fill="#FFF" />
    <rect y="13.85" width="20" height="1.54" fill="#FFF" />
    <rect y="16.92" width="20" height="1.54" fill="#FFF" />
    <rect width="10" height="10.77" fill="#3C3B6E" />
    <circle cx="2" cy="2" r="0.5" fill="#FFF" />
    <circle cx="5" cy="2" r="0.5" fill="#FFF" />
    <circle cx="8" cy="2" r="0.5" fill="#FFF" />
    <circle cx="3.5" cy="4" r="0.5" fill="#FFF" />
    <circle cx="6.5" cy="4" r="0.5" fill="#FFF" />
    <circle cx="2" cy="6" r="0.5" fill="#FFF" />
    <circle cx="5" cy="6" r="0.5" fill="#FFF" />
    <circle cx="8" cy="6" r="0.5" fill="#FFF" />
    <circle cx="3.5" cy="8" r="0.5" fill="#FFF" />
    <circle cx="6.5" cy="8" r="0.5" fill="#FFF" />
  </svg>
);

const BangladeshFlag = () => (
  <svg viewBox="0 0 20 20" className="w-full h-full object-cover">
    <rect width="20" height="20" fill="#006A4E" />
    <circle cx="9" cy="10" r="4.5" fill="#F42A41" />
  </svg>
);

const SpainFlag = () => (
  <svg viewBox="0 0 20 20" className="w-full h-full object-cover">
    <rect width="20" height="20" fill="#AA151B" />
    <rect y="5" width="20" height="10" fill="#F1BF00" />
  </svg>
);

const SaudiArabiaFlag = () => (
  <svg viewBox="0 0 20 20" className="w-full h-full object-cover">
    <rect width="20" height="20" fill="#006C35" />
    <path d="M4 11h12v1H4zM6 13l-1.5-1.5L6 10l.5.5-1 1h10.5v1H5.5l1 1z" fill="#FFF" />
  </svg>
);

const ChinaFlag = () => (
  <svg viewBox="0 0 20 20" className="w-full h-full object-cover">
    <rect width="20" height="20" fill="#EE1C25" />
    <polygon points="4,3 4.4,4.2 5.5,4.2 4.6,4.9 5,6.1 4,5.4 3,6.1 3.4,4.9 2.5,4.2 3.6,4.2" fill="#FFFF00" />
  </svg>
);

const GermanyFlag = () => (
  <svg viewBox="0 0 20 20" className="w-full h-full object-cover">
    <rect width="20" height="20" fill="#FFCC00" />
    <rect width="20" height="13.33" fill="#DD0000" />
    <rect width="20" height="6.67" fill="#000000" />
  </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronRightIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const [currentLang, setCurrentLang] = useState({ code: "EN", name: "ENG", icon: USFlag });
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    { code: "EN", name: "ENG", icon: USFlag },
    { code: "BN", name: "BAN", icon: BangladeshFlag },
    { code: "ES", name: "ESP", icon: SpainFlag },
    { code: "AR", name: "ARB", icon: SaudiArabiaFlag },
    { code: "ZH", name: "ZHC", icon: ChinaFlag },
    { code: "DE", name: "GER", icon: GermanyFlag },
  ];

  const navItems = [
    { title: "Home", href: "/" },
    {
      title: "Projects",
      href: "#",
      children: [
        { title: "All Projects", href: "/property-listing-buy" },
        { title: "Ready to Move", href: "/property-listing-buy" },
        { title: "Nearing Completion", href: "/property-listing-buy" },
        { title: "Under Construction", href: "/property-listing-buy" },
        { title: "Skyora Serene Heights", href: "/property-details" },
        { title: "Skyora Grand Residency", href: "/property-details" },
        { title: "Skyora Elara", href: "/property-details" },
        { title: "Skyora Verdant Park", href: "/property-details" },
      ],
    },
    { title: "About", href: "/about-us" },
    {
      title: "Partner With Us",
      href: "#",
      children: [
        { title: "Landowners", href: "/contact-us" },
        { title: "Channel Partners", href: "/contact-us" },
        { title: "Investors", href: "/contact-us" },
        { title: "Refer & Earn", href: "/contact-us" },
      ],
    },
    {
      title: "Insights",
      href: "#",
      children: [
        { title: "All Articles", href: "/blog" },
        { title: "Article Details", href: "/blog-details" },
      ],
    },
    { title: "Contact", href: "/contact-us" },
  ];

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    setIsLangDropdownOpen(false);
  };

  const toggleMobileSubmenu = (index) => {
    if (mobileSubmenuOpen === index) {
      setMobileSubmenuOpen(null);
    } else {
      setMobileSubmenuOpen(index);
    }
  };

  const SelectedFlagIcon = currentLang.icon;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[999] uppercase tracking-wider text-[14px] font-medium font-sans transition-all duration-300 ${
          isSticky
            ? "bg-white text-[#1D1D1D] shadow-[0_1px_2px_rgba(2,0,181,0.1)]"
            : "bg-white/90 backdrop-blur-md text-[#1D1D1D] shadow-sm"
        }`}
      >
        <div className="relative w-full">
          <div className="container mx-auto px-4 max-w-[1416px]">
            <div
              className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
                isSticky ? "h-20" : "h-[100px]"
              }`}
            >
              {/* Brand Logo */}
              <div className="flex items-center h-full">
                <Link href="/" aria-label="Home page link" className="flex items-center">
                  {/* Replaced img with static public path copy */}
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={150}
                    height={40}
                    priority
                    className="h-9 w-auto object-contain"
                  />
                </Link>
              </div>

              {/* Desktop Center Navigation Links */}
              <nav className="hidden lg:flex items-center h-full">
                <ul className="flex items-center h-full m-0 p-0 list-none gap-6 xl:gap-[40px]">
                  {navItems.map((item, idx) => (
                    <li key={idx} className="group relative h-full flex items-center">
                      <Link
                        href={item.href}
                        className="flex items-center gap-1 py-2 text-[#1D1D1D] hover:text-[#00CC61] transition-colors"
                      >
                        <span>{item.title}</span>
                        {item.children && (
                          <ChevronDownIcon className="w-3 h-3 text-[#1D1D1D] transition-transform duration-300 group-hover:rotate-180" />
                        )}
                      </Link>

                      {/* Dropdown Menu */}
                      {item.children && (
                        <ul className="absolute left-0 top-full w-[220px] bg-white shadow-[0_1px_10px_rgba(0,0,0,0.1)] py-4 border-t-2 border-[#1D1D1D] rounded-b-md opacity-0 invisible translate-y-[-10px] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 flex flex-col list-none m-0">
                          {item.children.map((subItem, subIdx) => (
                            <li key={subIdx} className="w-full">
                              <Link
                                href={subItem.href}
                                className="block px-5 py-2 text-xs normal-case font-medium text-[#1D1D1D] hover:text-[#00CC61] hover:bg-gray-50 transition-colors"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Right Side Navigation elements */}
              <div className="flex items-center justify-end gap-6 xl:gap-[25px]">
                {/* Language Select Dropdown */}
                <div
                  className="relative cursor-pointer py-2 group"
                  onMouseEnter={() => setIsLangDropdownOpen(true)}
                  onMouseLeave={() => setIsLangDropdownOpen(false)}
                >
                  <div className="flex items-center gap-1 text-[#1D1D1D] hover:opacity-75 transition-opacity">
                    <span className="w-5 h-5 rounded-full overflow-hidden border border-gray-200 flex items-center justify-center">
                      <SelectedFlagIcon />
                    </span>
                    <ChevronDownIcon className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                  </div>

                  {/* Language Selector Popover */}
                  <div
                    className={`absolute top-full right-0 w-[120px] bg-white shadow-[0_4px_16px_rgba(2,0,181,0.1)] p-3 rounded transition-all duration-200 z-50 flex flex-col gap-2 ${
                      isLangDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {languages.map((lang, index) => {
                      const LangFlagIcon = lang.icon;
                      return (
                        <button
                          key={index}
                          onClick={() => handleLanguageChange(lang)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-50 text-xs normal-case text-[#1D1D1D] hover:text-[#00CC61] transition-colors"
                        >
                          <span className="w-[18px] h-[18px] rounded-full overflow-hidden border border-gray-100 flex items-center justify-center">
                            <LangFlagIcon />
                          </span>
                          <span>{lang.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Login Link (Desktop/Tablet) */}
                <div className="hidden sm:block">
                  <Link
                    href="/login"
                    className="text-sm font-medium capitalize text-[#1D1D1D] hover:text-[#00CC61] transition-colors"
                  >
                    Login
                  </Link>
                </div>

                {/* List Your Property Button */}
                <div className="hidden sm:block">
                  <Link
                    href="/contact-us"
                    className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 px-[24px] py-[9px] rounded-[20px] border border-[#1D1D1D] text-white bg-[#1D1D1D] font-medium text-[16px] capitalize transition-colors duration-500 hover:text-[#1D1D1D]"
                  >
                    <span className="relative z-10">Book a Site Visit</span>
                    {/* Sliding rising bubble effect */}
                    <span className="absolute w-[200%] h-[200%] top-[110%] left-1/2 -translate-x-1/2 rounded-full bg-white transition-all duration-600 ease-[cubic-bezier(0.58,0,0.88,1)] group-hover/btn:top-[-40%] z-0" />
                  </Link>
                </div>

                {/* Mobile Menu Toggle (Hamburger) */}
                <button
                  type="button"
                  aria-label="Toggle mobile menu"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden flex flex-col justify-between w-6 h-[18px] cursor-pointer bg-transparent border-0 p-0 focus:outline-none z-[1001]"
                >
                  <span
                    className={`w-full h-0.5 bg-[#1D1D1D] transition-all duration-300 origin-left ${
                      isMobileMenuOpen ? "rotate-45 translate-x-1" : ""
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-[#1D1D1D] transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-[#1D1D1D] transition-all duration-300 origin-left ${
                      isMobileMenuOpen ? "-rotate-45 translate-x-1" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[1000] lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Dark Backdrop Overlay */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        />

        {/* Sliding Menu Panel */}
        <div
          className={`absolute right-0 top-0 w-full max-w-[320px] sm:max-w-[400px] h-full bg-white shadow-2xl p-8 pt-24 flex flex-col transition-transform duration-500 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Scrollable Nav Items list */}
          <nav className="flex-1 overflow-y-auto mb-8 pr-2">
            <ul className="flex flex-col gap-1 list-none p-0 m-0">
              {navItems.map((item, idx) => (
                <li key={idx} className="border-b border-gray-100 py-1">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleMobileSubmenu(idx)}
                        className="w-full flex items-center justify-between py-2 text-left font-medium text-sm text-[#1D1D1D] hover:text-[#00CC61] transition-colors"
                      >
                        <span>{item.title}</span>
                        <ChevronDownIcon
                          className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-300 ${
                            mobileSubmenuOpen === idx ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Expandable Submenu list */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          mobileSubmenuOpen === idx ? "max-h-[500px] opacity-100 mt-1" : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="pl-4 flex flex-col gap-1 list-none m-0 py-1 bg-gray-50/50 rounded">
                          {item.children.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                href={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-xs normal-case text-gray-600 hover:text-[#00CC61] transition-colors"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 font-medium text-sm text-[#1D1D1D] hover:text-[#00CC61] transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom mobile menu extras (shown inside drawer on small devices) */}
          <div className="flex flex-col gap-4 border-t border-gray-100 pt-6">
            {/* Login Link */}
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center py-2.5 font-medium text-sm capitalize text-[#1D1D1D] border border-gray-200 rounded-[20px] hover:bg-gray-50 transition-colors"
            >
              Login
            </Link>

            {/* List Property CTA */}
            <Link
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 px-[24px] py-[11px] rounded-[20px] border border-[#1D1D1D] text-white bg-[#1D1D1D] font-medium text-[16px] capitalize transition-colors duration-500 hover:text-[#1D1D1D]"
            >
              <span className="relative z-10">Book a Site Visit</span>
              <span className="absolute w-[200%] h-[200%] top-[110%] left-1/2 -translate-x-1/2 rounded-full bg-white transition-all duration-600 ease-[cubic-bezier(0.58,0,0.88,1)] group-hover/btn:top-[-40%] z-0" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
