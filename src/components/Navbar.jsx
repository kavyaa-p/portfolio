import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const scrollToProjects = (e) => {
        e.preventDefault(); // Prevent default link behavior
        const section = document.getElementById("projects");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <div className='navBar'>
            <div className='navLogo'>
                <p>Kavya Pabbaraju</p>
            </div>
            <div className='navLinks'>
                <Link to="/">home</Link>
                <Link to="#projects" onClick={scrollTo}>work</Link>
                <Link to="/about">about</Link>
                <Link to="https://drive.google.com/file/d/1HnxS2fhVc79XSHiB-DylOR7ZA4MFGDsv/view?usp=sharing">resume</Link>
            </div>
        </div>
    );
};

export default Navbar;