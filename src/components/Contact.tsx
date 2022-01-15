import { useEffect } from "react";
import "../css/contact.css";
import disable from "../disable";
import ContactContainer from "./ContactContainer";
import Telegram from "./Telegram";

function Contact() {
    useEffect(() => {
        disable(".contact", ".my-project");
    });
    return(
        <div className="contact">
            <h2 className="contact__title">Свяжитесь со мной</h2>
            <ContactContainer />
            <Telegram />
        </div>
    );
}

export default Contact;