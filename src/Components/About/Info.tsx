import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
                                initial={{ /* x: -200, */ width: 0, opacity: 0 }}
                                animate={{ /* x: 0, */ width: "", opacity: 1 }}
                                transition={{ duration: 1 }}
                                exit={animExit}
                                className="infoHeader"
                            >
                                <motion.img
                                    className="infoPic"
                                    src="https://raw.githubusercontent.com/franco-cardoso/portfolio/main/src/Assets/img/pfp.webp"
                                    alt="Profile picture"
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                />
                                <div className="infoHeaderContent">
                                    <motion.h2
                                        initial={{ x: 80, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.7, delay: 1.2 }}
                                    >
                                        Franco Cardoso
                                    </motion.h2>
                                    <motion.hr
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.7, delay: 1.6 }}
                                    />
                                    <motion.div
                                        initial={{ x: 80, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.7, delay: 1.4 }}
                                    >
                                        <p className="infoSub">{t("about.info.fullstack")}</p>
                                        <p className="infoSubSub">{t("about.info.graduate")}</p>
                                    </motion.div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="infoText"
                                // animate={{ opacity: infoInView ? 1 : 0, x: infoInView ? 0 : -200 }}
                                initial={{ x: 30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.8 }}
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

{
    /* <motion.div
    className="infoTextWrapper"
    initial={{ backdropFilter: "brightness(0.1)" }}
  animate={{
    backdropFilter: `brightness(${infoInView ? 1 : 0.1})`,
  }}
  transition={{ duration: 1, delay: infoInView ? 0.7 : 0}}
>
  <AnimatePresence> 
    {infoInView && (
      <motion.div
        className="infoTextAnim"
        initial={{ x: -600, filter: "opacity(0)" }}
        animate={{ x: 0, filter: "opacity(1)" }}
        exit={{ x: -600, filter: "opacity(0)" }}
        transition={{ duration: 1, delay: infoInView ? 0.7 : 0}}
      >
        <div>
          <h1 className="aboutTitle" style={{ textAlign: "start" }}>
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p
            className="aboutText"
            style={{
              color: "#fff",
              textAlign: "start",
              margin: "10px 0",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            quia, vero molestias accusamus voluptate ipsum dolore numquam
            reiciendis?
          </p>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
  <div
    style={{ width: "300px", height: "300px", position: "absolute" }}
    ref={infoRef}
  ></div>
</motion.div> */
}
