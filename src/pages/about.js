import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import TypeInformation from "../components/TypeInformation";


const CODING_GUY = require('../assets/440-ai.svg').default;

export default function About(props){

    return (
      <section>
        <Container fluid className="about-section">
          {/* <Particle /> */}
          <Container>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
              >
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                  Know Who <strong className="white">I'M</strong>
                </h1>
                {/* <Aboutcard /> */}
              </Col>
              <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
              >
                <img src={CODING_GUY} alt="about" className="img-fluid" />
              </Col>
            </Row>
            <h1 className="project-heading">
              Professional <strong className="white">Skillset </strong>
            </h1>

            {/* <Techstack /> */}

            <h1 className="project-heading">
              <strong className="white">Tools</strong> I use
            </h1>
            {/* <Toolstack /> */}

            {/* <Github /> */}
          </Container>
        </Container>
      </section>
    )
}