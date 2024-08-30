import React from "react";
import { Modal } from "react-bootstrap";
import roverImg from "./img/MagniRover.jpg";
const RoverModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ubiquity Magni Rover
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Magni is a 100kg payload autonomous mobile robot platform powered by a
          Raspberry Pi 4 running Ubuntu and The Robot Operating System (ROS).
          The rover comes with features like navigation, computation, mobility
          and power that come working out of the box.
        </p>
        <img
          src={roverImg}
          alt="Ubiquity Magni Rover"
          className="rover-image"
        />
      </Modal.Body>
    </Modal>
  );
};

export default RoverModal;
