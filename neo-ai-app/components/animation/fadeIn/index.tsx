
import { ReactNode } from "react";
import Reveal from "../reveal";

export default function FadeIn({
  children,
  ...props
}: {
  children: ReactNode;
}) {
  return (
    <Reveal from={{ opacity: 0 }} to={{ opacity: 1 }} {...props}>
      {children}
    </Reveal>
  );
}
