'use client'
import React, { useLayoutEffect } from "react";
React.useLayoutEffect = React.useEffect 
import gsap from "gsap";

const ThreeDMenu = () => {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".item",
      {
        y: "0%"
      },
      {
        y: "-100%",
        stagger: 0.2,
        delay: 0.2
      } 
    );
  }, []);

  return (
    <>
      <div className="item origin-top fixed top-0 left-0 w-1/4 h-screen bg-slate-900 z-[100] transition-all duration-300" />
      <div className="item origin-top fixed top-0 left-1/4 w-1/4 h-screen bg-slate-900 z-[100] transition-all duration-300" />
      <div className="item origin-top fixed top-0 left-2/4 w-1/4 h-screen bg-slate-900 z-[100] transition-all duration-300" />
      <div className="item origin-top fixed top-0 left-3/4 w-1/4 h-screen bg-slate-900 z-[100] transition-all duration-300" />
    </>
  );
};

export default ThreeDMenu;
