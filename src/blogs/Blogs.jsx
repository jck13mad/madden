import React, { useState } from 'react';
import './Blogs.scss';

function Blogs() {

    let [currentSlide, setCurrentSlide] = useState(1)

    const data = [
        {
            id: 1,
            icon: "./writing.png",
            title: "Flatiron JS Project: Hidden Eats",
            desc: "Building Hidden Eats.",
            img: "./blog-1.jpg",
            link: "https://jck13mad.blogspot.com/2021/04/flatiron-javascript-project-hidden-eats.html"
        },
        {
            id: 2,
            icon: "./writing.png",
            title: "Flatiron Rails Project: Photo-Synthesis",
            desc: "Building Photo-Synthesis.",
            img: "./blog-2.png",
            link: "https://jck13mad.blogspot.com/2021/02/flatiron-rails-project-photo-synthesis.html"
        },
        {
            id: 3,
            icon: "./writing.png",
            title: "Why Software Engineering",
            desc: "How I chose this profession.",
            img: "./blog-3.jpg",
            link: "https://jck13mad.blogspot.com/2020/03/software-engineering-and-how.html"
        }
    ]

    const handleClick = (way) => {
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : currentSlide = data.length-1 ) : 
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide+1 : 0)
        }

    return (
            <div className="blogs" id="blogs">
                <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                    {data.map((d) => (
                        <div className="contain">
                            <div className="item">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="blog-title">
                                            <h3>Blog</h3>
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
                {currentSlide < data.length-1 ? 
                    (
                        <img src="./arrow.png" className="arrow right" alt="" onClick={() => handleClick()}/>
                    ) : null
                }
            </div>
    )
}

export default Blogs;