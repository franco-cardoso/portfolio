import { motion } from "framer-motion";
import "./Navbar.css";
import useWindowSize from "../Utility/useWindowSize";
import MobileMenu from "./MobileMenu";
import NavbarButtons from "./NavbarButtons";
import SocialMedia from "./SocialMedia";

const Navbar = () => {
  const { width, height } = useWindowSize();

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
            <div className="somethingContainer">something</div>

            <div className="navbarBtnsContainer">
              <NavbarButtons
                btns={[
                  { text: "About", path: "/portfolio" },
                  { text: "Web Apps Portfolio", path: "/portfolio" },
                  { text: "Work", path: "/portfolio" },
                  { text: "Contact", path: "/portfolio/contact" },
                ]}
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
