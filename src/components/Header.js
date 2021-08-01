import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Full-Stack Web Developer</h1>
                    <Typed 
                        className="typed-text"
                        strings={[
                        "Welcome To My Profile!",
                        "Web Design",
                        "Web Development",
                        "UX/UI Design"]}
                        typeSpeed={60}
                        backSpeed={65}
                        loop
                    />
            </div>
        </div>
    )
}

export default Header
