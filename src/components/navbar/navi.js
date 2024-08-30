import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import logo from "./img/SideWalk.png"
import './navi.css'

function Navi() {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="text-white">
        <Container>
          <Navbar.Brand href="/" id="navlogo">
          <img
              src={logo}
              alt="Home"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/display">Display data</Nav.Link>
              <Nav.Link href="/navla">NavigateLA</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navi;
