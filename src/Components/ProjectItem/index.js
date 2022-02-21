import React from "react";
import { useHistory } from "react-router-dom";
import { Col, Row } from "../Grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "./style.css";

/*
	<div class="item">
        <img class="project-thumb float-left shadow" src="assets/images/Recipe-Gram.png" alt="" />
        <span class="project-title">Recipe-Gram</span>
        <span class="project-tagline">Group project to develop a full stack web app that can be used to view, post, and store recipes.</span>
        <ul class="list-unstyled project-links">
            <li class="github"><i class="fab fa-github"></i><a href="https://github.com/drewml08/Recipe-Gram" target="_blank">Repository</a></li>
            <li class="website"><i class="fas fa-globe"></i><a href="https://github.com/mliemann/Recipe-Gram/blob/main/README.md" target="_blank">Website</a></li>
        </ul>
    </div>
*/
function ProjectItem(props) {
	const items = props.items;
	const listItems = items.map((item) =>
		<Row>
		 	<Col size="md-12">
		 		<div className="item">
		 		<img className="project-thumb shadow" src={item.image} alt="" />
					<h4>{item.title}</h4>
					<span className="project-tagline">{item.description}</span>
					<ul className="list-unstyled project-links">
			            <li className="github"><FontAwesomeIcon icon={faGithub} color="rgb(0, 124, 237)"/><a href={item.repoURL} target="_blank">Repository</a></li>
			            <li className="website"><FontAwesomeIcon icon={faGlobe} color="rgb(0, 124, 237)"/><a href={item.webURL} target="_blank">Website</a></li>
			        </ul>
		        </div>
			</Col>
		</Row>
	);

	return (
		<div className="projects-section">{listItems}</div>
	);
}

export default ProjectItem;