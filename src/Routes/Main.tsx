import { Routes, Route, useLocation } from "react-router-dom";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import R from "./Route";

const Main = () => {
  const location = useLocation();

  return (
    <main>
      {/* prettier-ignore */}
      <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/portfolio" element={<R component={<About/>}/>}/>
            <Route path="/portfolio/contact" element={<R component={<Contact/>}/>}/>
          </Routes>
        </AnimatePresence>
    </main>
  );
};

export default Main;
