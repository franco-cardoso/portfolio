import { useState, useEffect } from "react";

function getSize() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize);
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
