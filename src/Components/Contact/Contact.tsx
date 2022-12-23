import { MdEmail, MdPhone } from "react-icons/md";
import styled from "styled-components";
import "./contact.css";
import ContactCard from "./ContactCard";

const Contact = () => {
    return (
        <section>
            <h1>Contact</h1>
            <div className="contacts">
                <ContactCard title="Email me" subtitle="francolkk788@gmail.com" icon={<MdEmail size={60} />} />
                <ContactCard title="Call me" subtitle="+54 9 3446 66-7820" icon={<MdPhone size={60} />} />
            </div>
        </section>
    );
};

export default Contact;
