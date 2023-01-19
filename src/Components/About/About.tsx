import "./About.css";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiCss3, SiHtml5 } from "react-icons/si";
import useWindowSize from "../Utility/useWindowSize";
import Info from "./Info";
import { Trans, useTranslation } from "react-i18next";
import BouncingLetter from "./BouncingLetter";
import React from "react";

const About = ({ scrollPos }: { scrollPos: number }) => {
    const { width } = useWindowSize();
    const { t } = useTranslation();

    return (
        <>
            <section className="about">
                <div className="textWrapper">
                    <div className="textContainer">
                        <div style={{ transform: `translateX(${width >= 780 ? scrollPos * 1500 : 0}px)` }}>
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
                                        <>{bouncingText(t("about.reactive"))}</>
                                    )}
                                </span>
                                <Trans i18nKey="myKey" defaults={t("about.aswell")} components={{ br: <br /> }} />
                            </p>

                            <div className="skillsetIcons">
                                <SiHtml5 size={40} color="#f16528" className="aboutIcons" aria-label="HTML5 icon" />
                                <SiCss3 size={40} color="#0096d1" className="aboutIcons" aria-label="CSS3 icon" />
                                {/* prettier-ignore */}
                                <SiJavascript size={40} color="#ceb200" className="aboutIcons" aria-label="JavaScript icon" />
                                {/* prettier-ignore */}
                                <SiTypescript size={40} color="#0096d1" className="aboutIcons" aria-label="TypeScript icon" />
                                <FaReact size={40} color="#5dddff" className="aboutIcons" aria-label="React icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="info">
                <Info />
            </section>
        </>
    );
};

const bouncingText = (word: string): React.ReactNode => {
    const wordSplit = word.split("");
    return (
        <span className="funkySpan">
            {wordSplit.map((l, index) => {
                if ([" ", ","].includes(l)) {
                    return (
                        <span key={index} className="aboutText" style={{ margin: 0 }}>
                            {l === " " ? "\u00A0" : l}
                        </span>
                    );
                } else {
                    return <BouncingLetter letter={l} key={index} />;
                }
            })}
        </span>
    );
};

export default About;
