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
        <div className="intro">
            <h5>Hello, I'm</h5>
            <h1>John Madden</h1>
        </div>
    )
}

export default Intro;