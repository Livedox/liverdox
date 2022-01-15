import "../css/lantern.css";

interface Props{
    className: string;
}

function Lantern({className}:Props) {
    return(
        <div className={"lantern "+className}>
            <div className="lantern__rope" />
            <div className="lantern__light" />
            <svg className="lantern__svg" version="1.1" x="0px" y="0px" viewBox="0 0 56 57" strokeMiterlimit="10" stroke="#000">
                <polygon strokeWidth="5" fill="none" strokeMiterlimit="10" points="40.5,54.5 28,54.5 15.5,54.5 9,18.5 28.5,18.5 47,18.5 "/>
                <path strokeMiterlimit="10" d="M1.1,16.9l9.5-16c0.1-0.2,0.4-0.4,0.6-0.4h34.8c0.3,0,0.5,0.2,0.7,0.4l8,15.2c0.6,1.1-0.2,2.4-1.5,2.4L1.7,18
                    C1.2,18,0.8,17.4,1.1,16.9z"/>
                <line strokeWidth="2" x1="28" y1="-61" x2="28" y2="0"/>
                <line strokeWidth="3" x1="28" y1="18.5" x2="28" y2="54.5"/>
                <line strokeWidth="3" x1="43.8" y1="36.5" x2="12.2" y2="36.5"/>
            </svg>
        </div>
    );
}

export default Lantern;