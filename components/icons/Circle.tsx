import { FC } from "react";

const CircleIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="185"
    height="235"
    viewBox="0 0 185 235"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M163.547 235C177.18 211.83 185 184.828 185 156C185 69.8436 115.156 0 29 0C19.0904 0 9.39655 0.923987 0 2.69051V235H163.547Z"
      fill="#2A9AD5"
    />
  </svg>
);

export default CircleIcon;
