import { motion } from "framer-motion";
import "./Navbar.css";
import useWindowSize from "../Utility/useWindowSize";
import MobileMenu from "./MobileMenu";
import NavbarButtons from "./NavbarButtons";
import SocialMedia from "./SocialMedia";
import i18n from "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { ReactComponent as Logo } from "../../Assets/img/logo-white.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { width } = useWindowSize();
    const { t } = useTranslation();

    // for some reason t() isnt working unless i18n.changeLanguage()
    //  is called somewhere in the code, even if not executed
    // eslint-disable-next-line
    const what = () => i18n.changeLanguage("en");

    return (
        <>
            {width >= 1024 && (
                <motion.nav initial={{ x: -600 }} animate={{ x: 0 }} transition={{ duration: 1.2 }}>
                    <div className="navbarContainer">
                        <div className="somethingContainer">
                            <Link to="/">
                                <Logo className="logo"></Logo>
                            </Link>
                        </div>

                        <div className="navbarBtnsContainer">
                            <NavbarButtons
                                btns={[
                                    { text: t("navbar.home"), path: "/" },
                                    { text: t("navbar.webapps"), path: "/webapps" },
                                    { text: t("navbar.contact"), path: "/contact" },
                                ]}
                            />
                        </div>

                        <SocialMedia />
                    </div>
                </motion.nav>
            )}
            {width < 1024 && <MobileMenu />}
        </>
    );
};

export default Navbar;
