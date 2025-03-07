import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ projectTitle, projectDescription, tools, imgURL }) => {
    return (
        <div className='project'>
            <div className='project-details'>
                <div className='project-heading'>   
                    <h2>{projectTitle}</h2>
                    <h4>{tools}</h4>
                </div>
                <div className='project-description'>
                    <p>{projectDescription}</p>
                </div>              
            </div>
            <div className='project-image'>
                <img src={imgURL} alt={`${projectTitle} Image`} />
            </div>
        </div>
    );
};

export default ProjectCard;