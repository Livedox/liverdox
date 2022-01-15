import "../css/lamp.css";

function Lamp() {
    return(
        <div className="lamp">
            <div className="lamp__container">
                <div className="lamp__rope" />
                <svg className="lamp__svg" x="0px" y="0px" viewBox="0 0 114 51">
                    <path d="M60.5,47l22.6,1.3c1.7,0.1,3.4,0.2,5,0.4l22.2,1.4c2.5,0.2,4.3-2.4,3.3-4.7C108.3,33.2,91.7-0.4,57.1,0h-0.2
                        C22.3-0.4,5.7,33.2,0.4,45.4c-1,2.3,0.8,4.9,3.3,4.7l23.2-1.4c1.7-0.2,3.4-0.3,5-0.4L54.5,47H60.5z"/>
                </svg>
                
            </div>
            <div className="lamp__light" />
            <div className="lamp__light-source" />
        </div>
    );
}

export default Lamp;