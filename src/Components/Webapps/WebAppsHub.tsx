import { useTranslation } from "react-i18next";
import "./WebApps.css";
import Wbapp from "./Wbapp";

const WebApps = () => {
  const {t} = useTranslation()

  return (
    <div className="container">
      <a href="https://franco-cardoso.github.io/react-group-project/#/home">
        <Wbapp
          img="https://raw.githubusercontent.com/franco-cardoso/portfolio/main/src/Assets/wbappbakery.webp"
          title={t("webapps.titleBakery")}
          desc={t("webapps.descBakery")}
        />
      </a>
    </div>
  );
};

export default WebApps;
