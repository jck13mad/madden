import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-link'
import './Navbar.scss'

function Navbar() {

    const [ navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 65) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)
    console.log(window.scrollY)

    return(
        <div className={navbar ? 'navbar active' : 'navbar'} id="navbar">
            <h1>JM</h1>
            <nav>
                <ul className="navbar-list">
                    <li>
                        <a href="#about">About 668</a>
                    </li>
                    <li>
                        <a href="#projects">Projects 1169</a>
                    </li>
                    <li>
                        <a href="#blogs">Blogs 1670</a>
                    </li>
                    <li>
                        <a href="#contact">Contact 1904</a>
                    </li>
                    <li>
                        <a href="">Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;