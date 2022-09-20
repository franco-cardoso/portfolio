// @ts-nocheck
import { useRef, useEffect, useState, createContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutRoute from "./AboutRoute";
import ContactRoute from "./ContactRoute";
import { AnimatePresence, useScroll } from "framer-motion";

export const scrollPosContext = createContext();

const Main = () => {
  const location = useLocation();

  const mainEl = useRef(null);
  const { scrollYProgress } = useScroll({
    container: mainEl,
  });
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollPos(latest);
    });
  }, []);

  return (
    <main ref={mainEl}>
      <scrollPosContext.Provider value={{ scrollPos }}>
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/portfolio" element={<AboutRoute />} />
            <Route path="/portfolio/contact" element={<ContactRoute />} />
          </Routes>
        </AnimatePresence>
      </scrollPosContext.Provider>
    </main>
  );
};

export default Main;
