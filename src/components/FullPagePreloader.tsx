"use client";

import React, { useEffect, useState } from "react";
import PreloaderLogo from "./PreloaderLogo";

type FullPagePreloaderProps = {
  playfairClassName?: string;
};

const FullPagePreloader: React.FC<FullPagePreloaderProps> = ({ playfairClassName }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onLoad = () => {
      // graceful fade out
  setTimeout(() => setVisible(false), 450);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      // fallback timeout
      const t = setTimeout(onLoad, 2000);
      return () => {
        window.removeEventListener("load", onLoad);
        clearTimeout(t);
      };
    }
  }, []);

  useEffect(() => {
    // ensure body has class while preloader is visible
    try {
      if (visible) {
        document.documentElement.classList.add("is-preloading");
      } else {
        document.documentElement.classList.remove("is-preloading");
        // Notify others that preloader finished
        try {
          document.dispatchEvent(new Event("preloader:done"));
        } catch (e) {
          /* ignore */
        }
      }
    } catch (e) {
      // ignore server-side or DOM errors
    }
  }, [visible]);

  // If a static preloader exists from SSR, use it and synchronize visibility
  useEffect(() => {
    const staticEl = document.getElementById("preloader-static");
    if (staticEl) {
      // if client preloader will hide, remove static after fade
      if (!visible) {
        // give the fade duration time before removing
        setTimeout(() => {
          staticEl.parentNode?.removeChild(staticEl);
        }, 550);
      }
    }
  }, [visible]);

  return (
    <div
      aria-hidden={!visible}
      className={`preloader-root ${visible ? "preloader-visible" : "preloader-hidden"}`}
    >
        <div className="preloader-inner">
        <div className={`preloader-logo ${playfairClassName || ""}`}>
          <PreloaderLogo className={playfairClassName} />
        </div>
        <div className="preloader-dots" aria-hidden>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="preloader-text mt-6">Trioz Boutique</div>
      </div>
    </div>
  );
};

export default FullPagePreloader;
