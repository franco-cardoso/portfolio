import "./contact.css";
import { ReactNode, useContext } from "react";
import { GlobalContext } from "../../App";

type PropTypes = {
    title: string;
    subtitle: string;
    icon: ReactNode;
};

const ContactCard = (props: PropTypes) => {
    const gContext = useContext(GlobalContext);

    return (
        <div
            className="contactCard"
            onClick={() => {
                navigator.clipboard.writeText(props.subtitle);
                gContext.setNotif("Copied to clipboard!")
            }}
        >
            {props.icon}
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </div>
    );
};

export default ContactCard;
