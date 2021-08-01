import React from 'react'
import profilePic from '../images/profilePic.png';


function AboutMe() {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap">
                        <img className="profile-pic mb-5" src={profilePic} alt="profilePic..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">A Little About Me!</h1>
                    <p class="card-text"> My name is Antonio Gonzalez. I am a recent graduate of the Full Stack Web Development bootcamp at the Universitry of Washington. My goal is to become a fulltime software engeneer. I was born and raised in Seattle. Growing up I was always interested in computers and technology. 
                    
                    
                    . During my time there I thought about getting into computer science but felt like I was already too far behind and was very discouraged. After college I became one of the managers at Nordstrom for women’s designer shoes. This was fun and I enjoyed managing a team then came COVID. This dramatically changed retail and my position. During Quarantine I had been looking at different jobs and came across the UW full stack course. I figured this is the perfect time for a career change. I want to keep learning more skills so that I can do this fulltime.</p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
