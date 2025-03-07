import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    const scrollToProjects = (e) => {
        e.preventDefault();
        const section = document.getElementById("projects");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToHome = (e) => {
        e.preventDefault();
        const section = document.getElementById("home");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className='navBar'>
            <div className='navLogo'>
                <p>KP</p>
            </div>
            <div className='navLinks'>
                {location.pathname === "/" ? (
                    <a href="#home" onClick={scrollToHome}>home</a>
                ) : (
                    <Link to="/">home</Link>
                )}
                {location.pathname === "/" ? (
                    <a href="#projects" onClick={scrollToProjects}>work</a>
                ) : (
                    <Link to="/#projects">work</Link>
                )}
                <Link to="/about">about</Link>
                <Link to="https://drive.google.com/file/d/1HnxS2fhVc79XSHiB-DylOR7ZA4MFGDsv/view?usp=sharing">resume</Link>
            </div>
        </div>
    );
};

export default Navbar;