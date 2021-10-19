import React, { useState } from 'react';
// import { Link } from 'react-router-link'
import './Navbar.scss'

function Navbar() {

    const [ navbar, setNavbar] = useState(false)
    const [list, setList ] = useState(false)

    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 65) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    const changeList = () => {
        if (window.innerWidth <= 800) {
            setList(true);
        } else {
            setList(false)
        }
    }

    window.addEventListener('scroll', changeBackground)
    window.addEventListener('resize', changeList)

    return(
        <div className={navbar ? 'navbar active' : 'navbar'} id="navbar">
            <h1><a href="https://jck13mad.github.io/madden/" className="jm" >JM</a></h1>
            <nav>
                <ul className={list ? 'navbar-list activate' : 'navbar-list'}>
                    <li>
                        <a href="#about">About Me</a>
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
                        <a href="./MaddenJohn(Jack)Resume.pdf" download>Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;