"use client";

import Link from "next/link";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const NAV_MATRIX = [
  {
    heading: "GET WONDERIA",
    links: [
      { label: "Wonderia for iOS",     href: SOCIAL_LINKS.appStore,    external: true },
      { label: "Wonderia for Android", href: SOCIAL_LINKS.googlePlay,  external: true },
    ],
  },
  {
    heading: "ABOUT",
    links: [
      { label: "About Us",   href: "#about",      external: false },
    ],
  },
  {
    heading: "SUPPORT",
    links: [
      { label: "FAQs",                        href: "#",          external: false },
    ],
  },
];

export default function Footer() {
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ backgroundColor: "#F8C954" }}>

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 relative">

        <div className="flex flex-col items-start -mt-11">
          
          <img 
            src="/icons/logo_footer.svg" 
            alt="Wonderia Piano" 
            className="w-60 relative z-10" 
          />

          <div className="relative w-full h-0">
            <img 
              src="/icons/logo_final.svg" 
              alt="Mascot Illustration" 
              className="absolute w-[500px] max-w-none -mt-7 ml-10 pointer-events-none"
            />
          </div>
          
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-8 relative z-10">
          {NAV_MATRIX.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4 min-w-max">
              <p 
                className="text-lg font-black tracking-widest whitespace-nowrap" 
                style={{ color: "#701D02" }}
              >
                {col.heading}
              </p>
              {col.links.map((link) => {
                const className = "text-xl whitespace-nowrap transition-opacity duration-200 hover:opacity-70";
                const style = { color: "#7A5540" };
                
                if (link.external) {
                  return (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
                      {link.label}
                    </a>
                  );
                }
                if (link.href.startsWith("/")) {
                  return (
                    <Link key={link.label} href={link.href} className={className} style={style}>
                      {link.label}
                    </Link>
                  );
                }
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href.slice(1)); }}
                    className={className}
                    style={style}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="h-7" aria-hidden="true" />
              <div className="h-7" aria-hidden="true" />

            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom copyright bar ── */}
      <div
        className="px-6 py-5"
        style={{ backgroundColor: "#FADC6E", borderTop: `1px solid rgba(45,21,9,0.15)` }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs" style={{ color: "#7A5540" }}>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:opacity-70 transition-opacity duration-200">Privacy Policy</a>
            <a href="#" className="hover:opacity-70 transition-opacity duration-200">Terms &amp; Conditions</a>
            <span className="hidden">Children &amp; Teen Privacy Policy</span>
          </div>
          
          <div className="flex items-center gap-2">
            <img 
              src="/icons/footer_star.svg" 
              alt="Star Icon" 
              className="w-15 h-4 object-contain" 
            />
            <p style={{ color: "#7A5540" }}>© All Rights Reserved, {SITE_CONFIG.company}</p>
          </div>
          {/* ================================================= */}

        </div>
      </div>
    </footer>
  );
}