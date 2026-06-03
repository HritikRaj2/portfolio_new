"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 200, mass: 0.5 };
  const ringX = useSpring(dotX, { damping: 35, stiffness: 150, mass: 0.8 });
  const ringY = useSpring(dotY, { damping: 35, stiffness: 150, mass: 0.8 });

  const isHovering = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleHoverIn = () => {
      isHovering.current = true;
      if (dotRef.current) {
        dotRef.current.style.width = "12px";
        dotRef.current.style.height = "12px";
        dotRef.current.style.background = "var(--gold-bright)";
      }
      if (ringRef.current) {
        ringRef.current.style.width = "48px";
        ringRef.current.style.height = "48px";
        ringRef.current.style.borderColor = "rgba(212, 175, 55, 0.8)";
      }
    };

    const handleHoverOut = () => {
      isHovering.current = false;
      if (dotRef.current) {
        dotRef.current.style.width = "8px";
        dotRef.current.style.height = "8px";
        dotRef.current.style.background = "var(--gold)";
      }
      if (ringRef.current) {
        ringRef.current.style.width = "28px";
        ringRef.current.style.height = "28px";
        ringRef.current.style.borderColor = "rgba(212, 175, 55, 0.5)";
      }
    };

    window.addEventListener("mousemove", moveCursor);

    const interactables = document.querySelectorAll(
      "a, button, [data-cursor-hover]"
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverIn);
        el.removeEventListener("mouseleave", handleHoverOut);
      });
    };
  }, [dotX, dotY]);

  return (
    <>
      <motion.div
        ref={dotRef}
        className="custom-cursor"
        style={{ x: dotX, y: dotY }}
      />
      <motion.div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
}
