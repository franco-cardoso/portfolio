import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "../Components/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import R from "./Route";
import WebAppsHub from "../Components/Webapps/WebAppsHub";
import RouteScroll from "./RouteScroll";

const Main = () => {
  const location = useLocation();

  return (
    <>
      {/* prettier-ignore */}
      <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            {/* <Route path="/" element={<R component={<About/>}/>}/> */}
            <Route path="/" element={<RouteScroll/>}/>
            <Route path="/contact" element={<R component={<Contact/>}/>}/>
            <Route path="/webapps" element={<R component={<WebAppsHub/>}/>}/>
          </Routes>
        </AnimatePresence>
    </>
  );
};

export default Main;
