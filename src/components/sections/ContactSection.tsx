"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

function RedditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative pt-28 pb-0 px-6 overflow-hidden bg-transparent scroll-mt-20"
    >

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start relative">

          {/* ── Left: contact info ── */}
          <div className="flex-1 flex flex-col gap-10">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wide leading-[1.1]"
                style={{ color: "#701D02" }}
              >
                CONTACT US
              </h2>

              <div className="flex justify-start mt-2 mb-2">
                <img
                  src="/icons/features-decorations/dashline.svg"
                  alt="divider"
                  className="w-[45%]"
                />
              </div>

              <p
                className="text-lg sm:text-xl leading-relaxed italic font-medium"
                style={{
                  color: "#FEB37D",
                  fontFamily: '"Inter", sans-serif'
                }}
              >
                Piano is hard, but talking to us isn't.
              </p>

            </motion.div>

            {/* Self-service */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-2 p-6 rounded-[20px] bg-gradient-to-r from-[#FDF4BF]/20 to-[#FDF4BF]/50 backdrop-blur-sm w-fit"
            >
              <p className="font-semibold text-2xl leading-relaxed" style={{ color: "#ED675F" }}>
                Got a quick question?
                <br /> 
                <a
                  href="#"
                  className="font-normal underline underline-offset-4 transition-opacity duration-200 hover:opacity-70"
                  style={{ color: "#E07820", fontFamily: '"Inter", sans-serif' }}
                >
                  Check our FAQs
                </a>
                <span className="font-normal">.</span>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-2 p-6 rounded-[20px] bg-gradient-to-r from-[#FDF4BF]/20 to-[#FDF4BF]/50 backdrop-blur-sm w-fit mb-25"
            >
              <p className="font-semibold text-2xl leading-relaxed" style={{ color: "#ED675F" }}>
                Still need a hand? Our team is just a message away.
              </p>
              <p className="text-2xl" style={{ color: "#7A5540" }}>
                Email us directly at{" "}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-normal underline underline-offset-2 transition-opacity duration-200 hover:opacity-70"
                  style={{ color: "#E07820" }}
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
            </motion.div>
          </div>
        {/* ── Right: Contact Logo  ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            // 1. 将宽度放大到 md:w-[550px] (如果你觉得还不够大可以改到 600px)
            // 2. 将 -top-4 改为了 -top-10，因为图片变大后可能需要往上挪一点点
            className="hidden md:block md:absolute md:right-25 md:-top-2 md:w-[550px]"
          >
            <img
              src="/icons/logo-contact.svg"
              alt="Contact Logo"
              className="w-full"
              // 3. 使用 style 注入多重 drop-shadow 滤镜实现完美的边缘发光效果
              style={{
                filter: `
                  drop-shadow(0 0 10px rgba(255, 240, 150, 0.9)) 
                  drop-shadow(0 0 12px rgba(255, 230, 100, 0.6))
                `
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="md:absolute md:-right-16 md:bottom-0 md:w-[500px]"
          >
            <img
              src="/images/avatars/contact.svg"
              alt="Contact illustration"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}