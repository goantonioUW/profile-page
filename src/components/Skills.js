import React from 'react';
// Fontawesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <div id="skills" className="skills-wrapper">
            <div className="container">
                <FontAwesomeIcon className="skills-icons" icon={faReact} />
            </div>
        </div>
    )
}

export default Skills
