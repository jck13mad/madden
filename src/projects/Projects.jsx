import React, { useEffect, useState } from 'react';
import './Projects.scss';
import ProjectList from '../projectList/ProjectList';
import {
    featuredProjects,
    designProjects
} from '../data'
import { ExternalLink } from 'react-external-link';


function Projects() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "design",
            title: "Design"
        }
    ];

    useEffect(() => {
        switch(selected) {
            case "featured":
                setData(featuredProjects);
                break;
            
            case "design":
                setData(designProjects);
                break;
            default:
                setData(featuredProjects);
        }   
    }, [selected]);

    return (
        <div className="projects" id="projects">
            <h1 className="projects-title">Projects</h1>

            <ul>
                {list.map((item) => (
                <ProjectList
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                />
                ))}
            </ul>
            {/* <Link to="/project" exact> */}
                <div className="container">
                    {data.map((d) => (
                        <ExternalLink href={d.link}>
                            <div className="item">
                                    <img
                                        src={d.img}
                                        alt={d.title}
                                    />
                                    <h3 className="project-name">{d.title}</h3>
                            </div>
                        </ExternalLink>
                    ))}   
                </div>
            {/* </Link> */}
        </div>
    )
}

export default Projects;