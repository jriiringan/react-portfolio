import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

export default function AboutCard(props) {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="white">Jomari Iringan </span>
            from <span className="white"> Cavite, Philippines.</span>
            <br />I am a mid
            <br />
            <br />
            Apart from coding, some other activities that I love to do
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Manga & Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Personal Blog
            </li>
            <li className="about-activity">
              <ImPointRight /> Browsing Reddit
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#d88c0e", marginBottom: 5 }}>
            "Pera Money Kwarta sa Utak Puso't Bulsa"{" "}
          </p>
          <footer className="blockquote-footer">Joms</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
