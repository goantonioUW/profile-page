import React from "react";
import udemyBootcampCert from '../images/udemyBootcampCert.jpg';
import udemyEs6Cert from '../images/udemyEs6Cert.jpg';
import uwCert from '../images/uwCert2.jpg';

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>Technical Skills</h2>
            <p> <span className="experience-titles">Languages: </span>Node.js, Express, JavaScript, jQuery, React.js, React Native, GIT, Github, MongoDB
            <br />
            <span className="experience-titles">Applications: </span>MySQL, Firebase, HTML, CSS, Bootstrap, Media Queries, APIs, JSON, REST, AJAX</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>06/09/2021</h2>
            <h5> Accelerated ES6 JavaScript Training </h5>
            <img className="experience-images" src={udemyEs6Cert} alt="Udemy Cert" />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>05/28/2021</h2>
            <h5> The Complete 2021 Web Development Bootcamp</h5>
            <img className="experience-images" src={udemyBootcampCert} alt="Udemy Cert" />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>03/29/2021</h2>
            <h5>University of Washington Full Stack Web Development Bootcamp</h5>
            <img className="experience-images" src={uwCert} alt="Udemy Cert" />
          </div>
        </div>
       {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>2018 - 2020</h2>
            <h3>Assistant Manager Womens Designer Shoes</h3>
            <h5>Nordstrom, Bellevue, Wa</h5>
            <ul>
              <li>Trained and mentored new employees to achieve daily performance objectives.</li>
              <li>Greeted and assisted all customers daily in high-traffic retailer.</li>
              <li>Coached new team members on job tasks, performance strategies, and how to cross-sell.</li>
              <li>Boosted sales volume by coordinating and setting up events for major retailers</li>
              <li>Communicated and coordinated with multiple departments to achieve top results.</li>
            </ul>
          </div>
        </div>
       {/* - */}
       <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>2018 - 2019</h2>
            <h3>Account Manager</h3>
            <h5>Wyndham Destinations, Redmond, Wa</h5>
            <ul>
              <li>Conducted one-on-one sales presentations and resort property tours to interested parties.</li>
              <li>Generated sales by prospecting leads, cold calling and negotiating advantageous deals.</li>
              <li>Identified customer needs to deliver relevant product solutions and promotions to exceed target budgets.</li>
              <li>Supported owner requests with pricing, property descriptions, room locations and portfolio information.</li>
              <li>Attended professional training classes and assessments for continuous improvement.</li>
            </ul>
          </div>
        </div>
       {/* - */}
       <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>2014 - 2017</h2>
            <h3>Security Specialist</h3>
            <h5>Security Industry Specialists, Seattle, Wa</h5>
            <ul>
              <li>Monitored security cameras and fire, building and alarm systems.</li>
              <li>Maintained safety by quickly responding to alarms and investigating disturbances.</li>
              <li>Checked footage and live feeds from surveillance cameras to monitor for trespassers.
                  and criminal activity.</li>
              <li>Protected company assets against theft or damage by conducting frequent building
                  and grounds patrols.</li>
              <li>Completed required shift logs and reports, highlighting routine activities, suspicious
                  circumstances and critical incidents.</li>
            </ul>
          </div>
        </div>
       {/* - */}
       <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>2014 - Current</h2>
            <h3>Coach/ Trainer/ Gym Manager</h3>
            <h5>Friends of Hoop Seattle, Bellevue, Wa</h5>
            <ul>
              <li>Developed player abilities with well-structured and rigorous practice program.</li>
              <li>Maximized athlete performance by overseeing targeted physical conditioning
                  programs.</li>
              <li>Prepared athletes for games with well-coordinated schedule of practices and
                  individual training.</li>
              <li>Created out-of-season training camps to keep player skills at peak levels and introduce
                  new members to team.</li>
              <li>Managed high volume gyms (1000+ people).</li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Experience;