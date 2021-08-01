import React from "react";
import udemyBootcampCert from '../images/udemyBootcampCert.jpg';
import udemyEs6Cert from '../images/udemyEs6Cert.jpg';


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
            <p> Accelerated ES6 JavaScript Training</p>
            <img className="experience-images" src={udemyEs6Cert} alt="Udemy Cert" />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>05/28/2021</h2>
            <p> The Complete 2021 Web Development Bootcamp</p>
            <img className="experience-images" src={udemyBootcampCert} alt="Udemy Cert" />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h2>03/29/2021</h2>
            <p> Full Stack Web Development Bootcamp</p>
            <img className="experience-images" src={udemyBootcampCert} alt="Udemy Cert" />
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


      </div>
    </div>
  )
}

export default Experience;