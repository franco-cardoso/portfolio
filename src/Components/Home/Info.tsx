import { useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import "./Info.css";
import { Trans, useTranslation } from "react-i18next";
import InfoHeader from "./InfoHeader";

const Info = () => {
    const infoRef = useRef(null);
    const infoInView = useInView(infoRef);
    const { t } = useTranslation();

    return (
            <div className="infoWrapper" ref={infoRef}>
                <AnimatePresence>
                    {infoInView && (
                        <>
                            <InfoHeader />
                            <motion.div
                                className="infoText"
                                initial="hidden"
                                animate="visible"
                                variants={textVar}
                                exit={{ opacity: 0 }}
                            >
                                <p>
                                    <Trans i18nKey="myKey" defaults={t("home.info.p1")} components={{ b: <b /> }} />
                                </p>
                                <p>{t("home.info.building")}</p>
                                <p>{t("home.info.graduated")}</p>

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
    );
};

export default Info;

const textVar: Variants = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 1.8 } },
};
