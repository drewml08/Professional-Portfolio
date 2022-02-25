import React from "react";
import { Col, Row, Container } from "../Components/Grid";
import Projects from "../Components/Projects";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub, faHtml5 } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
    return (
        <Container fluid>
            <Row id="About">
                <Col size="md-12">
                    <h1>About Me</h1>
                    <p>
                        {" "}
                        Hello, I'm Mike. I am an aspiring software developer
                        that has lived in Charlotte for 8 years. I am
                        enthusiastic about learning CSS, javascript, Python,
                        among other languages! I enjoy working out, playing the
                        guitar, reading, and spending time in the outdoors and
                        nature.
                    </p>
                </Col>
            </Row>
            <Row id="Resume">
                <Col size="md-12">
                    <h1>Resume</h1>
                    <Row>
                        <Col size="md-5">
                            <h3 className="pt-3">Experience</h3>
                            <div className="item">
                                <div className="meta">
                                    <div className="upper-row">
                                        <h5 className="job-title">
                                            Meat Cutter, Buyer
                                        </h5>
                                        <div className="time">
                                            2011 - Present
                                        </div>
                                    </div>
                                    <h6>
                                        Whole Foods Market
                                    </h6>
                                </div>
                                <div className="details">
                                    <p>
                                        Assist in training and supervising new
                                        employees, buying finished product for
                                        sale in store, cutting meat and
                                        maintaining fresh cases, greeting and
                                        serving customers, receiving and
                                        processing product shipments, purchase
                                        supplies in software system, efficiently
                                        manage inventory and minimize shrink,
                                        neatly organize and stock shelves,
                                        accurately price and label products,
                                        learn and comply with health/sanitation
                                        standards, accurately complete various
                                        temperature, sanitation, and grind logs.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="meta">
                                    <div className="upper-row">
                                        <h5 className="job-title">
                                            Physical Therapy Technician
                                        </h5>
                                        <div className="time">2010 - 2011</div>
                                    </div>
                                    <h6>
                                        Advanced Center for Physical Therapy
                                    </h6>
                                </div>
                                <div className="details">
                                    <p>
                                        Work as a physical therapy tech,
                                        assisting physical therapists in
                                        operations of the clinic, helping
                                        patients work through their exercise
                                        programs, administer heat and cold
                                        therapy as well as electro stimulation
                                        and ultrasound.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col size="md-2">
                            
                        </Col>
                        <Col size="md-5">
                            <div className="education-container container-block">
                                <h3 className="pt-3">Education</h3>
                                <div className="item">
                                    <h5 className="degree">Coding Boot Camp</h5>
                                    <h6 className="meta">
                                        University of North Carolina
                                        <br />
                                        Charlotte, NC
                                    </h6>
                                    <div className="time">2021</div>
                                </div>
                                <div className="item">
                                    <h5 className="degree">
                                        Bachelor of Business Administration
                                    </h5>
                                    <h6 className="meta">
                                        James Madison University
                                        <br />
                                        Harrisonburg, VA
                                    </h6>
                                    <div className="time">2005 - 2008</div>
                                </div>
                                <div className="item">
                                    <h5 className="degree">
                                        Associate in Science of Business
                                        Administration
                                    </h5>
                                    <h6 className="meta">
                                        Piedmont Virginia Community College
                                        <br />
                                        Charlottesville, VA
                                    </h6>
                                    <div className="time">2002 - 2004</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row id="Portfolio">
                <Projects />
               
            </Row>
            <Row id="Contact">
                <Col size="md-12">
                    <h1>Contact</h1>
                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} color="rgb(0, 124, 237)"/>
                            <a href="mailto:drewml08@gmail.com">
                                drewml08@gmail.com
                            </a>
                        </li>
                        <li className="ps-5">
                            <FontAwesomeIcon icon={faPhone} color="rgb(0, 124, 237)"/>
                            <a href="tel:704-763-4485">704-763-4485</a>
                        </li>
                        <li className="ps-5">
                            <FontAwesomeIcon icon={faLinkedinIn} color="rgb(0, 124, 237)"/>
                            <a
                                href="https://www.linkedin.com/in/michael-drew-a2896271/"
                                target="_blank"
                            >
                                linkedin.com/in/michael-drew-a2896271/
                            </a>
                        </li>
                        <li className="ps-5">
                            <FontAwesomeIcon icon={faGithub} color="rgb(0, 124, 237)"/>
                            <a
                                href="https://github.com/drewml08"
                                target="_blank"
                            >
                                github.com/drewml08
                            </a>
                        </li>
                        <li className="ps-5">
                            <FontAwesomeIcon icon={faFilePdf} color="rgb(0, 124, 237)"/>
                            <Link
                                to="/files/resume.pdf"
                                target="_blank"
                                download="Mike_Drew_Resume.pdf"
                            >
                                PDF Resume
                            </Link>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
