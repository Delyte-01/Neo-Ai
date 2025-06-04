"use client";

import { ReactNode, FC, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import Lenis from "@studio-freight/lenis";

// Optional: ScrollTrigger sync
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: FC<SmoothScrollProps> = ({ children }) =>
{
 
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optional: ScrollTrigger sync
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        anchors: {
          offset: -80,
          onComplete: () => {
            console.log("scrolled to anchor");
          },
        },
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
