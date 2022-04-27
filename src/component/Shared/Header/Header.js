import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../logos/Group 1329.png";
const Header = () => {
  return (
    <div className=" container ">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="transparent"
        variant="light"
        className=""
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" className="img-fluid w-50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto fs-5 me-2">
              <Nav.Link as={Link} to="/home" className="text-black fw-600">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/donation" className="text-black fw-600">
                Donation
              </Nav.Link>
              <Nav.Link as={Link} to="/events" className="text-black fw-600">
                Events
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className="text-black fw-600">
                Blog
              </Nav.Link>
            </Nav>
            <Nav className=" flex gap-3 justify-content-center align-items-center">
              <button className="btn btn-primary">Register</button>
              <button className="btn btn-dark">Admin</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
