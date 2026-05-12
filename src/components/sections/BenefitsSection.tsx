"use client";

import { motion } from "framer-motion";
import { Gamepad2, Mic, Users } from "lucide-react";
import { BENEFITS } from "@/lib/constants";

const ICON_MAP = { Gamepad2, Mic, Users } as const;
type IconKey = keyof typeof ICON_MAP;

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
      className="relative py-28 px-6 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading 区域 */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* 主标题 */}
          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wide leading-[1.1]"
            style={{ color: "#701D02" }}
          >
            Making Practice Addictive
          </motion.h2>

          {/* 副标题 */}
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed italic font-medium"
            style={{ 
              color: "#FEB37D", 
              fontFamily: '"Inter", sans-serif' 
            }}
          >
            Experience a world where practice feels like play. Through interactive
            storytelling and personalized goals, Wonderia turns the daily routine
            into the highlight of your day.
          </motion.p>
        </motion.div>

        {/* 卡片展示网格 */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {BENEFITS.map((benefit, index) => {
            const Icon = ICON_MAP[benefit.icon as IconKey];
            return (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group flex flex-col p-8 transition-all duration-500 relative"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <img
                    src={
                      index === 0
                        ? "/icons/features-decorations/game-based.svg"
                        : index === 1
                        ? "/icons/features-decorations/feedback.svg"
                        : "/icons/features-decorations/never-alone.svg"
                    }
                    alt={benefit.title}
                    className="w-20 h-20"
                  />
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-extrabold mt-5 text-center"
                  style={{ color: "#ED675F", marginBottom: "40px" }}
                >
                  {benefit.title}
                </h3>

                <img
                  src={
                    index === 0
                      ? "/icons/features-decorations/game-card.svg"
                      : index === 1
                      ? "/icons/features-decorations/feedback-card.svg"
                      : "/icons/features-decorations/never-card.svg"
                  }
                  alt={`${benefit.title} Card`}
                  className="w-full mb-8"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* 分隔线 - 位于三个卡片下方中间 */}
        <div className="flex justify-center" style={{ marginTop: "50px" }}>
          <img
            src="/icons/features-decorations/dashline.svg"
            alt="divider"
            className="w-auto"
          />
        </div>
      </div>
    </section>
  );
}