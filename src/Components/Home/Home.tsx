import "./home.css";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiCss3, SiHtml5, SiNodedotjs, SiVuedotjs } from "react-icons/si";
import useWindowSize from "../Utility/useWindowSize";
import Info from "./Info";
import { Trans, useTranslation } from "react-i18next";
import BouncingLetter from "./BouncingLetter";
import React from "react";

const Home = ({ scrollPos }: { scrollPos: number }) => {
    const { width } = useWindowSize();
    const { t } = useTranslation();

    return (
        <>
            <section className="home">
                <div className="textWrapper">
                    <div className="textContainer">
                        <div style={{ transform: `translateX(${width >= 780 ? scrollPos * 1500 : 0}px)` }}>
                            <h1 className="homeTitle">
                                {t("home.hello")}
                                <br />
                                {t("home.im.franco")}
                            </h1>
                            <p className="homeText">
                                <span>
                                    {t("home.im.frontend.webdev")}
                                    <br /> {t("home.focused.on")}&nbsp;
                                </span>
                                <span className="movingLtrsSpan">
                                    {width < 780 ? (
                                        <span className="funkySpan">{t("home.reactive")}</span>
                                    ) : (
                                        <>{bouncingText(t("home.reactive"))}</>
                                    )}
                                </span>
                                <Trans i18nKey="myKey" defaults={t("home.aswell")} components={{ br: <br /> }} />
                            </p>

                            <div className="skillsetIcons">
                                <SiHtml5 size={40} color="#f16528" className="homeIcons" aria-label="HTML5 icon" />
                                <SiCss3 size={40} color="#0096d1" className="homeIcons" aria-label="CSS3 icon" />
                                {/* prettier-ignore */}
                                <SiJavascript size={40} color="#ceb200" className="homeIcons" aria-label="JavaScript icon" />
                                {/* prettier-ignore */}
                                <SiTypescript size={40} color="#0096d1" className="homeIcons" aria-label="TypeScript icon" />
                                <FaReact size={40} color="#5dddff" className="homeIcons" aria-label="React icon" />
                                <SiVuedotjs size={40} color="#41B883" className="homeIcons" aria-label="React icon" />
                                <SiNodedotjs size={40} color="#539E43" className="homeIcons" aria-label="React icon" />
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
                        <span key={index} className="homeText" style={{ margin: 0 }}>
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

export default Home;
