import "./About.css";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiCss3, SiHtml5 } from "react-icons/si";
import { useRef } from "react";
import useWindowSize from "../Utility/useWindowSize";
import Info from "./Info";
import useScrollPos from "../Utility/useScrollPos";
import { useTranslation } from "react-i18next";
import MovingLetter from "./MovingLetter";

const About = () => {
  const { width } = useWindowSize();
  const containerRef = useRef(null);
  const scrollPos = useScrollPos(containerRef, false);
  const { t } = useTranslation();

  return (
    <div className="container" ref={containerRef}>
      <div className="textWrapper">
        <div className="textContainer">
          <div style={{transform:`translateX(${width >= 780 ? scrollPos * 1500 : 0}px)`}}>
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
                  createMovingWord(t("about.reactive"))
                )}
              </span>
              <span>&nbsp;{t("about.frameworks")}</span>
            </p>

            <div className="skillsetIcons">
              <SiHtml5 size={40} color="#f16528" className="aboutIcons" />
              <SiCss3 size={40} color="#0096d1" className="aboutIcons" />
              <SiJavascript size={40} color="#ceb200" className="aboutIcons" />
              <SiTypescript size={40} color="#0096d1" className="aboutIcons" />
              <FaReact size={40} color="#5dddff" className="aboutIcons" />
            </div>
          </div>
        </div>
      </div>

      <Info />
    </div>
  );
};

const createMovingWord = (word: string) => {
  const wordSplit = word.split("");
  return (
    <span className="funkySpan">
      {wordSplit.map((l, index) => (
        <MovingLetter letter={l} key={index} />
      ))}
    </span>
  );
};

export default About;
