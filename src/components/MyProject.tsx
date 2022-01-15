import { useEffect } from "react";
import "../css/page.css";
import disable from "../disable";
import Lamp from "./Lamp";
import Plant from "./Plant";

function MyProject() {
    useEffect(() => {
        disable(".my-project", ".about-me");
    });
    return(
        <div className="my-project">
            <Lamp />
            <div className="my-project__line my-project__line1"/>
            <div className="my-project__line my-project__line2"/>
            <div className="my-project__line my-project__line3"/>
            <div className="my-project__main-page">
                <div className="page">
                    <Plant className="page__plant_left" />
                    <Plant className="page__plant_right" />
                    <h2 className="page__title">Последний Проект</h2>
                    <div className="page__paint-container">
                        <div className="page__paint">
                            <div className="page__img-container">
                                <a className="page__img-link" href="https://chemistry-assistant.ru" target="_blank">
                                    <img className="page__img" src="./project.png" alt="" /> 
                                </a>
                            </div>
                        </div>
                        <h4 className="page__paint-title">Chemistry Assistant</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProject;