import { FC } from "react";

const MiniCircle: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="58"
    height="58"
    viewBox="0 0 58 58"
    fill="none"
    className={className}
  >
    <circle cx="29" cy="29" r="29" fill="#2A9AD5" />
  </svg>
);

export default MiniCircle;
