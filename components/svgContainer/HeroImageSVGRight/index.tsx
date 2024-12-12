import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import FiltersAndMasking from "./FiltersAndMasking";
import Paths from "./Paths";
import BrowserComponent from "./BrowserComponent";
import AmpersendIcon from "./AmpersendIcon";
import AnalyticsIcon from "./AnalyticsIcons";
import ChromeIcon from "./ChromeIcon";
import CupIcon from "./CupIcon";
import FigmaIcon from "./FigmaIcon";
import UploadIcon from "./UploadIcon";
import GithubIcon from "./GithubIcon";
import HealthCounter from "./HealthCard";
import JenkinsIcon from "./JenkinsIcon";
import LoadingIcon from "./LoadingIcon";
import PeoplesIcon from "./Peoples";
import SettingsIcon from "./Settings";
import SlackIcon from "./Slack";
import ThunderIcon from "./ThunderIcon";
import TrelloIcon from "./Trello";
import UserIcon from "./UserIcon";
import VscodeIcon from "./VsCode";
import CubeIcon from "./Cube";

const HeroImageSVGRight = ({ width }: any) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    if (!svgRef.current) return;

    const elementsToAnimate = [
      "#peopleDraw",
      "#figmaDraw",
      "#trelloDraw",
      "#slackDraw",
      "#cupDraw",
      "#thunderDraw",
      "#settingsDraw",
      "#loadingDraw",
      "#githubDraw",
      "#cubeDraw",
      "#uploadDraw",
      "#ampersendDraw",
      "#userDraw",
    ];

    const existingElements = elementsToAnimate.filter((selector) =>
      document.querySelector(selector)
    );

    gsap.fromTo(
      existingElements,
      { strokeDasharray: "0,100", opacity: 0 },
      {
        strokeDasharray: "100,0",
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 2,
      }
    );

    const iconsTimeline = gsap.timeline();
    iconsTimeline
      .fromTo(
        [
          "#peopleScale",
          "#figmaScale",
          "#trelloScale",
          "#slackScale",
          "#cupScale",
          "#thunderScale",
          "#vsCodeScale",
          "#settingsScale",
          "#loadingScale",
          "#githubScale",
          "#cubeScale",
          "#jenkinsScale",
          "#uploadScale",
          "#ampersendScale",
        ],
        { scale: 0, transformOrigin: "center center" },
        { scale: 1, duration: 1.4, ease: "expo.inOut" }
      )
      .fromTo(
        "#analytical_bar",
        { scaleY: 0, transformOrigin: "center bottom" },
        {
          scaleY: 1,
          duration: 0.2,
          yoyo: true,
          repeat: 2,
          stagger: 0.2,
        }
      );

    gsap.fromTo(
      "#loading-spin",
      { rotation: 0 },
      {
        rotate: 360,
        duration: 4,
        repeat: Infinity,
        ease: "none",
        transformOrigin: "center center",
      }
    );

    gsap.fromTo(
      "#setting-animate",
      { rotation: 10, transformOrigin: "top right" },
      {
        rotate: -10,
        duration: 1,
        repeat: Infinity,
        yoyo: true,
        ease: "none",
      }
    );
  }, []);

  return (
    <svg
      ref={svgRef}
      width={width}
      height=""
      viewBox="0 0 1526 1205"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-foreground"
    >
      <Paths />
      <BrowserComponent />
      <ChromeIcon />
      <UserIcon />
      <HealthCounter />
      <AnalyticsIcon />
      <AmpersendIcon />
      <UploadIcon />
      <JenkinsIcon />
      <GithubIcon />
      <CubeIcon />
      <LoadingIcon />
      <SettingsIcon />
      <VscodeIcon />
      <ThunderIcon />
      <CupIcon />
      <SlackIcon />
      <TrelloIcon />
      <FigmaIcon />
      <PeoplesIcon />
      <FiltersAndMasking />
    </svg>
  );
};

export default HeroImageSVGRight;
