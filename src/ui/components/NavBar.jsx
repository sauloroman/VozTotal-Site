import { NavLink, Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
// import Container from "react-bootstrap/Container";
import logo from "../../../assets/img/logo.png";
import "../../css/navbar.css";

export const NavBar = () => {
  return (
    <Navbar fixed="top" expand="lg" bg="light" variant="light">
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="Voz Total Logo" />
        </div>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/Home">
                Inicio
              </Nav.Link>
              <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/nosotros">
                Nosotros
              </Nav.Link>
              <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/clientes">
                Clientes
              </Nav.Link>
              <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/testimonios">
                Testimonios
              </Nav.Link>
              <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/politica">
                Politica de Privacidad
              </Nav.Link>
              <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/contacto">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </header>
    </Navbar>
  );
};
