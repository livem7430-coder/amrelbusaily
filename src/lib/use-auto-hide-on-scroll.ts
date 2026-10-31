import { useEffect, useState } from "react";

/**
 * Mobile float UX: hide floating controls while the user scrolls down
 * through content, bring them back on scroll-up or after a short idle.
 * Prevents the fixed controls from covering text and CTAs mid-read.
 */
export function useAutoHideOnScroll(): boolean {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let lastY = window.scrollY;
    let idle: number | undefined;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY + 4 && y > 120) {
        setHidden(true);
        if (idle !== undefined) window.clearTimeout(idle);
        idle = window.setTimeout(() => setHidden(false), 1600);
      } else if (y < lastY - 4) {
        setHidden(false);
        if (idle !== undefined) window.clearTimeout(idle);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (idle !== undefined) window.clearTimeout(idle);
    };
  }, []);

  return hidden;
}
