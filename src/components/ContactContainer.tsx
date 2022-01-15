import { useEffect } from "react";
import BirdsCage from "./BirdsCage";
import Table from "./Table";

function ContactContainer() {
    useEffect(() => {
        setInterval(() => {
            document.querySelector(".table__github-svg")!
                .classList.add("table__github-svg_animated");
            
            setTimeout(() => {
                document.querySelector(".birds-cage")!
                    .classList.add("birds-cage_animated");
            }, 350);

            setTimeout(() => {
                document.querySelector(".table__github-svg")!
                    .classList.remove("table__github-svg_animated");
                document.querySelector(".birds-cage")!
                    .classList.remove("birds-cage_animated");
            }, 5000);
        }, 50000);
    });
    return(
        <div className="contact__container">
            <Table />
            <BirdsCage />
        </div>
    );
}

export default ContactContainer;