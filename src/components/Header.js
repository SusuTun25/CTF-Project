import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">Capture The Flag</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/challenge-landing" exact>
                Home
              </Nav.Link>
              <NavDropdown title="Challenge Categories" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/web-exploitation">
                  Web Exploitation
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/cryptography">
                  Cryptography
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/network-security">
                  Network Security
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/reverse-engineering">
                  Reverse Engineering
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/binary-exploitation">
                  Binary Exploitation
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
