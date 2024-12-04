import gsap from "gsap";
import { useLayoutEffect } from "react";
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
  useLayoutEffect((): any => {
    const iconsTimeline = gsap.timeline({});
    gsap.fromTo(
      [
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
      ],
      { svgDraw: 0, opacity: 0 },
      {
        svgDraw: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 2,
      }
    );
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
          "#health_container",
          "#loading",
          "#browser",
          "#userScale",
          "#chrome_icon",
          "#analyticalScale",
        ],
        {
          scale: 0,
          transformOrigin: "center center",
        },
        {
          scale: 1,
          duration: 1.4,
          ease: "expo.inOut",
        }
      )
      .fromTo(
        [
          "#vsCodeOpacity",
          "#jenkinsOpacity",
          "#health_inner_circle",
          "#loadingpOpacity",
          "#health_rotation",
          "#chrome_path",
        ],
        {
          rotate: 0,
          scale: 0,
          transformOrigin: "center center",
        },
        {
          scale: 1,
          rotate: 360,
          transformOrigin: "center center",
          duration: 1,

          ease: "expo.inOut",
        }
      )
      .fromTo(
        "#analytical_bar",
        {
          svgDraw: 0,
          fill: 0,
          scaleY: 0,
          transformOrigin: "center bottom",
          ease: "elastic",
        },
        {
          svgDraw: 1,
          duration: 0.2,
          fill: 1,
          opacity: 1,
          scaleY: 1,
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
        delay: 10,
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
        delay: 10,
        duration: 1,
        repeat: Infinity,
        ease: "none",
        yoyo: true,
      }
    );
    gsap.fromTo(
      "#three-dots path",
      { y: 5, scale: 0, transformOrigin: "top bottom" },
      {
        y: 0,
        scale: 1,
        yoyo: true,
        delay: 10,
        duration: 0.5,
        stagger: 0.2,
        repeat: Infinity,
        ease: "expo.inOut",
      }
    );
    gsap.fromTo(
      ["#health-numbers-1", "#health-numbers-2"],
      { opacity: 0, scale: 0, transformOrigin: "center center" },
      {
        opacity: 1,
        scale: 1,
        delay: 12,
        duration: 0.8,
        stagger: 0.2,
        ease: "expo.inOut",
      }
    );
  }, []);
  return (
    <>
      <svg
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
    </>
  );
};

export default HeroImageSVGRight;
