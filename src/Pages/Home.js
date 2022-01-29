import React from "react";
import { Col, Row, Container } from "../Components/Grid";

const Home = () => {
  return (
      <Container fluid>
        
        <Row id="About">
            <Col size="md-12">
              <h3>
                About Me
              </h3>
              <p>Lorem Ipsum somethin somethin</p>
            </Col>
        </Row>    
        <Row id="Resume">
            <Col size="md-12">
              <h3>
                Resume
              </h3>
              <p>Lorem Ipsum somethin somethin</p>
            </Col>
        </Row>   
        <Row id="Portfolio">
            <Col size="md-12">
              <h3>
                Portfolio
              </h3>
              <p>Lorem Ipsum somethin somethin</p>
            </Col>
        </Row>   
        <Row id="Contact">
            <Col size="md-12">
              <h3>
                Contact
              </h3>
              <p>Lorem Ipsum somethin somethin</p>
            </Col>
        </Row>  
        
      </Container>
  );
};

export default Home;