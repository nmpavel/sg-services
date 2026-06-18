"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";

/** Floating button that fades in past ~1 viewport and smooth-scrolls to top. */
export function ScrollToTopButton() {
  const { isVisible, scrollToTop } = useScrollToTop(600);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.2 }}
          whileHover={{ y: -3 }}
          className="bg-brand-gradient fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full text-white shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky focus-visible:ring-offset-2"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 19V5M6 11l6-6 6 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
