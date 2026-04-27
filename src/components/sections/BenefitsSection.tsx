"use client";

import { motion } from "framer-motion";
import { Gamepad2, Mic, Users, ArrowRight } from "lucide-react";
import { BENEFITS } from "@/lib/constants";

const ICON_MAP = { Gamepad2, Mic, Users } as const;
type IconKey = keyof typeof ICON_MAP;

const C = {
  pageBg:   "#FAF0DC",
  cardBg:   "#3B1E0C",
  heading:  "#C84820",
  primary:  "#E07820",
  accent:   "#F5B830",
  muted:    "#7A5540",
  cardText: "#F5E6D0",
  cardMuted:"rgba(245,230,208,0.6)",
};

const fadeInUp = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: C.pageBg }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-96"
        style={{ background: `linear-gradient(to right, transparent, ${C.primary}40, transparent)` }}
      />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: C.primary }}
          >
            Why Wonderia
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-black"
            style={{ color: C.heading }}
          >
            Making Practice Addictive
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-4 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: C.muted }}
          >
            Experience a world where practice feels like play. Through interactive
            storytelling and personalized goals, Wonderia turns the daily routine
            into the highlight of your day.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {BENEFITS.map((benefit) => {
            const Icon = ICON_MAP[benefit.icon as IconKey];
            return (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group flex flex-col rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: C.cardBg,
                  boxShadow: "0 4px 24px rgba(59,30,12,0.18)",
                }}
              >
                {/* Icon */}
                <div
                  className="mb-5 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(245,184,48,0.18)" }}
                >
                  {Icon && <Icon size={24} color={C.accent} />}
                </div>

                {/* Illustration placeholder */}
                <div
                  className="mb-6 w-full h-36 rounded-xl flex items-center justify-center text-sm italic"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(245,230,208,0.25)",
                  }}
                >
                  [ illustration coming soon ]
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: C.cardText }}>
                  {benefit.title}
                </h3>
                <p className="leading-relaxed flex-1" style={{ color: C.cardMuted }}>
                  {benefit.body}
                </p>

                {/* Learn More — hidden, reserved for future iteration */}
                <button
                  className="hidden mt-5 items-center gap-1 text-sm font-semibold"
                  style={{ color: C.accent }}
                >
                  Learn More <ArrowRight size={14} />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
