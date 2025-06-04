"use client";
import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealGroupProps = {
  children: ReactNode;
  selector?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  stagger?: number;
  delay?: number;
  triggerStart?: string;
  className?: string;
};

export default function RevealGroup({
  children,
  selector = ".reveal-child",
  from = { opacity: 0, y: 60 },
  to = { opacity: 1, y: 0 },
  stagger = 0.15,
  delay = 0,
  triggerStart = "top 80%",
  className = "",
}: RevealGroupProps) {
  const groupRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const targets = groupRef.current?.querySelectorAll(selector);
      if (!targets || !targets.length) return;

      gsap.fromTo(targets, from, {
        ...to,
        delay,
        stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: groupRef.current,
          start: triggerStart,
          toggleActions: "play none none reset",
        },
      });
      // ✅ Refresh ScrollTrigger after short delay to fix mobile quirks
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    },
    { scope: groupRef }
  );

  return (
    <div ref={groupRef} className={className}>
      {children}
    </div>
  );
}
