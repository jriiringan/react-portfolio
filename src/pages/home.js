import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import TypeInformation from "../components/TypeInformation";
import HomeInfo from "./homeinfo";


const HOME_LOGO = require('../assets/coding.svg').default;

export default function Home(props){

    return (
      <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15, paddingTop: 30 }} className="heading">
                  Hi There! <span className="wave">👋🏻</span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> JOMARI IRINGAN</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <TypeInformation/>
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={HOME_LOGO} alt="home pic" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>
        <HomeInfo/>
      </section>
    )
}