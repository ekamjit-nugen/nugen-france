import { FC } from "react";

const GitLabIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="22"
    viewBox="0 0 24 22"
    fill="none"
    className={className}
  >
    <path
      d="M22.6501 13.5025L12.0001 21.2425L1.35014 13.5025C1.20737 13.3975 1.10146 13.25 1.04758 13.0812C0.993694 12.9124 0.994592 12.7308 1.05014 12.5625L2.27014 8.78251L4.71014 1.27251C4.73381 1.21132 4.77148 1.15652 4.82014 1.11251C4.89938 1.04013 5.00282 1 5.11014 1C5.21746 1 5.32091 1.04013 5.40014 1.11251C5.45153 1.16217 5.48939 1.22413 5.51014 1.29251L7.95014 8.78251H16.0501L18.4901 1.27251C18.5138 1.21132 18.5515 1.15652 18.6001 1.11251C18.6794 1.04013 18.7828 1 18.8901 1C18.9975 1 19.1009 1.04013 19.1801 1.11251C19.2315 1.16217 19.2694 1.22413 19.2901 1.29251L21.7301 8.80251L23.0001 12.5625C23.0507 12.736 23.0439 12.9211 22.9809 13.0905C22.9178 13.2598 22.8018 13.4043 22.6501 13.5025Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default GitLabIcon;
