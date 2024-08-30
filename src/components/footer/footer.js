import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Sidewalk Data Visualization. All
          rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
