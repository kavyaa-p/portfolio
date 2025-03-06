import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import MeshGradientBackground from '../components/MeshGradientBackground';
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
            <div className="about">
                <h2>About Me</h2>
                <p>I am a software developer based in the Bay Area. I enjoy building web applications and learning new technologies.</p>
                <button onClick={() => navigate('/about')}>About</button>
            </div>
            <div className="projects" id='projects'>
                <h2>My Projects</h2>
                <p>Here are some projects I've worked on:</p>
                <ul>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;