"use client";

import { motion } from "framer-motion";
import ScrollDownArrow from "@/components/ui/ScrollDownArrow";

const FLOATERS = [
  { char: "♪", x: "8%",  y: "25%", size: 56, delay: 0 },
  { char: "♫", x: "84%", y: "20%", size: 64, delay: 0.5 },
  { char: "★", x: "75%", y: "65%", size: 44, delay: 0.9 },
  { char: "♩", x: "10%", y: "60%", size: 44, delay: 1.3 },
  { char: "✦", x: "52%", y: "82%", size: 32, delay: 0.7 },
  { char: "♬", x: "91%", y: "44%", size: 52, delay: 1.1 },
  { char: "✦", x: "3%",  y: "42%", size: 24, delay: 0.3 },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#FAF0DC" }}
    >
      {/* Warm glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            top: "20%", left: "50%", transform: "translateX(-50%)",
            width: 600, height: 300,
            backgroundColor: "rgba(224,120,32,0.12)",
          }}
        />
        <div
          className="absolute rounded-full blur-2xl"
          style={{
            bottom: "5%", left: "5%",
            width: 200, height: 200,
            backgroundColor: "rgba(200,72,32,0.08)",
          }}
        />
      </div>

      {/* Floating music symbols */}
      {FLOATERS.map((f, i) => (
        <motion.span
          key={i}
          className="absolute select-none pointer-events-none"
          style={{
            left: f.x, top: f.y,
            fontSize: f.size,
            color: "rgba(224,120,32,0.18)",
          }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
        >
          {f.char}
        </motion.span>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Badge */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold"
          style={{
            border: "1.5px solid rgba(224,120,32,0.4)",
            backgroundColor: "rgba(224,120,32,0.1)",
            color: "#E07820",
          }}
        >
          ✨ Piano learning, reimagined
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl font-black leading-tight tracking-tight"
          style={{ color: "#C84820" }}
        >
          Ignite the joy,
          <br />
          <span style={{ color: "#E07820" }}>hooked on practice</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl max-w-2xl leading-relaxed"
          style={{ color: "#7A5540" }}
        >
          Transform piano practice into a magical adventure. Game-based learning,
          real-time feedback, and your personal musical buddy Momo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("download")}
            className="px-8 py-3 rounded-full font-bold text-white transition-all duration-200 hover:scale-105 hover:opacity-90 shadow-lg"
            style={{ backgroundColor: "#E07820", boxShadow: "0 8px 24px rgba(224,120,32,0.35)" }}
          >
            Download Free
          </button>
          <button
            onClick={() => scrollTo("benefits")}
            className="px-8 py-3 rounded-full font-bold transition-all duration-200 hover:scale-105"
            style={{
              border: "2px solid rgba(224,120,32,0.5)",
              color: "#E07820",
              backgroundColor: "transparent",
            }}
          >
            See how it works
          </button>
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <ScrollDownArrow />
      </motion.div>
    </section>
  );
}
