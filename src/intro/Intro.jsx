import { init } from 'ityped';
import { useEffect, useRef, useState } from 'react';
import "./Intro.scss";

function Intro(){
    const textRef = useRef();
    const [ image, setImage] = useState(false)
    const [ name, setName ] = useState(false)
    const [incoming, setIncoming] = useState(false)
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
        window.innerWidth <= 1267 ? setImage(true) : setImage(false);
    }
    const changeName = () => {
        window.innerWidth <= 1267 ? setName(true) : setName(false);
    }
    const changeIncoming = () => {
        window.innerWidth <= 1267 ? setIncoming(true) : setIncoming(false);
    }

    window.addEventListener('resize', changeImage)
    window.addEventListener('resize', changeName)
    window.addEventListener('resize', changeIncoming)
    

    return (
        <div className="intro" id="intro">
            <div className={name ? 'name activate' : 'name'}>
                <h1>Jack</h1>
                <h1>Madden</h1>
            </div>
            <div className={incoming ? 'incoming animation sequence fadeInBottom activating' : 'incoming animation sequence fadeInBottom'}>
                <h2>
                    <span ref={textRef}></span>
                </h2>
            </div>

            {/* <div className='image'> */}
                <img className={image ? 'oldComputer animation sequence fadeInBottom active' : 'oldComputer animation sequence fadeInBottom'} src='./oldComputer.png' alt="old computer"></img>
            </div>
        // {/* </div> */}
    )
}

export default Intro;