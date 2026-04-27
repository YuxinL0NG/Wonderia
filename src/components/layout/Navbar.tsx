"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Info, Star, Mail, Music } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";

const ICON_MAP = { Info, Star, Mail } as const;
type IconKey = keyof typeof ICON_MAP;
const SECTION_IDS = ["hero", "about", "benefits", "testimonials", "download"];

const C = {
  bg:         "#FAF0DC",
  bgScrolled: "rgba(250,240,220,0.92)",
  border:     "rgba(45,21,9,0.1)",
  text:       "#2D1509",
  muted:      "#7A5540",
  primary:    "#E07820",
  heading:    "#C84820",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? C.bgScrolled : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}
          className="flex items-center gap-2 group"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: C.primary }}
          >
            <Music size={16} color="white" />
          </div>
          <span className="font-bold text-sm tracking-wide" style={{ color: C.text }}>
            {SITE_CONFIG.name}
          </span>
        </a>

        {/* Nav links */}
        <ul className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const Icon = ICON_MAP[item.icon as IconKey];
            const sectionId = item.href.startsWith("#") ? item.href.slice(1) : null;
            const isActive = sectionId ? activeSection === sectionId : false;

            const linkStyle = {
              color: isActive ? C.primary : C.muted,
              backgroundColor: isActive ? `${C.primary}15` : "transparent",
            };

            if (item.href.startsWith("/")) {
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-80"
                    style={linkStyle}
                  >
                    {Icon && <Icon size={15} />}
                    {item.label}
                  </Link>
                </li>
              );
            }
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href.slice(1)); }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-80"
                  style={linkStyle}
                >
                  {Icon && <Icon size={15} />}
                  {item.label}
                </a>
              </li>
            );
          })}

          {/* GET STARTED */}
          <li>
            <a
              href="#download"
              onClick={(e) => { e.preventDefault(); scrollTo("download"); }}
              className="ml-3 px-5 py-2 rounded-full text-sm font-bold text-white transition-all duration-200 hover:scale-105 hover:opacity-90"
              style={{ backgroundColor: C.primary }}
            >
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
