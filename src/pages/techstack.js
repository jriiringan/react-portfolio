import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiPhp, SiApache } from "react-icons/si";

export default function TechStack(props) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={3} className="tech-icons">
            <DiReact />
        </Col>
        <Col xs={4} md={3} className="tech-icons">
            <DiJavascript1 />
        </Col>
        <Col xs={4} md={3} className="tech-icons">
            <DiNodejs />
        </Col>
        <Col xs={4} md={3} className="tech-icons">
            <SiPhp />
        </Col>
        <Col xs={4} md={3} className="tech-icons">
            <DiPython />
        </Col>
        <Col xs={4} md={3} className="tech-icons">
            <SiApache />
        </Col>
    </Row>
  );
}
