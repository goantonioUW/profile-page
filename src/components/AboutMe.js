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
                    <p class="card-text"> My name is Antonio Gonzalez. I am a recent graduate of the Full Stack Web Development bootcamp at the Universitry of Washington. My goal is to become a fulltime software engeneer. I was born and raised in Seattle. Growing up I was always interested in computers and technology. Unfortunatly my high school did not offer any classes that related to programing or computer science. After I graduated and attended Bellevue College I became one of the managers at Nordstrom for women’s designer shoes. This was a very fun experience I enjoyed managing a team and leading projects then came COVID. This dramatically changed retail and my position. During Quarantine I had been looking at different jobs and came across the UW full stack bootcamp. I figured this is the perfect time for a career change. After 6 long months I graduated from the bootcamp and am proud to say that I am a FULL-STACK Developer.</p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
