import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import "./Intro.scss";

function Intro(){
    const textRef = useRef();

    // useEffect(() => {
    //     init(textRef.current, {
    //         showCursor: true,
    //         backDelay: 1500,
    //         backSpeed: 60,
    //         strings: ["Developer", "Full Stack Engineer"]
    //     })
    // }, []);

    return (
        <div className="intro" id="intro">
            <div className="name">
                <h1>John</h1>
                <h1>Madden</h1>
            </div>
            <div className="paragraph animation sequence fadeInBottom">
                <p>No, not that John Madden...</p>
            </div>

            <div className="image">
                <img className="oldComputer animation sequence fadeInBottom" src="../../oldComputer.png"></img>
            </div>
        </div>
    )
}

export default Intro;