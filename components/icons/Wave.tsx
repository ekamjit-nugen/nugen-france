import { FC } from "react";

const WaveIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className={className}
  >
    <path
      fill="#0099ff"
      fill-opacity="0.6"
      d="M0,192L60,160C120,128,240,64,360,69.3C480,75,600,149,720,176C840,203,960,181,1080,165.3C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    ></path>
  </svg>
);

export default WaveIcon;
