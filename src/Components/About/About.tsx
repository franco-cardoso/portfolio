import "./About.css";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiCss3, SiHtml5 } from "react-icons/si";
import { useRef } from "react";
import useWindowSize from "../Utility/useWindowSize";
import Info from "./Info";
import useScrollPos from "../Utility/useScrollPos";
import MovingLettersWord from "./MovingLettersWord";
import { useTranslation } from "react-i18next";

const About = () => {
  const { width } = useWindowSize();
  const containerRef = useRef(null);
  const scrollPos = useScrollPos(containerRef);
  const { t } = useTranslation();

  return (
    <motion.div className="container" ref={containerRef}>
      <div className="textWrapper">
        <motion.div className="textContainer">
          <motion.div
            style={{
              transform: `translate(${scrollPos * 1500}px)`,
              pointerEvents: "auto",
            }}
          >
                <h1 className="aboutTitle">
                  {t("about.hello")}
                  <br />
                  {t("about.im.franco")}
                </h1>
                <p className="aboutText">
                  <span>
                    {t("about.im.frontend.webdev")}
                    <br /> {t("about.focused.on")}&nbsp;
                  </span>
                  <span className="movingLtrsSpan">
                    {width < 780 ? (
                      <span className="funkySpan">{t("about.reactive")}</span>
                    ) : (
                      <MovingLettersWord word={t("about.reactive")} />
                    )}
                  </span>
                  <span>&nbsp;{t("about.frameworks")}</span>
                </p>

            <div className="skillsetIcons">
              <SiHtml5 size={40} color="#f16528" className="aboutIcons" />
              <SiCss3 size={40} color="#0096d1" className="aboutIcons" />
              <SiJavascript size={40} color="#ceb200" className="aboutIcons" />
              <SiTypescript size={40} color="#0096d1" className="aboutIcons" />
              <FaReact
                size={40}
                color="rgb(93, 221, 255)"
                className="aboutIcons"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Info />
    </motion.div>
  );
};

export default About;
