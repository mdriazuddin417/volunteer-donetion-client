import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../logos/Group 1329.png";
import CustomLink2 from "../../../CustomLink2/CustomLink2";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="light"
        className="bg-opacity-50"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" className="img-fluid w-50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto fs-5 me-2">
              <Nav.Link
                as={CustomLink2}
                to="/home"
                className="text-black fw-600"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={CustomLink2}
                to="/donation"
                className="text-black fw-600"
              >
                Donation
              </Nav.Link>
              <Nav.Link
                as={CustomLink2}
                to="/events/volunteer"
                className="text-black fw-600"
              >
                Events
              </Nav.Link>
              <Nav.Link
                as={CustomLink2}
                to="/blog"
                className="text-black fw-600"
              >
                Blog
              </Nav.Link>
            </Nav>
            <Nav className=" flex gap-3 justify-content-center align-items-center">
              {user ? (
                <button className="btn btn-dark" onClick={() => signOut(auth)}>
                  SignOut
                </button>
              ) : (
                <Link to="/admin" className="btn btn-dark">
                  Admin
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
