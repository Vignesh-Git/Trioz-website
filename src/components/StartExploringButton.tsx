"use client";

import React from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";

const StartExploringButton: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const handleClick = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ButtonPrimary onClick={handleClick} className={className} sizeClass="px-5 py-4 sm:px-7">
      Start exploring
    </ButtonPrimary>
  );
};

export default StartExploringButton;
