import React, { useState } from 'react';
import './About.scss';

function About() {

    const [ content, setContent] = useState(false)
    const [size, setSize ] = useState(false)

    const changeContent = () => {
        // console.log(window.innerWidth)
        if (window.innerWidth <= 1258) {
            setContent(true);
        } else {
            setContent(false);
        }
    }

    const changeSize = () => {
        if (window.innerWidth <= 1258 && window.innerWidth >= 566) {
            setSize(true);
        } else {
            setSize(false);
        }
    }

    window.addEventListener('resize', changeContent)
    window.addEventListener('resize', changeSize)
    console.log(window.innerWidth)

    return (
        <div className={size ? 'about active' : 'about'} id="about">
            <h1 className="about-title">About</h1>
            <p className={content ? 'content activate' : 'content'}>Hard-working and fun-loving recent Flatiron School graduate, 
            looking to grow and achieve a junior web developer role. Thanks and feel free to connect with me!</p>
        </div>
    )
}

export default About;