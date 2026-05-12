"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS, HASHTAG } from "@/lib/constants";

const C = {
  // 移除了 pageBg: "#FAF0DC"，让全局渐变透出来
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
      className="py-28 px-6 bg-transparent"
    >

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-30">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:w-96 shrink-0"
          >
            <h2
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wide leading-[1.1] flex flex-col"
              style={{ color: "#701D02" }}
            >
              <span>Successful</span>
              <span className="flex items-center gap-3">
                stories
                <img
                  src="/icons/successful-stories/tick.svg"
                  alt="tick"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </span>
            </h2>
            <div className="flex justify-center mt-12">
              <img
                src="/images/avatars/stories.svg"
                alt="stories"
                className="w-64 md:w-80"
              />
            </div>
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
                className={i > 0 ? "mt-8" : ""}
              >
                <img
                  src={
                    i === 0
                      ? "/icons/successful-stories/lily.svg"
                      : i === 1
                      ? "/icons/successful-stories/julian.svg"
                      : "/icons/successful-stories/mark.svg"
                  }
                  alt={`${t.author}'s story`}
                  className="w-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}