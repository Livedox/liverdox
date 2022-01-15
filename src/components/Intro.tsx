import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Planet from "./Planet";
import getRandomInt from "../getRandomInt";

class WaterDrop {
    readonly x:number;
    private y = 0;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    };
    setY(a:number) {
        this.y = a;
    }
    increaseAndGetY(a:number) {
        this.y += a;
        return this.y;
    }
    getY() {
        return this.y;
    }
}

function Intro() {
    console.log(2);
    const canvRef = useRef<HTMLCanvasElement>(null!);
    useEffect(() => {
        let isStop = false;
        let audioTimeout = setTimeout(audio);
        function audio() {
            const rainAudio = new Audio("rain.mp3");
            rainAudio.play();
            audioTimeout = setTimeout(audio, 7600);
        }     

        const canv = canvRef.current;
        const ctx = canv.getContext("2d")!;

        const colors = ["#8e44ad", "#64317a", "#9b59b6", "#6b3a80"];
        const rain:WaterDrop[] = [];
        const SPEED = 9;
        for(let i = 0; i < 80; ++i) {
            rain.push(new WaterDrop(
                getRandomInt(0, canv.width),
                getRandomInt(0, canv.height)
            ));
        }

        let rainAnim = window.requestAnimationFrame(anim);
        function anim() {
            clean();
            colors.forEach((item, i) => {
                render(item, 20*i, 20*(i+1));
            });
            
            function render(color: string, start: number, end: number) {
                ctx.strokeStyle = color;
                ctx.beginPath();
                for(let i = start; i < end; ++i) {
                    if (rain[i].getY() > canv.height) 
                        rain[i].setY(0);
                    ctx.moveTo(rain[i].x, rain[i].increaseAndGetY(SPEED));
                    ctx.lineTo(rain[i].x, rain[i].getY()+40);
                }
                ctx.stroke();
            }
            function clean() {
                //faster than canv.witdth = canv.width and ctx.clearRect(0, 0, max, max);
                for(let i = 0; i < 80; ++i) {
                    //rain[i].x-1 because part of the raindrop is not erased.(maybe bug)
                    ctx.clearRect(rain[i].x-1, rain[i].getY()-SPEED, rain[i].x, rain[i].getY());
                }
            }       
            rainAnim = window.requestAnimationFrame(anim);
        }

        const thunder = new Audio("./thunder.mp3");
        let counter= 0;
        let lightningTimeout = setTimeout(lightningInterval);
        function lightningInterval() {
            const lightning = document.querySelector<HTMLElement>(".introductory-screen__lightning")!;
            const strike = document.querySelector(".introductory-screen__lightning-strike")!;
            if (++counter%2 == 1) {
                lightning.style.left = getRandomInt(0, 90) + "%";
                setTimeout(() => {
                    thunder.play();
                }, 500 + 1000*Math.random());
            }
            if(!isStop) {
                lightning.classList.toggle("introductory-screen__lightning_active");
                strike.classList.toggle("introductory-screen__lightning-strike_active");
            }
            lightningTimeout = setTimeout(lightningInterval, 7000 + 2000*Math.random());
        };

        function stopAnimation() {
            isStop = true;
            window.cancelAnimationFrame(rainAnim);
            document.querySelector(".introductory-screen__rain")!
                .classList.add("display-none");
            document.querySelector(".introductory-screen__container-planet")!
                .classList.add("display-none");
        }

        function runAnimation() {
            isStop = false;
            rainAnim = window.requestAnimationFrame(anim);
            document.querySelector(".introductory-screen__rain")!
                .classList.remove("display-none");
            document.querySelector(".introductory-screen__container-planet")!
                .classList.remove("display-none");
        }

        const about = document.querySelector(".about-me")!;
        const check = ()  => {
            const coords = about.getBoundingClientRect();
            if (coords.top < 1 && !isStop)
                stopAnimation();
            else if (coords.top > 1 && isStop)
                runAnimation();
        }
        window.addEventListener("scroll", check);
        window.addEventListener("resize", check);

        return () => {
            clearTimeout(audioTimeout);
            clearTimeout(lightningTimeout);
            window.cancelAnimationFrame(rainAnim);
        }
    });
    return(
        <div className="introductory-screen">
            <canvas className="introductory-screen__rain" width="1000" height="500" ref={canvRef} />
            <img src="./lightning.svg" className="introductory-screen__lightning" alt="" />
            <div className="introductory-screen__lightning-strike"></div>
            <div className="introductory-screen__container-planet">
                <Canvas>
                    <Planet />
                </Canvas>
            </div>
            
            <div className="introductory-screen__hello-block">
                <div className="introductory-screen__container-hello-block">
                    <h1 className="introductory-screen__title">Liverdox</h1>
                </div>
            </div>
        </div>
    );
}

export default Intro;