"use client";

import Link from "next/link";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const C = {
  bg:       "#E8A030",
  bgBottom: "#D4882A",
  text:     "#2D1509",
  muted:    "rgba(45,21,9,0.6)",
  white:    "#FFF8EE",
};

/* Momo emoji stand-ins — swap with real IP assets when available */
const MOMO_ROW = ["🐻", "🎵", "🎹", "✨", "🎶", "🌟", "🐻"];

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
      { label: "Our Story",  href: "#",            external: false },
    ],
  },
  {
    heading: "SUPPORT",
    links: [
      { label: "FAQ",               href: "#",          external: false },
      { label: "Contact Us",        href: "/contact",   external: false },
      { label: "Privacy Policy",    href: "#",          external: false },
      { label: "Terms & Conditions",href: "#",          external: false },
    ],
  },
];

/* YouTube & Reddit SVG logos */
function YouTubeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function RedditIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
    </svg>
  );
}

export default function Footer() {
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ backgroundColor: C.bg }}>

      {/* ── Top Momo banner ── */}
      <div
        className="w-full py-3 flex items-center justify-center gap-4 text-2xl"
        style={{ borderBottom: `1px solid rgba(45,21,9,0.12)` }}
      >
        {MOMO_ROW.map((emoji, i) =>
          i === 3 ? (
            <span key={i} className="font-black text-lg tracking-widest" style={{ color: C.text }}>
              Wonderia
            </span>
          ) : (
            <span key={i}>{emoji}</span>
          )
        )}
      </div>

      {/* ── Main body ── */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">

        {/* Left: brand */}
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-black" style={{ color: C.text }}>
            {SITE_CONFIG.name}
          </p>
          <p className="text-sm italic" style={{ color: C.muted }}>
            {SITE_CONFIG.slogan}
          </p>
        </div>

        {/* Right: nav matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Text link columns */}
          {NAV_MATRIX.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <p className="text-xs font-black tracking-widest" style={{ color: C.text }}>
                {col.heading}
              </p>
              {col.links.map((link) => {
                const className = "text-sm transition-opacity duration-200 hover:opacity-70";
                const style = { color: C.muted };
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
            </div>
          ))}

          {/* Social column */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-black tracking-widest" style={{ color: C.text }}>
              SOCIAL
            </p>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-70"
              style={{ color: C.text }}
              aria-label="YouTube"
            >
              <YouTubeIcon />
            </a>
            <a
              href={SOCIAL_LINKS.reddit}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-70"
              style={{ color: C.text }}
              aria-label="Reddit"
            >
              <RedditIcon />
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom copyright bar ── */}
      <div
        className="px-6 py-5"
        style={{ backgroundColor: C.bgBottom, borderTop: `1px solid rgba(45,21,9,0.15)` }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs" style={{ color: C.muted }}>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:opacity-70 transition-opacity duration-200">Privacy Policy</a>
            <a href="#" className="hover:opacity-70 transition-opacity duration-200">Terms &amp; Conditions</a>
            {/* Reserved slot for Children & Teen Privacy Policy — hidden until needed */}
            <span className="hidden">Children &amp; Teen Privacy Policy</span>
          </div>
          <p style={{ color: C.muted }}>© All Rights Reserved, {SITE_CONFIG.company}</p>
        </div>
      </div>
    </footer>
  );
}
