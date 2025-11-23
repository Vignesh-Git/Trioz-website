"use client";

import React from "react";
import Reveal from "./Reveal";

export type PremiumVariant = "fade-up" | "fade-right" | "zoom-in" | "image-shimmer" | "parallax-slow" | "glassy";

interface PremiumRevealProps {
  children: React.ReactNode;
  variant?: PremiumVariant;
  delay?: number; // milliseconds, mapped to nearest helper
  className?: string;
  threshold?: number;
}

const mapDelayClass = (delay?: number) => {
  if (!delay) return "";
  if (delay <= 50) return "reveal-delay-50";
  if (delay <= 150) return "reveal-delay-150";
  if (delay <= 250) return "reveal-delay-250";
  return "reveal-delay-350";
};

const PremiumReveal: React.FC<PremiumRevealProps> = ({ children, variant = "fade-up", delay, className = "", threshold = 0.15 }) => {
  const base = (() => {
    switch (variant) {
      case "fade-up":
        return "reveal--fade-up";
      case "fade-right":
        return "reveal--fade-right";
      case "zoom-in":
        return "reveal--zoom-in";
      case "image-shimmer":
        return "image-shimmer";
      case "parallax-slow":
        return "parallax-slow";
      case "glassy":
        return "glassy-card";
      default:
        return "reveal--fade-up";
    }
  })();

  const delayClass = mapDelayClass(delay);

  return (
    <Reveal className={`${base} ${delayClass} ${className}`.trim()} threshold={threshold}>
      {children}
    </Reveal>
  );
};

export default PremiumReveal;
