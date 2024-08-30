import React from "react";
import { Row, Table, Col, Button } from "react-bootstrap";
import { useState, useRef } from "react";
import extractCSVData from "../utils/CsvExtractor";
import MapContainer from "./mapContainer";
import { motion } from "framer-motion";
import * as Icons from "react-bootstrap-icons";
import "./display.css";
import { createSW } from "../utils/database";

const accountName = "swbotblob";
const sas ="enter sas key here";

const containerName = "csulaswproject";
const imgPath = "2023-2024-data/images_3_29";

const url = `https://${accountName}.blob.core.windows.net/${containerName}/${imgPath}`;
const Display = (props) => {
  const [data, setData] = useState([]);
  const [selectedIndex, setIndex] = useState(0);
  const [isDisabled, setButtonDisabled] = useState(false);

  const fileInput = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      extractCSVData(file)
        .then((data) => {
          console.log(data);
          setData(data); // Set the extracted data in your component's state
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      alert("Please select a file to upload.");
    }
  };

  const selectRowHandler = (index) => {
    setIndex(index);
  };

  const databaseUploadHandler = () => {
    data.forEach((element) => {
      if (element.length > 1) {
        uploadToDatabase(element);
      }
    });
    setButtonDisabled(true);
  };

  const uploadToDatabase = (data) => {
    const obj = {
      SectionID: data[0],
      x_slope: parseFloat(data[3]),
      y_slope: parseFloat(data[4]),
      h_displacement: 0.0,
      v_displacement: 0.0,
      compliance: true,
      lat: parseFloat(data[1]),
      lon: -parseFloat(data[2]),
    };
    try {
      createSW(obj);
    } catch (error) {
      console.log(error, "database upload failed");
    }
  };

  const handleButtonClick = () => {
    // Trigger the hidden file input click event
    fileInput.current.click();
  };

  const initialRender = (
    <>
      <div align="center" style={{ height: "100vh" }}>
        <div className="no-scroll border border-5 border-dark">
          <div>
            <Icons.BagDash className="bagIcon" />
            <p>No file yet..</p>
          </div>
          <motion.div className="box m-auto" whileHover={{ scale: 1.2 }}>
            <Button onClick={handleButtonClick}>Upload CSV</Button>
            <input
              type="file"
              accept=".csv"
              ref={fileInput}
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
          </motion.div>
        </div>
        <br />
        <div class="how-display icon-box rounded-3 about-box">
          <div class="homeicon">
            <div class="i">
              <Icons.FiletypeCsv className="abouticon" />
            </div>
          </div>
          <h4>Only CSV files</h4>
          <p style={{ fontSize: "17px" }}>
            Upload a .csv file that was collected from the rover, which contain
            Section ID, measurements, images, and GPS coordinates.
            <br />
            <br />
            Our web application parses the uploaded files and generates
            visualizations of the sidewalk data.
          </p>
        </div>
      </div>
    </>
  );

  const renderMeasurements = (
    <div class="mx-5">
      <div align="center">
        <motion.div className="box m-auto" whileHover={{ scale: 1.2 }}>
          <Button onClick={handleButtonClick}>Upload CSV</Button>
          <input
            type="file"
            accept=".csv"
            ref={fileInput}
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
        </motion.div>
        {/*
        <motion.div className="box m-auto" whileHover={{ scale: 1.2 }}>
          <Button
            variant="secondary"
            onClick={databaseUploadHandler}
            disabled={isDisabled}
          >
            Upload to Database
          </Button>
        </motion.div>
         */}
      </div>
      <Row className="mb-3">
        <Col md={6}>
          <div class="tableContainer border border-5 border-dark">
            <Table hover striped variant="dark" className="dataTable">
              <thead>
                <tr>
                  <th>Row #</th>
                  <th>Section ID</th>
                  <th>X-slope</th>
                  <th>Y-slope</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.length > 1 &&
                  data.map((row, index) =>
                    row[0] ? (
                      <tr
                        key={index}
                        className={selectedIndex === index ? "selected" : ""}
                        onClick={() => selectRowHandler(index)}
                      >
                        <td>{index}</td>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                        <td>{row[3]}</td>
                        <td>{row[4]}</td>
                        <td>{row[5]}</td>
                      </tr>
                    ) : (
                      <div></div>
                    )
                  )}
              </tbody>
            </Table>
          </div>
        </Col>
        <Col md={6}>
          {data && data.length > 0 && (
            <div className="visuals border border-5 border-dark">
              <MapContainer sidewalkData={data} currentIndex={selectedIndex} selectPoint={selectRowHandler}/>
              <img
                src={`${url}/${data[selectedIndex][5]}?${sas}`}
                alt="Image"
                class="imgViewer img-fluid"
              />
            </div>
          )}
        </Col>
      </Row>

      <div>
        {/*data.map((row, index) => (
        <img
          key={index}
          src={row.Image_URL} // Assuming your CSV has an Image_URL column
          alt={`Section ${row.Section_ID}`}
          onClick={() => handleImageClick(row.Image_URL)}
          style={{ cursor: "pointer", margin: "10px" }}
        />
      ))*/}
      </div>
      {/* {selectedImage && (
      <div>
        <img
          src={selectedImage}
          alt="Selected"
          style={{ maxWidth: "100%" }}
        />
      </div>
    )} */}
    </div>
  );

  return (
    <div>
      <h1 align="center" class="my-5">
        DISPLAY SIDEWALK DATA
      </h1>
      {data.length > 0 ? renderMeasurements : initialRender}
    </div>
  );
};

export default Display;
