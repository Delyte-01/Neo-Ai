"use client";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pulseRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const gradientRef = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  const simulateExternalLoad = (): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, 4000));

  useGSAP(
    () => {
      const svgEl = svgRef.current;
      const circle = svgEl?.querySelector("circle");

      if (!svgEl || !circle) return;

      const length = (circle as SVGGeometryElement).getTotalLength?.() || 300;
      gsap.set(circle, { strokeDasharray: length, strokeDashoffset: length });

      const logoTL = gsap.timeline();
      logoTL.to(circle, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: "power2.inOut",
      });

      // Animate shimmer pulse
      if (pulseRef.current) {
        gsap.to(pulseRef.current, {
          scale: 2.2,
          opacity: 0,
          duration: 2,
          repeat: -1,
          ease: "sine.out",
        });
      }

      // Progress counter
      gsap.to(
        {},
        {
          duration: 3.5,
          onUpdate: function () {
            const val = Math.floor(this.progress() * 100);
            setProgress(val);
          },
        }
      );

      // Animated background swirl
      gsap.to(gradientRef.current, {
        backgroundPosition: "200% 0",
        duration: 8,
        repeat: -1,
        ease: "linear",
      });

      // Split and animate text reveal
      if (textRef.current) {
        const split = new SplitType(textRef.current, { types: "chars" });
        gsap.from(split.chars, {
          opacity: 0,
          y: 10,
          stagger: 0.05,
          duration: 0.6,
          delay: 0.5,
          ease: "power2.out",
        });
      }

      // After loading + animation
      Promise.all([logoTL.play(), simulateExternalLoad()]).then(() => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.inOut",
          onComplete: () => {
            setVisible(false);
            onComplete();
          },
        });
      });
    },
    { scope: loaderRef }
  );

  if (!visible) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-4 text-white transition-opacity duration-1000"
    >
      {/* Animated Background Gradient */}
      <div
        ref={gradientRef}
        className="absolute inset-0 bg-[linear-gradient(120deg,#ff00cc,#3333ff,#00f0ff)] bg-[length:400%_400%] opacity-40 blur-3xl animate-gradient"
      />

      <div className="relative w-40 h-40 z-10">
        <div
          ref={pulseRef}
          className="absolute inset-0 rounded-full bg-white opacity-10 blur-2xl"
        />
        <svg
          ref={svgRef}
          className="relative z-10 w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="6" />
        </svg>
      </div>

      <div
        ref={textRef}
        className="z-10 text-3xl font-bold text-white tracking-widest"
      >
        NeoAI
      </div>

      <div className="text-white text-sm tracking-wide z-10">
        Loading {progress}%
      </div>
    </div>
  );
}
