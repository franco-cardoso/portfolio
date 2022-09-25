import { motion } from "framer-motion";
import "./Navbar.css";
import useWindowSize from "../Utility/useWindowSize";
import MobileMenu from "./MobileMenu";
import NavbarButtons from "./NavbarButtons";
import SocialMedia from "./SocialMedia";
import {useContext} from 'react'
import { LangContext } from "../../App";

const Navbar = () => {
  const { width, height } = useWindowSize();
  const language:any = useContext(LangContext)

  return (
    <>
      {width >= 1024 && (
        <motion.div
          style={{ position: "relative" }}
          initial={{ left: -600 }}
          animate={{ left: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="navbarContainer">
            <div className="somethingContainer">
              <button onClick={() => language.setLang('english')}>en</button>
              <button onClick={() => language.setLang('spanish')}>es</button>
            </div>

            <div className="navbarBtnsContainer">
              <NavbarButtons
                btns={[
                  { text: language.lang === 'english' ? "About" : 'Inicio', path: "/portfolio" },
                  { text: language.lang === 'english' ? "Web Apps" : 'Web Apps', path: "/portfolio" },
                  { text: language.lang === 'english' ? "Work" : 'Trabajo', path: "/portfolio" },
                  { text: language.lang === 'english' ? "Contact" : 'Contacto', path: "/portfolio/contact" },
                ]}
                setShowMenu={null}
              />
            </div>
                
            <SocialMedia />
          </div>
        </motion.div>
      )}
      {width < 1024 && <MobileMenu />}
    </>
  );
};

export default Navbar;
