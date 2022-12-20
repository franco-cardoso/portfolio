import { useRef } from "react";
import { motion, AnimatePresence, useInView, Variant, Variants } from "framer-motion";
import "./Info.css";
import { Trans, useTranslation } from "react-i18next";

const Info = () => {
    const infoRef = useRef(null);
    const infoInView = useInView(infoRef);
    const { t } = useTranslation();

    return (
        <section className="info">
            <div className="infoWrapper" ref={infoRef}>
                <AnimatePresence>
                    {infoInView && (
                        <>
                            <motion.div
                                className="infoHeader"
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 1 }}
                                variants={headerVar}
                                exit={animExit}
                            >
                                <motion.img
                                    className="infoPic"
                                    src="https://raw.githubusercontent.com/franco-cardoso/portfolio/main/src/Assets/img/pfp.webp"
                                    alt="Profile picture"
                                    variants={pfpVar}
                                />
                                <div className="infoHeaderContent">
                                    <motion.h2 custom={1.2} variants={headerContentVar}>
                                        Franco Cardoso
                                    </motion.h2>
                                    <motion.hr variants={hrVar} />
                                    <motion.div custom={1.3} variants={headerContentVar}>
                                        <p className="infoSub">{t("about.info.fullstack")}</p>
                                        <p className="infoSubSub">{t("about.info.graduate")}</p>
                                    </motion.div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="infoText"
                                // animate={{ opacity: infoInView ? 1 : 0, x: infoInView ? 0 : -200 }}
                                initial="hidden"
                                animate="visible"
                                variants={textVar}
                                exit={animExit}
                            >
                                <p>
                                    <Trans
                                        i18nKey="myKey" // optional -> fallbacks to defaults if not provided
                                        defaults={t("about.info.p1")} // optional defaultValue
                                        components={{ b: <b /> }}
                                    />
                                </p>
                                <p>{t("about.info.building")}</p>
                                <p>{t("about.info.graduated")}</p>

                                <div className="certificate" ref={infoRef}>
                                    <img
                                        src="https://raw.githubusercontent.com/franco-cardoso/portfolio/main/src/Assets/img/cert.webp"
                                        alt=""
                                        width="280px"
                                        height="190px"
                                    />
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Info;

const animExit = { opacity: 0 };

const headerVar: Variants = {
    hidden: { width: 0, opacity: 0, transition: { duration: 0.1 } },
    visible: { width: "", opacity: 1, transition: { duration: 1 } },
};

const pfpVar: Variants = {
    hidden: { x: 50, opacity: 0, transition: { duration: 1 } },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.8 } },
};

const headerContentVar: Variants = {
    hidden: { x: 80, opacity: 0 },
    visible: (del) => ({ x: 0, opacity: 1, transition: { duration: 0.7, delay: del } }),
};

const hrVar: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, delay: 1.6 } },
};

const textVar: Variants = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 1.8 } },
};
