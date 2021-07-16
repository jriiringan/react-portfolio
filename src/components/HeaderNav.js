import React, {useState} from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

export default function(props){
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
  
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
  
    window.addEventListener("scroll", scrollHandler);
    return(
        <Navbar 
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
            bg="dark" 
            variant="dark">
            <Container>
                <Navbar.Brand as={Link}
                        to="/#">@jooomsthegreat</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav>
                    <Nav.Link 
                        as={Link}
                        to="/#">Home</Nav.Link>
                    <Nav.Link 
                        href="#career">Career</Nav.Link>
                    <Nav.Link 
                        as={Link}
                        to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}