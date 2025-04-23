import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import MeshGradientBackground from '../components/MeshGradientBackground';
import ProjectCard from '../components/ProjectCard';
import './Home.css';
import NavButton from '../components/NavButton';

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#projects") {
            const section = document.getElementById("projects");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
        else if (location.hash === "#home") {
            const section = document.getElementById("home");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <div className="home-container">
            <div className="home" id='home'>
                <MeshGradientBackground />
                <h1>Kavya Pabbaraju</h1>
                <p> <span style={{ marginRight: '5px' }}>A</span>
                    <TypeAnimation
                        sequence={[
                            'developer',
                            1000,
                            '',
                            500
                        ]}
                        wrapper="span"
                        speed={200}
                        style={{ fontSize: '1.375rem', display: 'inline-block' }}
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
                            I’m currently a senior at the University of California, Irvine, studying Software Engineering, and I’m set to graduate in Fall 2025.
                        </p>
                        <p>
                            My passion for technology comes from a desire to make a positive impact on those around me. Over time, I’ve explored various areas of development,
                            from frontend and backend to UX/UI design, and I’m currently diving into AI to build intelligent applications.
                        </p>
                        <p>
                            This constant curiosity and drive for learning push me to experiment with new technologies and apply them to projects that create meaningful change.
                        </p>
                    </div>
                    <NavButton to="/about">Learn More</NavButton>
                </div>
            </div>

            <div className="projects-container" id='projects'>
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
                        imgURL={'./images/ai-detail-study.png'}
                        buttonName={'Private Github Repository'}
                    />

                    <ProjectCard
                        projectTitle={'ScholarBot'}
                        tools={'Python • FastAPI • React • OpenAI API • ChromaDB • NLP'}
                        projectDescription={'ScholarBot is a RAG-based AI system designed to extract information from research papers and answer context-driven questions. \
                            Built with Python, FastAPI, React, and ChromaDB, it leverages NLP techniques for efficient semantic search and retrieval. The system \
                            integrates OpenAI’s gpt-4o-mini model to generate precise, context-aware responses while utilizing LangChain to enhance document chunking \
                            and retrieval accuracy for optimized performance.'}
                        imgURL={'https://via.placeholder.com/300'}
                        githubURL={'https://github.com/kavyaa-p/ScholarBot'}
                        buttonName={'Github Repository'}
                    />

                    <ProjectCard
                        projectTitle={'PetrDrops'}
                        tools={'ReactJS • JavaScript • Bootstrap • Supabase'}
                        projectDescription={'PetrDrops is a social platform for UCI students to track and share mascot sticker drops. Built with React and Supabase, \
                            it includes secure login, real-time updates, and features like comments, upvotes, and filters. Users can upload images or share links, \
                            all within a clean, responsive design.  Currently paused, the project remains a work in progress with room for further polishing and enhancements.'}
                        imgURL={'https://via.placeholder.com/300'}
                        githubURL={'https://github.com/kavyaa-p/PetrDrops'}
                        buttonName={'Github Repository'}
                    />

                    {/* <ProjectCard
                        projectTitle={'Reddit Redesign'}
                        projectDescription={'Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description'}
                        imgURL={'/images/kavya.png'}
                        buttonName={'Case Study'}
                    />

                    <ProjectCard
                        projectTitle={'Pantry Pal'}
                        projectDescription={'Pantry Pal is a meal-planning platform designed to help users organize their meals, discover personalized recipes \
                            based on the ingredients they have on hand, and create customized shopping lists. PantryPal aims to simplify meal prep and grocery \
                            management, offering a flexible, intuitive solution for home cooks.'}
                        imgURL={'/images/kavya.png'}
                        buttonName={'Case Study'}
                    />

                    <ProjectCard
                        projectTitle={'Lumina'}
                        projectDescription={'Lumina, which means "brilliant light", is a platform that allows users to share their stories anonymously in the \
                            form of storybooks, find others with shared experiences, and learn more about people from other parts of the world through their \
                            published storybooks. Lumina intends to provide a safe space for people to share their experiences and encourage creativity and \
                            intellectual curiosity.'}
                        imgURL={'/images/kavya.png'}
                        buttonName={'Case Study'}
                    />

                    <ProjectCard
                        projectTitle={'WebReg Redesign'}
                        projectDescription={'Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description\
                                    Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description'}
                        imgURL={'/images/kavya.png'}
                        buttonName={'Case Study'}
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default Home;