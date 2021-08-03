import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <>
            <div id="contact" className="footer">
                <div className="container">
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
