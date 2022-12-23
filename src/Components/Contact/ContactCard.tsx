import "./contact.css";
import { ReactNode } from "react";

type PropTypes = {
    title: string;
    subtitle: string;
    icon: ReactNode;
};

const ContactCard = (props: PropTypes) => {
    return (
        <div className="contactCard" onClick={() => navigator.clipboard.writeText(props.subtitle)}>
            {props.icon}
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </div>
    );
};

export default ContactCard;
