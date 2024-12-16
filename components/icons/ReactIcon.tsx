import { cn } from "@/lib/utils";
import { FC } from "react";

const ReactIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="-10.5 -9.45 21 18.9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      "text-sm me-0 w-10 h-10 text-link flex origin-center transition-all ease-in-out",
      className
    )}
  >
    <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="10" ry="4.5"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

export default ReactIcon;
