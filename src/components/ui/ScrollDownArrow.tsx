"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollDownArrow() {
  return (
    <motion.button
      onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className="flex flex-col items-center gap-1 cursor-pointer"
      style={{ color: "#7A5540" }}
      aria-label="Scroll down"
    >
      <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
      <ChevronDown size={20} />
    </motion.button>
  );
}
