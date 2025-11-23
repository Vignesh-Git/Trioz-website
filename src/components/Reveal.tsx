"use client";

import React, { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", threshold = 0.15, rootMargin = "0px" }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // If IntersectionObserver isn't available, show immediately
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    // If element is already visible in the viewport on mount, reveal it immediately
    try {
      const rect = el.getBoundingClientRect();
      if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        el.classList.add("is-visible");
        return;
      }
    } catch (e) {
      // ignore getBoundingClientRect errors in some SSR edge cases
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // unobserve to keep it simple
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Reveal;
