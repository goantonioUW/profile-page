import React from 'react';

function Footer() {
    return (
        <>
            <div id="contact" className="footer">
                <div className="container">
                    <h3 className="contact-text"> Contact Me </h3>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex">
                                <a href="mailto:goantonio31@outlook.com">Email</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex">
                                <a href="https://www.linkedin.com/in/antonio-gonzalez-34a0771b0/" target="_blank" rel="noreferrer">LinkedIn </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex">
                                <a href="https://github.com/goantonioUW" target="_blank" rel="noreferrer">Github </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex">
                                <a href="tel:2066836781">Cell Phone</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
