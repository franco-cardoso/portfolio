import { useTranslation } from "react-i18next";
import "./WebApps.css";
import Wbapp from "./Wbapp";

const WebApps = () => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <a href="https://premiumbakery.vercel.app/" target={"_blank"} rel="noreferrer">
                <Wbapp
                    img="https://raw.githubusercontent.com/franco-cardoso/portfolio/main/src/Assets/img/wbappbakery.webp"
                    title={t("webapps.titleBakery")}
                    subTitle={t("webapps.subBakery")}
                    desc={t("webapps.descBakery")}
                />
            </a>
            <a href="https://franco-cardoso.github.io/react-training/" target={"_blank"} rel="noreferrer">
                <Wbapp
                    img="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-gray-solid-color-background.jpg"
                    title={t("webapps.titlePractice")}
                    subTitle={t("webapps.subPractice")}
                    desc={t("webapps.descPractice")}
                />
            </a>
        </div>
    );
};

export default WebApps;
