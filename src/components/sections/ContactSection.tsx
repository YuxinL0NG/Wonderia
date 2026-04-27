"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const C = {
  pageBg: "#FAF0DC",
  heading: "#C84820",
  primary: "#E07820",
  muted: "#7A5540",
  dark: "#2D1509",
};

function RedditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
    </svg>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6"
      style={{ backgroundColor: C.pageBg }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* ── Left: contact info ── */}
          <div className="flex-1 flex flex-col gap-10">
            {/* Title */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileInView="animate"
              initial="initial"
            >
              <h2
                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight"
                style={{ color: C.heading }}
              >
                CONTACT US
              </h2>
              <p className="mt-4 text-xl font-medium" style={{ color: C.muted }}>
                Piano is hard, but talking to us isn't.
              </p>
            </motion.div>

            {/* Self-service */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              whileInView="animate"
              initial="initial"
              className="flex flex-col gap-3"
            >
              <p className="text-lg font-semibold" style={{ color: C.dark }}>
                Got a quick question?{" "}
                <a
                  href="#"
                  className="font-semibold underline underline-offset-4 decoration-2 transition-opacity duration-200 hover:opacity-70"
                  style={{ color: C.primary }}
                >
                  Check our FAQs.
                </a>
              </p>
            </motion.div>

            {/* Human support */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              whileInView="animate"
              initial="initial"
              className="flex flex-col gap-4"
            >
              <p className="text-lg font-semibold" style={{ color: C.dark }}>
                Still need a hand?
              </p>
              <p className="text-lg" style={{ color: C.dark }}>
                Our team is just a message away.
              </p>
              <p className="text-lg" style={{ color: C.muted }}>
                Email us directly at{" "}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-semibold transition-opacity duration-200 hover:opacity-70"
                  style={{ color: C.primary }}
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="self-start px-8 py-3.5 rounded-full font-bold text-white uppercase tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: C.primary,
                  boxShadow: `0 6px 20px rgba(224,120,32,0.35)`,
                }}
              >
                GET IN TOUCH
              </a>
            </motion.div>

            {/* Community */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              whileInView="animate"
              initial="initial"
              className="flex flex-col gap-3"
            >
              <p className="text-lg" style={{ color: C.muted }}>
                <a
                  href={SOCIAL_LINKS.reddit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold underline underline-offset-4 decoration-2 transition-opacity duration-200 hover:opacity-70"
                  style={{ color: C.primary }}
                >
                  <RedditIcon />
                  Join our community on Reddit
                </a>
                {" "}to chat with fellow pianists.
              </p>
            </motion.div>
          </div>

          {/* ── Right: Product showcase ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="md:w-96 flex flex-col items-center gap-6 shrink-0"
          >
            {/* Character/Product display */}
            <div
              className="w-full aspect-square rounded-3xl flex flex-col items-center justify-center gap-4 p-8"
              style={{
                backgroundColor: "#2D1509",
              }}
            >
              <span className="text-9xl">🎹</span>
              <p className="text-sm text-center px-4 text-white/60">
                Product illustration placeholder
              </p>
            </div>

            {/* Fun caption */}
            <p
              className="text-center text-lg font-medium"
              style={{ color: C.muted }}
            >
              Even the greats needed a little help sometimes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
