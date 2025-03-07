import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import MeshGradientBackground from '../components/MeshGradientBackground';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="home">
                <MeshGradientBackground />
                <h1>Kavya Pabbaraju</h1>
                <p> <span style={{ marginRight: '5px' }}>A</span>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            ' developer',
                            1000,
                            'designer',
                            1000
                        ]}
                        wrapper="span"
                        speed={200}
                        style={{ fontSize: '22px', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <span style={{ marginLeft: '2px' }}>based in Irvine, CA</span>
                </p>
            </div>

            <div className="about-container">
                <div className='about-img'> 
                    <img src='/images/kavya.png' alt='A portrait picture of Kavya' /> 
                </div>
                <div className='about-description-header'>
                    <div className='about-header'>
                        <h3>WELCOME TO MY WEBSITE</h3>
                        <h1>I'm Kavya! ✨</h1>
                    </div>
                    <div className='about-description'>
                        <p>
                            I’m currently a senior at the University of California, Irvine, studying Software Engineering.
                        </p>
                        <p>
                            Throughout my school years, I loved immersing myself in creative and intellectual activities—performing
                            in singing and dance competitions, crafting origami, and participating in spelling bees, debates, and Olympiad exams.
                        </p>
                        <p>
                            These diverse experiences fueled my creativity and growth, eventually leading me to pursue a degree in Software Engineering
                            and discover my passion for designing and implementing intuitive user experiences and interfaces.
                        </p>
                    </div>
                    <button className='custom-button' onClick={() => navigate('/about')}>Learn More</button>
                </div>
            </div>

            <div className="projects-container">
                <div className='projects-header'>
                    <h3>SELECTED WORK</h3>
                    <h1>Here Are Some Of My Projects 🪷</h1>
                </div>

                <div className='projects-cards'>
                    <ProjectCard
                        projectTitle={'AI Detail Study'}
                        tools={'Python • Django • React • OpenAI Realtime API • WebRTC • AWS'}
                        projectDescription={'An AI-powered, audio-only chatbot designed to simulate patient-provider interactions for research on memory believability.\
                            Built with Django, React, and OpenAI’s Realtime API, it leverages WebRTC for real-time voice communication without traditional \
                            speech-to-text or text-to-speech APIs. This project enables controlled studies on how different ratios of episodic and semantic \
                            memory details influence perceived credibility in simulated medical scenarios.'}
                        imgURL={'https://via.placeholder.com/300'}
                    />

                    <ProjectCard
                        projectTitle={'ScholarBot'}
                        tools={'Python • FastAPI • React • OpenAI GPT-4o API • ChromaDB • NLP'}
                        projectDescription={'ScholarBot is a RAG-based AI system designed to extract information from research papers and answer context-driven questions. \
                            Built with Python, FastAPI, React, and ChromaDB, it leverages NLP techniques for efficient semantic search and retrieval. The system \
                            integrates OpenAI’s GPT-4o-mini model to generate precise, context-aware responses while utilizing LangChain to enhance document chunking \
                            and retrieval accuracy for optimized performance.'}
                        imgURL={'https://via.placeholder.com/300'}
                    />

                    <ProjectCard
                        projectTitle={'PetrDrops'}
                        projectDescription={'PetrDrops is a social platform for UCI students to track and share mascot sticker drops. Built with React and Supabase, \
                            it includes secure login, real-time updates, and features like comments, upvotes, and filters. Users can upload images or share links, \
                            all within a clean, responsive design.  Currently paused, the project remains a work in progress with room for further polishing and enhancements.'}
                        imgURL={'https://via.placeholder.com/300'}
                    />

                    <ProjectCard
                        projectTitle={'Portfolio Website'}
                        projectDescription={'Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description'}
                        imgURL={'https://via.placeholder.com/300'}
                    />

                    <ProjectCard
                        projectTitle={'Reddit Redesign'}
                        projectDescription={'Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description'}
                        imgURL={'https://via.placeholder.com/300'}
                    />

                    <ProjectCard
                        projectTitle={'Pantry Pal'}
                        projectDescription={'Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description'}
                        imgURL={'https://via.placeholder.com/300'}
                    />

                    <ProjectCard
                        projectTitle={'Lumina'}
                        projectDescription={'Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description'}
                        imgURL={'https://via.placeholder.com/300'}
                    />

                    <ProjectCard
                        projectTitle={'WebReg Redesign'}
                        projectDescription={'Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description'}
                        imgURL={'https://via.placeholder.com/300'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;