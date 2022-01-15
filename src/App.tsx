import "./css/index.css";
import "./css/lights.css";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import MyProject from "./components/MyProject";
import Lights from "./components/Lights";
import { Helmet } from "react-helmet";


function App() {
    return (
        <>
        <Helmet>
            <title>Liverdox - сайт портфолио!</title>
        </Helmet>
        <div className="main">
            <Intro />
            <Lights />
            <AboutMe />
            <MyProject />
            <Contact />
        </div>
        </>  
    );
}

export default App;
