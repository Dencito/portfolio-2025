import React from 'react';
import { Card, Typography, Tag } from 'antd';

const { Title, Text } = Typography;

import projects  from './Projects.json'


const Projects = () => {
    return (
        <>
            <h2 className="text-3xl font-bold text-center mt-3 text-white">
                Mis <span className="text-pinkAccent">proyectos</span>
            </h2>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 p-5">
                {projects.map((project, index) => (
                    <div className="w-full bg-dark rounded-lg " key={index}>
                        <div className="text-white flex flex-col p-3 rounded-lg shadow-lg overflow-hidden">
                            <img alt={project.title} src={project.img} className="rounded-t-lg h-56 w-full object-cover" />
                            <h4 className="text-lg text-pinkAccent mb-2 mt-3 font-bold">{project.title}</h4>
                            <p className="block mb-2 text-base">{project.description}</p>
                            <div className="flex flex-wrap mt-2">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-pink-500 text-white text-sm font-medium mr-2 mb-2 px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
};

export default Projects;
