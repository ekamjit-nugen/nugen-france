'use client'
import { useEffect, useState } from "react";

const useSize = () => {
  const [windowSize, setWindowSize] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const windowSizeHandler = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", windowSizeHandler);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  return windowSize;
};

export default useSize;
