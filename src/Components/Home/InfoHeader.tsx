import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const InfoHeader = () => {
    const { t } = useTranslation();

    return (
        <motion.div
            className="infoHeader"
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            variants={headerVar}
            exit={{ opacity: 0 }}
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
                    <p className="infoSub">{t("home.info.fullstack")}</p>
                    <p className="infoSubSub">{t("home.info.graduate")}</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

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

export default InfoHeader;
