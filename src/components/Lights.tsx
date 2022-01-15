import { useEffect } from "react";
import getRandomInt from "../getRandomInt";


function Lights() {
    useEffect(() => {
        let timeout = setTimeout(interval, 5000);
        function interval() {
            const lights = document.querySelectorAll<HTMLElement>(".lights");
            const light = lights[getRandomInt(0, lights.length)];

            if(light.classList.contains("lights_hidden")) {
                light.style.left = getRandomInt(10, 90) +"%"; 
                light.style.top = getRandomInt(10, 90) +"%";
            }

            light.classList.toggle("lights_hidden");
            timeout = setTimeout(interval, 3000 + 2000*Math.random());
        };
        return () => {
            clearTimeout(timeout);
        }
    }); 
    return(
        <>
            <div className="lights lights_hidden" />
            <div className="lights lights_hidden" />
            <div className="lights lights_hidden" />
            <div className="lights lights_hidden" />
            <div className="lights lights_hidden" />
            <div className="lights lights_hidden" />
        </>
    );
}

export default Lights;