"use client";
import { ReactNode, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  delay?: number;
  duration?: number;
  triggerStart?: string;
  className?: string;
};

export default function Reveal({
  children,
  from = { opacity: 0, y: 60 },
  to = { opacity: 1, y: 0 },
  delay = 0,
  duration = 1,
  triggerStart = "top 80%",
  className = "",
}: RevealProps) {
  const el = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!el.current) return;

      gsap.fromTo(
        el.current,
        { ...from },
        {
          ...to,
          delay,
          duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el.current,
            start: triggerStart,
            toggleActions: "play none none reset",
          },
        }
      );

      // ✅ Refresh ScrollTrigger after short delay to fix mobile quirks
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    },
    { scope: el, dependencies: [delay, duration, from, to, triggerStart] }
  );

  // ✅ Optional: Refresh on window resize to handle orientation changes
  useEffect(() => {
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div ref={el} className={className}>
      {children}
    </div>
  );
}
