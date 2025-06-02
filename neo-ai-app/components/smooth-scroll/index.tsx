"use client"
import React from 'react'
import { ReactLenis} from "lenis/react";

const SmoothScroll = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <ReactLenis root options={{lerp:0.08}}>{children}</ReactLenis>;
};

export default SmoothScroll