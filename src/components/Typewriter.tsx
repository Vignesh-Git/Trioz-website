"use client";

import React, { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  loop?: boolean;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1400,
  loop = false,
  className = "",
}) => {
  const [display, setDisplay] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const indexRef = useRef(0);
  const deletingRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const clear = () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const runType = () => {
      const tick = () => {
        if (!deletingRef.current) {
          indexRef.current += 1;
          setDisplay(text.slice(0, indexRef.current));

          if (indexRef.current === text.length) {
            if (loop) {
              timeoutRef.current = window.setTimeout(() => {
                deletingRef.current = true;
                tick();
              }, pause);
              return;
            } else {
              return;
            }
          }
          timeoutRef.current = window.setTimeout(tick, typingSpeed);
        } else {
          indexRef.current -= 1;
          setDisplay(text.slice(0, indexRef.current));
          if (indexRef.current === 0) {
            deletingRef.current = false;
            timeoutRef.current = window.setTimeout(tick, typingSpeed);
            return;
          }
          timeoutRef.current = window.setTimeout(tick, deletingSpeed);
        }
      };

      clear();
      timeoutRef.current = window.setTimeout(tick, typingSpeed);
    };

    // If preloader is active, wait for the 'preloader:done' event
    let started = false;
    const startAfterPreloader = () => {
      if (!started) {
        started = true;
        // add an extra 500ms delay for a smoother reveal
        timeoutRef.current = window.setTimeout(() => runType(), 500);
      }
    };

    const preloaderDoneHandler = () => startAfterPreloader();

    // If preloader already finished, start immediately
    if (typeof document !== "undefined" && !document.documentElement.classList.contains("is-preloading")) {
      startAfterPreloader();
    } else {
      document.addEventListener("preloader:done", preloaderDoneHandler, { once: true });
    }

    return () => {
      clear();
      document.removeEventListener("preloader:done", preloaderDoneHandler);
    };
  }, [text, typingSpeed, deletingSpeed, pause, loop]);

  useEffect(() => {
    const iv = window.setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(iv);
  }, []);

  return (
    <span className={className} aria-live="polite">
      {display}
      <span
        aria-hidden
        style={{
          display: "inline-block",
          width: 2,
          marginLeft: 6,
          background: "currentColor",
          verticalAlign: "middle",
          height: "1em",
          visibility: cursorVisible ? "visible" : "hidden",
        }}
      />
    </span>
  );
};

export default Typewriter;
