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
            <p className={content ? 'content activate' : 'content'}>Finishing Flatiron's Software Enigneering Bootcamp, I am excited and ready to begin my career in the field. 
                Though I have little experience, I believe all of my projects establish the base of my knowledge of website 
                creation. I am always learning, as one needs to do with Software Engineering, and love to face challenges that 
                need to be worked through. I am currently freelancing website assistance, but would love to field emails of a 
                position open for Junior - Mid-Level positions. Thank you!</p>
        </div>
    )
}

export default About;