import React from 'react';

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="d-flex">
                                <p>Email</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="d-flex">
                                <p>linkedIn </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="d-flex">
                                <p>Github </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-6">
                            <div className="row">
                                <div className="col">
                                    <a className="footer-nav">Home</a>
                                    <br />
                                    <a className="footer-nav">About Me</a>
                                    <br />
                                    <a className="footer-nav">Projects</a>
                                </div>
                                <div className="col">
                                    <a className="footer-nav">Experience</a>
                                    <br />
                                    <a className="footer-nav">Contact Me</a>
                                    <br />
                                    <a className="footer-nav">Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
