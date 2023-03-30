import "./contact.css";
import { ReactNode, useContext } from "react";
import { GlobalContext } from "../../App";
import { useTranslation } from "react-i18next";
import ReactGa from 'react-ga4'

type PropTypes = {
    title: string;
    subtitle: string;
    icon: ReactNode;
};

const ContactCard = (props: PropTypes) => {
    const gContext = useContext(GlobalContext);
    const { t } = useTranslation();

    return (
        <div
            className="contactCard"
            onClick={() => {
                navigator.clipboard.writeText(props.subtitle);
                gContext.sendNotif(t("notif.clipboard"));
                ReactGa.event({
                    category: "contact",
                    action: "contact card clicked",
                    label: props.subtitle,
                })
            }}
        >
            {props.icon}
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </div>
    );
};

export default ContactCard;
