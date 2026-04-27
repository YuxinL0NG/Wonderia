"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";

const C = {
  heading: "#C84820",
  primary: "#E07820",
  accent:  "#F5B830",
  dark:    "#2D1509",
  muted:   "#7A5540",
};

/* Floating magic elements in the background */
const MAGIC = [
  { char: "💎", x: "6%",  y: "20%", size: 36, delay: 0 },
  { char: "✨", x: "88%", y: "15%", size: 32, delay: 0.6 },
  { char: "🌟", x: "80%", y: "70%", size: 40, delay: 1.0 },
  { char: "💫", x: "12%", y: "72%", size: 34, delay: 0.4 },
  { char: "🔮", x: "50%", y: "85%", size: 30, delay: 0.8 },
  { char: "⭐", x: "93%", y: "44%", size: 28, delay: 1.3 },
  { char: "✦",  x: "3%",  y: "50%", size: 22, delay: 0.2 },
];

export default function CtaSection() {
  return (
    <section
      id="download"
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #FDF6E3 0%, #FAEAC4 50%, #F5D9A0 100%)",
      }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-96"
        style={{ background: `linear-gradient(to right, transparent, ${C.primary}30, transparent)` }}
      />

      {/* Floating magic icons */}
      {MAGIC.map((m, i) => (
        <motion.span
          key={i}
          className="absolute select-none pointer-events-none"
          style={{ left: m.x, top: m.y, fontSize: m.size, opacity: 0.25 }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2.8 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: m.delay }}
        >
          {m.char}
        </motion.span>
      ))}

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">

        {/* FREE badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-6 px-5 py-2 rounded-full font-black text-sm tracking-widest text-white uppercase"
          style={{ backgroundColor: C.primary, boxShadow: `0 4px 16px ${C.primary}50` }}
        >
          ✦ Try 1 Week Free ✦
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight uppercase"
          style={{ color: C.heading }}
        >
          Start Your
          <br />
          <span style={{ color: C.primary }}>Magical</span>
          <br />
          Adventure
        </motion.h2>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-5 text-lg"
          style={{ color: C.muted }}
        >
          Download Wonderia and begin your piano journey today.
        </motion.p>

        {/* Download buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {/* App Store */}
          <a
            href={SOCIAL_LINKS.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-white transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: C.dark,
              boxShadow: `0 6px 20px rgba(45,21,9,0.25)`,
            }}
          >
            {/* Apple icon (SVG inline) */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-75 font-normal">Download on the</div>
              <div className="text-base leading-tight">App Store</div>
            </div>
          </a>

          {/* Google Play */}
          <a
            href={SOCIAL_LINKS.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-white transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: C.dark,
              boxShadow: `0 6px 20px rgba(45,21,9,0.25)`,
            }}
          >
            {/* Google Play icon (SVG inline) */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M3.18 23.76c.3.17.64.23.99.17l12.81-7.4-2.81-2.82-10.99 10zM.43 1.6C.17 1.96.01 2.44.01 3.01v17.98c0 .57.16 1.05.42 1.41l.08.07 10.07-10.07v-.24L.51 1.53l-.08.07zM20.13 10.56l-2.62-1.52-3.13 3.13 3.13 3.13 2.64-1.53c.75-.43.75-1.14.02-1.58l-.04-.03-.03-.03-.03-.03.06.47zM4.17.24l12.81 7.4-2.81 2.82L3.18.46C3.47.2 3.88.08 4.17.24z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-75 font-normal">Get it on</div>
              <div className="text-base leading-tight">Google Play</div>
            </div>
          </a>
        </motion.div>

        {/* QR code section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: C.muted }}>
            — or scan to download —
          </p>
          <div className="flex gap-6">
            {/* iOS QR placeholder */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-28 h-28 rounded-xl flex items-center justify-center text-xs font-medium"
                style={{
                  backgroundColor: "rgba(45,21,9,0.08)",
                  border: `2px dashed ${C.primary}50`,
                  color: C.muted,
                }}
              >
                QR · iOS
              </div>
              <span className="text-xs" style={{ color: C.muted }}>Wonderia for iOS</span>
            </div>
            {/* Android QR placeholder */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-28 h-28 rounded-xl flex items-center justify-center text-xs font-medium"
                style={{
                  backgroundColor: "rgba(45,21,9,0.08)",
                  border: `2px dashed ${C.primary}50`,
                  color: C.muted,
                }}
              >
                QR · Android
              </div>
              <span className="text-xs" style={{ color: C.muted }}>Wonderia for Android</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
