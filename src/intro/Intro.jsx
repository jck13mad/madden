import { init } from 'ityped';
import { useEffect, useRef, useState } from 'react';
import "./Intro.scss";

function Intro(){
    const textRef = useRef();
    const [ image, setImage] = useState(false)

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Web Developer", "Software Engineer", "Full Stack Expertise", "All around nice guy"]
        })
    }, []);

    const changeBackground = () => {
        console.log(window.scrollX)
        if (window.scrollX >= 65) {
            setImage(true);
        } else {
            setImage(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <div className="intro" id="intro">
            <div className="name">
                <h1>John</h1>
                <h1>Madden</h1>
                <h2>{window.addEventListener('scroll', console.log(window.scrollX))}</h2>
            </div>
            <div className="incoming animation sequence fadeInBottom">
                <h2>
                    <span ref={textRef}></span>
                </h2>
            </div>

            <div className={image ? 'image active' : 'image'}>
                <img className="oldComputer animation sequence fadeInBottom" src='../oldComputer.png' alt="old computer"></img>
            </div>
        </div>
    )
}

export default Intro;