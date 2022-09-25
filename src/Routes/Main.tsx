import { Routes, Route, useLocation } from "react-router-dom";
import AboutRoute from "./AboutRoute";
import ContactRoute from "./ContactRoute";
import { AnimatePresence } from "framer-motion";



const Main = () => {
  const location = useLocation();


  return (
    <main>

        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/portfolio" element={<AboutRoute />} />
            <Route path="/portfolio/contact" element={<ContactRoute />} />
          </Routes>
        </AnimatePresence>
    </main>
  );
};

export default Main;
