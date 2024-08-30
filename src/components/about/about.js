import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "./img/sidewalk.jpeg";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="about-page">
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
          About
        </h1>
      </header>
      <main className="pb-5 border border-5 border-dark">
        <Container>
          <Row className="mt-5">
            <Col
              md={{ span: 8, offset: 2 }}
              className="text-left mission-section"
              style={{
                color: "#ffffff",
                backgroundColor: "#343a40",
                padding: "20px",
                borderRadius: "5px",
                textAlign: "left",
              }}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <section className="overview">
                <h2 style={{ textAlign: "center" }}>Why is this Project Being Developed?</h2>
                <p style={{ fontStyle: "italic" }}>
                  The City of Los Angeles is responsible
                  for the upkeep of a vast network of more than 11,000 miles of
                  sidewalks. Uneven settling or elevation caused by tree-root
                  growth can result in uneven surfaces, posing potential
                  pedestrian hazards. The City of LA must uphold Federal ADA
                  standards, which prescribe limitations on sidewalk slopes,
                  ensuring compliance with the safety and accessibility of
                  pedestrians.
                </p>
              </section>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col
              md={{ span: 8, offset: 2 }}
              className="text-left mission-section"
              style={{
                color: "#ffffff",
                backgroundColor: "#343a40",
                padding: "20px",
                borderRadius: "5px",
                textAlign: "left",
              }}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <section className="overview">
                <h2 style={{ textAlign: "center" }}>The Importance of Usable and Accessible Sidewalks</h2>
                <p style={{ fontStyle: "italic" }}>
                  Sidewalks, like all capital assets, degrade over time and
                  require maintenance to extend their useful life. Through age,
                  ground settlement, or other natural processes, sidewalks can
                  become cracked, broken, shifted, or uplifted. The root
                  systems of City trees, construction, and other external
                  factors can also damage sidewalks. Whatever the cause,
                  sidewalk defects can and do become a dangerous hazard if left
                  unaddressed. The City is often held responsible for injuries
                  caused by sidewalk defects. Injured parties who can prove
                  that the City was negligent or had sufficient notice of a
                  dangerous condition on a property in the City's control may
                  receive compensation for their injuries.
                </p>
              </section>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col
              md={{ span: 8, offset: 2 }}
              className="text-left mission-section"
              style={{
                color: "#ffffff",
                backgroundColor: "#343a40",
                padding: "20px",
                borderRadius: "5px",
                textAlign: "left",
              }}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <section className="overview">
                <h2 style={{ textAlign: "center" }}>2023-2024 Student Goals</h2>
                <p style={{ fontStyle: "italic" }}>
                  This is the sixth term of a multi-year project. In the last
                  term, a rover has been successfully fabricated. Now, the
                  rover is capable of 1) moving with remote control, 2)
                  measuring crossing slopes and running slopes, 3) collecting
                  GPS data, and 4) taking photo images. In this term, we will
                  develop a module to measure vertical and horizontal
                  displacement by partnering with the Mechanical Department. In
                  addition, we will continue developing various software by
                  focusing on the following tasks:
                </p>
                <ol>
                  <li>
                    Work with ME Department to implement a module to collect
                    vertical and horizontal displacement.
                    <ul>
                      <li>
                        Students shall implement a module to collect
                        horizontal/vertical displacement on the sidewalk by
                        equipping the rover with distance-measuring components.
                      </li>
                      <li>
                        Students shall develop a program to identify the severity
                        of vertical and horizontal displacement from the sensor
                        data.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Perform field tests and verify calibration of slope
                    measurement on the current data collection process.
                    <ul>
                      <li>
                        Students shall perform extensive field tests to assess
                        the system for field deployment preparation.
                      </li>
                      <li>
                        Students shall work with East Los Angeles College (ELAC)
                        Civil Engineering Department to verify the correct
                        procedure for collecting slope measurements in the
                        current data collection process.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Integrate the front-end and back-end systems with Ubiquity
                    Magni Rover.
                    <ul>
                      <li>
                        Students shall integrate the existing front-end system
                        providing a graphical user interface and integration
                        with NavigateLA, and the existing back-end system with
                        Ubiquity Magni Rover.
                      </li>
                    </ul>
                  </li>
                </ol>
              </section>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default About;
