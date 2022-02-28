import React from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedinIn,
    faGithub,
    faHtml5,
} from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
    return (
        <div className="banner">
            <div className="content">
                <div className="profile-pic"></div>
                <div className="contact-info">
                    <h1>Mike Drew</h1>
                    <h5>Aspiring Software Developer</h5>
                    <br></br>
                    <br></br>
                    <Container fluid>
                        <Row>
                            <Col size="md-2">
                                <h5 className="opacity-75">Email:</h5>
                            </Col>
                            <Col size="md-8">
                                <a href="mailto:drewml08@gmail.com">
                                    drewml08@gmail.com
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-2">
                                <h5 className="opacity-75">Phone:</h5>
                            </Col>
                            <Col size="md-8">
                                <a href="tel:704-763-4485">704-763-4485</a>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-2">
                                <h5 className="opacity-75">City:</h5>
                            </Col>
                            <Col size="md-8">
                                <p>Charlotte, North Carolina</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-12">
                                <ul className="nav icons">
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/in/michael-drew-a2896271/"
                                            target="_blank"
                                        >
                                            <FontAwesomeIcon
                                                icon={faLinkedinIn}
                                                color="rgb(0, 124, 237)"
                                            />
                                        </a>
                                    </li>
                                    <li className="ps-3">
                                        <a
                                            href="https://github.com/drewml08"
                                            target="_blank"
                                        >
                                            <FontAwesomeIcon
                                                icon={faGithub}
                                                color="rgb(0, 124, 237)"
                                            />
                                        </a>
                                    </li>
                                    <li className="ps-3">
                                        <Link
                                            to="/files/resume.pdf"
                                            target="_blank"
                                            download="Mike_Drew_Resume.pdf"
                                        >
                                            <FontAwesomeIcon
                                                icon={faFilePdf}
                                                color="rgb(0, 124, 237)"
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Banner;
