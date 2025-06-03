"use client";
import { ReactNode, useRef } from "react";
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
  const el = useRef(null);

  useGSAP(
    () => {
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
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: el }
  );

  return (
    <div ref={el} className={className}>
      {children}
    </div>
  );
}
