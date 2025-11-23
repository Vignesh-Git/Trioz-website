"use client";
import React from "react";

type Props = {
  className?: string;
};

const PreloaderLogo: React.FC<Props> = ({ className = "" }) => {
  return (
    <div className={`preloader-logo-svg ${className}`.trim()} aria-hidden>
      <div className="preloader-badge">T</div>
    </div>
  );
};

export default PreloaderLogo;
