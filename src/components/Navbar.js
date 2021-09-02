import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="#"><h1>Antonio Gonzalez</h1></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                        <Link smooth={true} to="home" className="nav-link" href="#">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="about" offset={-60} className="nav-link" aria-current="page" href="#">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="projects" offset={-60} className="nav-link" href="#">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="experience" offset={-60} className="nav-link" href="#">Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="skills" offset={-60} className="nav-link" aria-current="page" href="#">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="contact" offset={-60} className="nav-link" href="#">Contact Me</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1v9iZDIqMxv47C8mHScSkbaQbsCwQDXtJeuoDFz46LZY/edit?usp=sharing">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>    
    )
}

export default Navbar;