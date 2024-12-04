import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);


const Paths = () => {
  useLayoutEffect(() => {
    const pathTimeline = gsap.timeline({
      duration: 2,
      ease: "easeIn",
      stagger: 0.8,
      yoyo: true,
      repeat: 99,
    });

    pathTimeline
      .fromTo(
        "#people_figma_path",
        {
          svgDraw: 0,
        },
        {
          svgDraw: 1,
        }
      )
      .fromTo(
        ["#trello_slack_lower, #trello_slack_upper"],
        {
          svgDraw: 0,
        },
        {
          svgDraw: 1,
        }
      )
      .fromTo(
        "#slack_dot_path",
        {
          svgDraw: 0,
        },
        {
          svgDraw: 1,
        }
      )
      .fromTo(
        ["#cup_trello_path, #cup_slack_path"],
        {
          svgDraw: 0,
        },
        {
          svgDraw: 1,
        }
      )
      .fromTo(
        [
          "#slack_dot_path",
          "#cup_thunder_path",
          "#vscode_thunder_path",
          "#vscode_loading_path",
          "#setting_loading_path",
          "#vscode_settings_path",
          "#loading_github_path",
          "#vscode_bluecircle_path",
          "#github_cube_path",
          "#cube_jenkins_path",
          "#health_jenkins_path",
        ],
        {
          svgDraw: 0,
        },
        {
          svgDraw: 1,
          stagger: 0.6,
        }
      )
      .fromTo(
        ["#health_analytic_path, #health_browser_path"],
        {
          svgDraw: 0,
        },
        {
          svgDraw: 1,
        }
      );
  }, []);
  return (
    <>
      <path
        id="health_browser_path"
        d="M1070 691H1000"
        stroke="currentColor"
        strokeWidth="3.37"
      />
      <path
        d="M1347.5 707.943H1434.12C1453.94 707.943 1470 724.001 1470 743.818C1470 767.857 1470 797.537 1470 821.575C1470 841.392 1453.94 857.451 1434.12 857.451H1409"
        stroke="currentColor"
        strokeWidth="3.36574"
        id="health_analytic_path"
      />
      <path
        d="M1330.56 209V295.638C1330.56 312.152 1343.94 325.539 1360.46 325.539H1396.1C1412.61 325.539 1426 338.927 1426 355.441L1426 545.098C1426 561.613 1412.61 575 1396.1 575H1346.5"
        stroke="currentColor"
        strokeWidth="3.36574"
        id="health_jenkins_path"
      />
      <path
        d="M1145 281.5V215.902C1145 199.387 1158.39 186 1174.9 186H1226"
        stroke="currentColor"
        strokeWidth="3.36574"
        id="cube_jenkins_path"
      />
      <path
        d="M1063 429H1121.08C1134.29 429 1145 418.29 1145 405.079V369"
        stroke="currentColor"
        strokeWidth="3.36574"
        id="github_cube_path"
      />
      <path
        d="M960 260H984.098C1000.61 260 1014 273.387 1014 289.902V377"
        stroke="currentColor"
        strokeWidth="3.36574"
        id="loading_github_path"
      />
      <path
        d="M925 225V129.557C925 107.251 906.917 89.1681 884.611 89.1681L700 89.1681"
        stroke="currentColor"
        strokeWidth="3.36574"
        id="setting_loading_path"
      />
      <path
        d="M634 89H603.755C588.892 89 576.844 101.049 576.844 115.911V234.089C576.844 248.951 588.892 261 603.755 261H646.5"
        stroke="currentColor"
        strokeWidth="3.36574"
        id="vscode_settings_path"
      />
      <path
        d="M753.262 256.617H808.519C821.731 256.617 832.441 267.327 832.441 280.538V313.43C832.441 326.641 843.151 337.351 856.362 337.351H901.579C914.79 337.351 925.5 326.641 925.5 313.43V295.5"
        stroke="currentColor"
        strokeWidth="3.36574"
        id="vscode_loading_path"
      />
      <path
        d="M716.202 191.659C716.202 192.59 716.956 193.344 717.886 193.344C718.817 193.344 719.571 192.59 719.571 191.659L716.202 191.659ZM717.886 143.776C712.926 143.776 708.904 147.797 708.904 152.758C708.904 157.718 712.926 161.74 717.886 161.74C722.847 161.74 726.869 157.718 726.869 152.758C726.869 147.797 722.847 143.776 717.886 143.776ZM716.202 152.758L716.202 191.659L719.571 191.659L719.571 152.758L716.202 152.758Z"
        fill="#23A8EE"
        stroke="#23A8EE"
        id="vscode_bluecircle_path"
      />
      <path
        d="M717 415L717 329"
        stroke="currentColor"
        strokeWidth="3.36574"
        id="vscode_thunder_path"
      />
      <path
        d="M502.089 322.4H542.456C558.97 322.4 572.357 335.787 572.357 352.302V400.202C572.357 416.716 585.745 430.104 602.259 430.104H693.459"
        stroke="currentColor"
        strokeWidth="3.36574"
        id="cup_thunder_path"
      />
      <path
        d="M377 416H468.098C484.613 416 498 402.613 498 386.098V351"
        stroke="currentColor"
        strokeWidth="3.36574"
        strokeLinecap="round"
        id="cup_slack_path"
      />
      <path
        d="M340.5 130.758H472C488.5 130.758 497.5 136 497.5 151.419V323.5"
        stroke="currentColor"
        strokeWidth="3.36574"
        strokeLinecap="round"
        id="cup_trello_path"
      />
      <path
        d="M291.628 417.238C292.557 417.238 293.311 416.485 293.311 415.555C293.311 414.626 292.557 413.872 291.628 413.872L291.628 417.238ZM224.459 415.555C224.459 420.512 228.478 424.531 233.435 424.531C238.392 424.531 242.41 420.512 242.41 415.555C242.41 410.598 238.392 406.58 233.435 406.58C228.478 406.58 224.459 410.598 224.459 415.555ZM233.435 417.238L291.628 417.238L291.628 413.872L233.435 413.872L233.435 417.238Z"
        fill="currentColor"
        id="slack_dot_path"
      />
      <path
        d="M187 261H306.098C322.613 261 336 274.387 336 290.902V370"
        stroke="currentColor"
        strokeWidth="3.36574"
        strokeLinecap="round"
        id="trello_slack_lower"
      />
      <path
        d="M187 261H310.098C326.613 261 340 247.613 340 231.098V175"
        stroke="currentColor"
        strokeWidth="3.36574"
        strokeLinecap="round"
        id="trello_slack_upper"
      />
      <path
        d="M101 495.5H66.3013C52.3278 495.5 41 484.172 41 470.199V399.301C41 385.328 52.3278 374 66.3013 374H118.699C132.672 374 144 362.672 144 348.699V306"
        stroke="currentColor"
        strokeWidth="3.36574"
        id="people_figma_path"
      />
    </>
  );
};

export default Paths;
