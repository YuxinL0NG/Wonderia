"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent py-10"
    >
      {/* --- 核心舞台：控制装饰物与文字的相对距离 --- */}
      <div className="relative w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center">
        <div className="absolute top-[-10%] right-[2%] w-[25%] max-w-[600px] pointer-events-none z-0">
          <svg width="100%" height="auto" viewBox="1030 0 450 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
            <path 
              d="M1268.34 8.74818C1276.99 -5.6097 1298.84 -1.45248 1301.62 15.0807L1318.52 115.737C1322.88 141.727 1338.38 164.513 1360.95 178.118L1448.37 230.809C1462.72 239.464 1458.57 261.31 1442.03 264.086L1341.38 280.987C1315.39 285.351 1292.6 300.851 1279 323.422L1226.3 410.835C1217.65 425.193 1195.8 421.035 1193.03 404.502L1176.13 303.846C1171.76 277.856 1156.26 255.07 1133.69 241.465L1046.28 188.774C1031.92 180.119 1036.08 158.273 1052.61 155.497L1153.27 138.596C1179.26 134.232 1202.04 118.732 1215.65 96.1614L1268.34 8.74818Z" 
              fill="url(#paint_hero_star_final)" 
            />
            <defs>
              <linearGradient id="paint_hero_star_final" x1="1293.53" y1="-33.0499" x2="1201.11" y2="452.633" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFC52F80" />
                <stop offset="1" stopColor="#FFFAD7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-[0%] left-[0%] w-[16%] max-w-[300px] pointer-events-none z-0">
          <svg width="100%" height="auto" viewBox="0 330 234 182" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
            <path 
              d="M233.065 348.874C233.664 347.015 233.373 344.984 232.276 343.368C231.179 341.752 229.399 340.732 227.45 340.602L98.7321 332.018C95.8283 331.825 93.1654 333.632 92.2733 336.402L62.0433 430.268C57.9543 424.08 51.812 419.189 44.2032 416.738C26.4216 411.012 7.36437 420.784 1.6377 438.566C-4.08897 456.347 5.68351 475.405 23.4651 481.131C41.2468 486.858 60.304 477.086 66.0307 459.304C66.1243 459.013 66.2137 458.722 66.2991 458.431L90.0404 384.713L205.713 392.427L184.367 458.709C180.278 452.519 174.134 447.626 166.523 445.175C148.742 439.448 129.685 449.221 123.958 467.002C118.231 484.784 128.004 503.841 145.785 509.568C163.567 515.295 182.624 505.522 188.351 487.74C188.426 487.508 188.498 487.276 188.567 487.043L233.065 348.874Z" 
              fill="#FFC52F80" 
              fillOpacity="0.5"
            />
          </svg>
        </div>

        {/* --- 文字内容层 --- */}
        <div className="relative z-10 flex flex-col items-center text-center w-full">
          
          <motion.h1
            {...fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-[90px] font-extrabold tracking-wide leading-[1.1]"
            style={{ color: "#701D02" }}
          >
            Ignite the joy
          </motion.h1>

          <motion.h1
            {...fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="text-6xl sm:text-7xl md:text-[90px] font-extrabold tracking-wide leading-[1.1]"
            style={{ color: "#701D02" }}
          >
            Hooked on practice
          </motion.h1>

          {/* 虚线分割线 */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full max-w-[817px] my-10 px-4"
          >
            <svg width="100%" height="2" viewBox="0 0 817 2" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0.700439 0.700378L815.941 0.700378" stroke="url(#paint_dash)" strokeOpacity="0.2" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2.8 4.2"/>
              <defs>
                <linearGradient id="paint_dash" x1="0.7" y1="1.2" x2="816" y2="1.2" gradientUnits="userSpaceOnUse">
                  <stop offset="0.038" stopColor="#DD8B07" stopOpacity="0.5"/>
                  <stop offset="0.543" stopColor="#774B04"/>
                  <stop offset="1" stopColor="#DD8B07" stopOpacity="0.5"/>
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-lg sm:text-xl max-w-2xl leading-relaxed font-medium italic"
            style={{ color: "#FEB37D", fontFamily: '"Inter", sans-serif' }}
          >
            Transform piano practice into a magical adventure. Game-based learning,
            real-time feedback, and your personal musical buddy Momo.
          </motion.p>
        </div>

      </div>
    </section>
  );
}