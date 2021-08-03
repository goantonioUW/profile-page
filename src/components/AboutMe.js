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
                    <p class="card-text"> My name is Antonio Gonzalez. I was born and raised in Seattle. One of my favorite things is basketball and played through college. I still play today in a Men’s league and coach 4th grade to high school AAU basketball. 
                    </p>
                    <p class="card-text">
                    Before Covid, I worked for Nordstrom as an Asst. Manager for Women’s Designer Shoes, where I really enjoyed managing projects and leading a team for our dept. Unfortunately, I was let go when the pandemic started.
                    </p>
                    <p class="card-text">
                    This really gave me the time to think about what I wanted to do for my career. It brought me back to when I first took a coding class in the 8th grade and I remembered how much I enjoyed it. After doing some research into the field, I found the UW full-Stack Bootcamp and decided it was the perfect time for a career change and to learn something new. After six long months, I am proud to say that I am a FULL-STACK Developer.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
