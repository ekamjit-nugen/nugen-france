import { FC } from "react";

const DataBaseIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 48 48"
    className={className}
  >
    <circle cx="24" cy="24" r="20" fill="#ffca28"></circle>
    <path
      fill="#fff"
      d="M15,27v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-4H15z M19,31h-2v-2h2V31z"
    ></path>
    <path
      fill="#fff"
      d="M31,15H17c-1.1,0-2,0.9-2,2v8h18v-8C33,15.9,32.1,15,31,15z M19,23h-2v-2h2V23z M29,19H19v-2h10V19z"
    ></path>
  </svg>
);

export default DataBaseIcon;
