import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icons from "react-bootstrap-icons";
import headerImg from "./img/cityLA2.jpg";
import RoverModal from "./roverModal";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = (props) => {
  const [roverModal, setRoverModal] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home-page">
      <header
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h1
          style={{ textAlign: "center" }}
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
          Sidewalk Data Visualization
        </h1>
      </header>
      <main className="pb-5 border border-5 border-dark">
        <Container>
          {/*Description */}
          <Row className="mt-5">
            <Col
              md={{ span: 6, offset: 3 }}
              className="text-center mission-section"
              style={{
                color: "#ffffff",
                backgroundColor: "#343a40",
                padding: "20px",
                borderRadius: "5px",
              }}
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1000"
            >
              <section class="overview">
                <h2>Overview</h2>
                <p style={{ fontStyle: "italic" }}>
                  The City of Los Angeles oversees an
                  extensive sidewalk infrastructure encompassing more than
                  11,000 miles. When segments of these sidewalks experience
                  irregular settling or upheaval caused by tree-root growth,
                  they can present safety hazards for pedestrians. Federal ADA
                  standards dictate permissible slopes for sidewalks, and the
                  City of L.A. must adhere to these standards. Adhering to these
                  standards is imperative to ensure accessibility and safety for
                  all.
                </p>
              </section>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={6}>
              <Card
                className="aboutlink mb-3"
                style={{ textDecoration: "none", fontSize: "16px" }}
                data-aos="zoom-in-left"
                data-aos-duration="1000"
              >
                <div class="icon-box rounded-3 about-box">
                  <div class="homeicon">
                    <div class="i">
                      <Icons.FilePersonFill className="abouticon" />
                    </div>
                  </div>
                  <h4>About us</h4>
                  <p style={{ fontSize: "17px" }}>
                    We are dedicated to providing a platform where users can
                    upload sidewalk data and visualize it in an interactive way.
                    <br />
                    <br />
                    The collection of sidewalk data is facilitated by the
                    cutting edge-technology of the Ubiquity Magni Rover.
                  </p>
                  <Button onClick={() => setRoverModal(true)}>
                    View Rover
                  </Button>
                </div>
              </Card>
              <Card
                className="aboutlink mb-3"
                style={{ textDecoration: "none", fontSize: "16px" }}
                data-aos="zoom-in-left"
                data-aos-duration="1000"
              >
                <div class="icon-box rounded-3 about-box">
                  <div class="homeicon">
                    <div class="i">
                      <Icons.GearFill className="abouticon" />
                    </div>
                  </div>
                  <h4>How it Works</h4>
                  <p style={{ fontSize: "17px" }}>
                    Users can upload their sidewalk data files, which contain
                    Section ID, measurements, images, and GPS coordinates.
                    <br />
                    <br />
                    Our web application parses the uploaded files and generates
                    visualizations of the sidewalk data.
                  </p>
                </div>
              </Card>
            </Col>
            <Col md={6}>
              <Card
                className="aboutlink mb-3"
                style={{ textDecoration: "none", fontSize: "16px" }}
                data-aos="zoom-in-right"
                data-aos-duration="1000"
              >
                <div class="icon-box rounded-3 about-box">
                  <div class="homeicon">
                    <div class="i">
                      <Icons.PersonWalking className="abouticon" />
                    </div>
                  </div>
                  <h4>Get Started</h4>
                  <p style={{ fontSize: "17px" }}>
                    Ready to visualize your sidewalk data? Get started now!
                  </p>
                  <Link to="/display">
                    <Button variant="primary">Upload Data</Button>
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <RoverModal show={roverModal} onHide={() => setRoverModal(false)} />
      </main>
    </div>
  );
};

export default Home;
