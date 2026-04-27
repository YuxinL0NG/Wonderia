"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS, HASHTAG } from "@/lib/constants";

const C = {
  pageBg:  "#FAF0DC",
  heading: "#C84820",
  primary: "#E07820",
  muted:   "#7A5540",
  dark:    "#2D1509",
  divider: "rgba(224,120,32,0.2)",
  avatarBg:"#E07820",
};

const fadeInUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-28 px-6"
      style={{ backgroundColor: C.pageBg }}
    >
      {/* Top divider */}
      <div
        className="max-w-7xl mx-auto mb-16 h-px w-full"
        style={{ background: `linear-gradient(to right, transparent, ${C.primary}30, transparent)` }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">

          {/* Left — title (sticky in future iteration) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:w-64 shrink-0"
          >
            <h2
              className="text-4xl sm:text-5xl font-black leading-tight"
              style={{ color: C.heading }}
            >
              Successful
              <br />
              stories
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: C.muted }}>
              Real pianists, real progress. Hear from our growing community.
            </p>
          </motion.div>

          {/* Right — testimonial list */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 flex flex-col"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.author}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Divider above each item */}
                {i > 0 && (
                  <div className="my-8 h-px w-full" style={{ backgroundColor: C.divider }} />
                )}

                <div className="flex flex-col gap-3">
                  {/* Title */}
                  <h3 className="text-xl font-bold" style={{ color: C.dark }}>
                    {t.title}
                  </h3>

                  {/* Body */}
                  <p className="text-base leading-relaxed" style={{ color: C.muted }}>
                    {t.body}
                  </p>

                  {/* Author row */}
                  <div className="flex items-center gap-3 mt-2">
                    {/* Avatar placeholder — swap with <Image> when real photos arrive */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                      style={{ backgroundColor: C.avatarBg }}
                    >
                      {t.author[0]}
                    </div>
                    <span className="text-sm font-semibold" style={{ color: C.dark }}>
                      {t.author}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Bottom divider */}
            <div className="my-8 h-px w-full" style={{ backgroundColor: C.divider }} />

            {/* Social CTA */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm"
              style={{ color: C.muted }}
            >
              Share your Wonderia story with the hashtag{" "}
              <span className="font-bold" style={{ color: C.primary }}>{HASHTAG}</span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
