import { init } from 'ityped';
import { useEffect, useRef, useState } from 'react';
import "./Intro.scss";

function Intro(){
    const textRef = useRef();
    const [ image, setImage] = useState(false)
    const [ name, setName ] = useState(false)
    // const [ text, setText ] = useState(false)

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Web Developer", "Software Engineer", "Full Stack Expertise", "All around nice guy"]
        })
    }, []);

    const changeImage = () => {
        console.log(window.innerWidth)
        if (window.innerWidth <= 1265) {
            setImage(true);
        } else {
            setImage(false);
        }
    }

    const changeName = () => {
        console.log(window.innerWidth)
        if (window.innerWidth <= 800) {
            setName(true);
        } else {
            setName(false);
        }
    }

    window.addEventListener('resize', changeImage)
    window.addEventListener('resize', changeName)
    

    return (
        <div className="intro" id="intro">
            <div className={name ? 'name activate' : 'name'}>
                <h1>Jack</h1>
                <h1>Madden</h1>
            </div>
            <div className="incoming animation sequence fadeInBottom">
                <h2>
                    <span ref={textRef}></span>
                </h2>
            </div>

            <div className='image'>
                <img className={image ? 'oldComputer animation sequence fadeInBottom active' : 'oldComputer animation sequence fadeInBottom'} src='./oldComputer.png' alt="old computer"></img>
            </div>
        </div>
    )
}

export default Intro;