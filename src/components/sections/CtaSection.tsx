"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function CtaSection() {
  return (
    <section
      id="download"
      className="relative py-32 px-6 overflow-hidden bg-transparent"
    >

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">

        {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        /* 默认正常换行 (whitespace-normal)，在中等屏幕(md)及以上不换行 (md:whitespace-nowrap) */
        className="text-6xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold tracking-wide leading-[1.1] whitespace-normal md:whitespace-nowrap"
        style={{ color: "#701D02" }}
      >
        Anytime is Wonderia Time
      </motion.h2>
      
        {/* Dashline divider */}
        <div className="flex justify-center mt-8 mb-4">
          <img
            src="/icons/features-decorations/dashline.svg"
            alt="divider"
            className="w-auto"
          />
        </div>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed italic font-medium"
          style={{
            color: "#FEB37D",
            fontFamily: '"Inter", sans-serif'
          }}
        >
          Start your magical adventure today!
        </motion.p>

        {/* Card image */}
        <div className="mt-12 relative flex items-center justify-center">
          <img
            src="/icons/cta/magicstar.svg"
            alt="Magic star"
            className="absolute -left-16 md:-left-30 h-56 md:h-80 w-auto"
          />
          <img
            src="/icons/cta/downloadcard.svg"
            alt="CTA card"
            className="w-full max-w-2xl mx-auto"
          />
          <img
            src="/icons/cta/stone-sss.svg"
            alt="Stone decoration"
            className="absolute -right-16 md:-right-35 -top-15 md:-top-20 h-56 md:h-80 w-auto"
          />
        </div>

      </div>
    </section>
  );
}