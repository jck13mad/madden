import React, { useState } from 'react';
import './Blogs.scss';
import { blogs } from '../data';

function Blogs() {

    let [currentSlide, setCurrentSlide] = useState(0)

    const handleClick = (way) => {
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : currentSlide = blogs.length-1 ) : 
        setCurrentSlide(currentSlide < blogs.length - 1 ? currentSlide+1 : 0)
        }

    return (
            <div className="blogs" id="blogs">
                <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                    {blogs.map((d) => (
                        <div className="contain">
                            <div className="item">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="blog-title">
                                            <h3>Blog {d.id}</h3>
                                        </div>
                                        <div className="imgContainer">
                                            <img src={d.icon} alt="" />
                                        </div>
                                        <h2>{d.title}</h2>
                                        <p>{d.desc}</p>
                                        <a href={d.link}>View this blog.</a>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src={d.img} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {currentSlide > 0 ? 
                    (
                        <img src="./arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
                    ) : null
                }
                {currentSlide < blogs.length-1 ? 
                    (
                        <img src="./arrow.png" className="arrow right" alt="" onClick={() => handleClick()}/>
                    ) : null
                }
            </div>
    )
}

export default Blogs;