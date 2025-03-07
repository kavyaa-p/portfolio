import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavButton.css'; // Import your styles

const NavButton = ({ to, children, newTab = false, className = '' }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (to.startsWith('http')) {
            window.open(to, '_blank', 'noopener,noreferrer');
        } 
        else {
            navigate(to);
        }
    };

    return (
        <button onClick={handleClick} className={`custom-button ${className}`}>
            {children}
        </button>
    );
};

export default NavButton;
