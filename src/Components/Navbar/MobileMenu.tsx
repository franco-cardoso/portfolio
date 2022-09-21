import { useState } from "react";
import NavbarButtons from "./NavbarButtons";
import SocialMedia from "./SocialMedia";
import MobileMenuSvg from "./MobileMenuSvg";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  return (
    <div className="mobileMenuContainer">
      <button className="burgerButton" onClick={() => setShowMenu(!showMenu)}>
        <MobileMenuSvg showMenu={showMenu} />
      </button>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="mobileMenu"
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ duration: 0.5 }}
          >
            <button className="burgerButton" onClick={() => setShowMenu(false)}>
              <IoClose size={40} />
            </button>

            <div className="navbarBtnsContainer btnsMobile">
              <NavbarButtons
                btns={[
                  { text: "About", path: "/portfolio" },
                  { text: "Web Apps Portfolio", path: "/portfolio" },
                  { text: "Work", path: "/portfolio" },
                  { text: "Contact", path: "/portfolio/contact" },
                ]}
              />
            </div>

            <div className="btnsMobile">
              <SocialMedia />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
