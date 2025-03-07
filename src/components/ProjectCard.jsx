import React from 'react';
import NavButton from '../components/NavButton';
import './ProjectCard.css';

const ProjectCard = ({ projectTitle, projectDescription, tools, imgURL, githubURL, buttonName }) => {
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
                <NavButton to={githubURL || "#"}>{buttonName}</NavButton>            
            </div>
            <div className='project-image'>
                <img src={imgURL} alt={`${projectTitle} Image`} />
            </div>
        </div>
    );
};

export default ProjectCard;