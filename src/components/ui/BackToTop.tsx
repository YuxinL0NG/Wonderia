"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm text-white transition-all duration-200 hover:scale-105 hover:opacity-90"
          style={{
            backgroundColor: "#E07820",
            boxShadow: "0 4px 16px rgba(224,120,32,0.4)",
          }}
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
          Back to Top
        </motion.button>
      )}
    </AnimatePresence>
  );
}
