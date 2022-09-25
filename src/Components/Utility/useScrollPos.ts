import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

export default function (ref: React.RefObject<HTMLElement>) {
    const {width} = useWindowSize()
  const { scrollYProgress } = useScroll({
    //container: width >= 780 ? ref : undefined,
    container: ref,
  });
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      setScrollPos(latest);
    });
  }, []);
  return scrollPos;
}
