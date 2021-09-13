import React, { useState } from 'react';
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

    return(
        <div className={navbar ? 'navbar active' : 'navbar'} id="navbar">
            <h1>JM</h1>
            <nav>
                <ul className="navbar-list">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#blogs">Blogs</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="../JohnMaddenResume.pdf" download>Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;