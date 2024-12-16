import { FC } from "react";

const WaveIcon2: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className={className}
  >
    <path
      fill="#0099ff"
      fill-opacity="0.6"
      d="M0,320L60,272C120,224,240,128,360,85.3C480,43,600,53,720,101.3C840,149,960,235,1080,250.7C1200,267,1320,213,1380,186.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    ></path>
  </svg>
);

export default WaveIcon2;
