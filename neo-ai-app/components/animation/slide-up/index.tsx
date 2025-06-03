
import { ReactNode } from "react";
import Reveal from "../reveal";

export default function SlideUp({
  children,
  ...props
}: {
  children: ReactNode;
}) {
  return (
    <Reveal from={{ opacity: 0, y: 80 }} to={{ opacity: 1, y: 0 }} {...props}>
      {children}
    </Reveal>
  );
}
