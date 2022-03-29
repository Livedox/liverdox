import Tree from "./Tree";
import "../css/about-me.css";

function AboutMe() {
    return(
        <div className="about-me">
            <div className="about-me__container">
                <div className="about-me__line about-me__line1" />
                <div className="about-me__line about-me__line2" />
                <div className="about-me__line about-me__line3" />
                <img className="about-me__img" src="logo.svg" alt="logo" />
                <Tree />
                <div className="about-me__inner">
                    <div className="about-me__inf-container">
                        <h2 className="about-me__title">Обо мне</h2>
                        <p className="about-me__text">
                            Занимаюсь разработкой на React, NextJS, TypeScript, Sass.
                            Сейчас увлекаюсь C++ и Rust.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;