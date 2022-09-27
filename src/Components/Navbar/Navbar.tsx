import { motion } from "framer-motion";
import "./Navbar.css";
import useWindowSize from "../Utility/useWindowSize";
import MobileMenu from "./MobileMenu";
import NavbarButtons from "./NavbarButtons";
import SocialMedia from "./SocialMedia";
import i18n from "../../i18n/i18n";
import {useTranslation} from "react-i18next"
import { Btn } from "./NavbarButtons";

const Navbar = () => {
  const { width } = useWindowSize();
  const { t } = useTranslation();

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
              <Btn onClick={() => i18n.changeLanguage("en")}>en</Btn>
              <Btn onClick={() => i18n.changeLanguage("es")}>es</Btn>
            </div>

            <div className="navbarBtnsContainer">
              <NavbarButtons
                btns={[
                  { text: t("navbar.home"), path: "/portfolio" },
                  { text: t("navbar.webapps"), path: "/portfolio" },
                  { text: t("navbar.work"), path: "/portfolio" },
                  { text: t("navbar.contact"), path: "/portfolio/contact" },
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
