import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const PROFILE_IMAGE = require('../assets/profile.png');

export default function HomeInfo() {
  return (
    <Container fluid className="home-info-section" id="info">
      <Container>
        <Row>
          <Col md={8} className="home-info-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="white"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-info-body">
              I love programming stuff and scrape information from the web
              <br />
              <br />I am knowledgable in programming language like
              <i>
                <b className="white"> Javascript, PHP and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building &nbsp;
              <i>
                <b className="white">Mobile Applications </b> and 
                {' '}
                <b className="white">
                    Web Scraping
                </b>
              </i>
              &nbsp;
              with
              &nbsp;
                <b className="white">
                    React
                </b>
                {' '}
                & {' '}
                <b className="white">
                React Native Framework
                </b>
                
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="my-profile">
            {/* <Tilt> */}
              <img src={PROFILE_IMAGE.default} className="img-fluid" alt="profile" />
            {/* </Tilt> */}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jriiringan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jomari-iringan-b8669b129/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}