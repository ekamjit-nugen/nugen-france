import gsap from "gsap";
import { useLayoutEffect } from "react";

const BrowserComponent = () => {
  useLayoutEffect(() => {
    gsap.fromTo(
      "#browser #skeleton",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        repeat: Infinity,
        ease: "easeIn",
        stagger: 0.2,
      }
    );
  }, []);
  return (
    <g id="browser">
      <rect
        x="193.061"
        y="525.431"
        width="820.387"
        height="506.411"
        rx="84.2073"
        fill="url(#paint0_radial_3924_185)"
      />
      <rect
        x="401.174"
        y="667.71"
        width="543.424"
        height="307.943"
        rx="29.4402"
        fill="white"
      />
      <rect
        x="431.074"
        y="692.546"
        width="106.346"
        height="106.346"
        rx="17.7244"
        fill="#D9D9D9"
        id="skeleton"
      />
      <rect
        x="557.677"
        y="692.546"
        width="126.603"
        height="32.9167"
        rx="10.1282"
        id="skeleton"
        fill="#D9D9D9"
      />
      <rect
        x="557.677"
        y="743.187"
        width="291.187"
        height="55.7053"
        rx="15.1923"
        id="skeleton"
        fill="#D9D9D9"
      />
      <rect
        x="431.074"
        y="872.322"
        width="483.623"
        height="78.4938"
        rx="15.1923"
        fill="#D9D9D9"
        id="skeleton"
      />
      <rect
        x="431.074"
        y="819.149"
        width="248.142"
        height="32.9167"
        rx="10.1282"
        fill="#D9D9D9"
        id="skeleton"
      />
      <rect
        x="401.174"
        y="667.71"
        width="543.424"
        height="307.943"
        rx="29.4402"
        stroke="#D9D9D9"
        strokeWidth="0.968323"
      />
      <rect
        x="249.25"
        y="667.71"
        width="130.699"
        height="305.411"
        rx="29.4402"
        fill="white"
      />
      <rect
        x="269.023"
        y="687.482"
        width="91.1541"
        height="17.7244"
        rx="5.06412"
        fill="#D9D9D9"
        id="skeleton"
      />
      <rect
        x="269.023"
        y="722.931"
        width="91.1541"
        height="17.7244"
        rx="5.06412"
        fill="#D9D9D9"
        id="skeleton"
      />
      <rect
        x="269.023"
        y="758.379"
        width="91.1541"
        height="17.7244"
        rx="5.06412"
        fill="#D9D9D9"
        id="skeleton"
      />
      <rect
        x="269.023"
        y="793.828"
        width="91.1541"
        height="17.7244"
        rx="5.06412"
        fill="#D9D9D9"
        id="skeleton"
      />
      <rect
        x="269.023"
        y="829.277"
        width="91.1541"
        height="17.7244"
        rx="5.06412"
        fill="#D9D9D9"
        id="skeleton"
      />
      <rect
        x="269.023"
        y="864.725"
        width="91.1541"
        height="17.7244"
        rx="5.06412"
        fill="#D9D9D9"
        id="skeleton"
      />
      <rect
        x="269.023"
        y="900.174"
        width="91.1541"
        height="17.7244"
        rx="5.06412"
        fill="#D9D9D9"
        id="skeleton"
      />
      <rect
        x="269.023"
        y="935.624"
        width="91.1541"
        height="17.7244"
        rx="5.06412"
        fill="#D9D9D9"
        id="skeleton"
      />
      <rect
        x="249.25"
        y="667.71"
        width="130.699"
        height="305.411"
        rx="29.4402"
        stroke="#D9D9D9"
        strokeWidth="0.968323"
      />
      <rect
        x="249.25"
        y="581.62"
        width="708.008"
        height="62.3331"
        rx="14.478"
        fill="white"
      />
      <rect
        x="271.555"
        y="593.796"
        width="40.5129"
        height="40.5129"
        rx="10.1282"
        fill="#D9D9D9"
        id="skeleton"
      />
      <rect
        x="752.646"
        y="598.86"
        width="30.3847"
        height="30.3847"
        rx="10.1282"
        fill="#D9D9D9"
        id="skeleton"
      />
      <rect
        x="803.287"
        y="598.86"
        width="30.3847"
        height="30.3847"
        rx="10.1282"
        fill="#D9D9D9"
        id="skeleton"
      />
      <rect
        x="853.928"
        y="598.86"
        width="30.3847"
        height="30.3847"
        rx="10.1282"
        fill="#D9D9D9"
        id="skeleton"
      />
      <rect
        x="904.569"
        y="598.86"
        width="30.3847"
        height="30.3847"
        rx="10.1282"
        fill="#D9D9D9"
        id="skeleton"
      />
      <rect
        x="249.25"
        y="581.62"
        width="708.008"
        height="62.3331"
        rx="14.478"
        stroke="#D9D9D9"
        strokeWidth="0.968323"
      />
    </g>
  );
};

export default BrowserComponent;
