"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Tracks whether the page is scrolled past `threshold` px and exposes a
 * smooth scroll-to-top action. Powers the floating ScrollToTopButton.
 */
export function useScrollToTop(threshold = 600) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { isVisible, scrollToTop };
}
