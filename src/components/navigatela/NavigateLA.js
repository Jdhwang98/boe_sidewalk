import React from "react";
import { Row, Table, Col, Button, Container, Dropdown } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Papa from "papaparse";
import { motion } from "framer-motion";
import * as Icons from "react-bootstrap-icons";
import JSZip from "jszip";
import "./NavigateLA.css";

const accountName = "swbotblob";
const sas ="enter sas token here";

const containerName = "csulaswproject";
const blobPaths = [
  "data/2023/09/28/",
  "data/2024/03/08/",
  "data/2023/all/2023.zip",
  "data/2024/all/2024.zip",
  "data/all/combined.zip",
];
const extension = ".csv";
const zipItems = [
  { id: 0, label: "Sept 2023 Itemized" },
  { id: 1, label: "Mar  2024 Itemized" },
  { id: 2, label: "All 2023" },
  { id: 3, label: "All 2024" },
  { id: 4, label: "All" },
];

const NavigateLA = (props) => {
  const [data, setData] = useState([]);
  const [folder, setFolder] = useState("None");
  const [selectedItem, setSelectedItem] = useState(0);
  const [index, setIndex] = useState(1);
  const [blobPath, setBlobPath] = useState(blobPaths[0]);
  const [blobItem, setBlobItem] = useState(
    blobPath.concat("", index.toString()).concat("", extension)
  );
  const [blobUrl, setBlobUrl] = useState(
    `https://${accountName}.blob.core.windows.net/${containerName}/${blobItem}?${sas}`
  );

  // Function to handle fetching remote data (Azure)
  const fetchHandler = () => {
    let blob = blobPath.concat("", index.toString()).concat("", extension);
    setBlobItem(blob);
    let url = `https://${accountName}.blob.core.windows.net/${containerName}/${blob}?${sas}`;

    axios
      .get(url, { responseType: "text" })
      .then((response) => {
        // parse the CSV data...
        Papa.parse(response.data, {
          header: false,
          complete: (result) => {
            // console.log("CSV Data: ", result.data);
            setData(result.data);
          },
          error: (error) => {
            console.log("Error parsing CSV: ", error.message);
          },
        });
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setBlobItem("End of Container...");
          setIndex(1);
        }
        console.error(
          "Error fetching data from Azure Blob Storage:",
          error.message.statusText
        );
      });
    setIndex(index + 1);
  };

  // Function to trigger download of csv data.
  function downloadCSV(data, filename) {
    // Convert data to CSV format
    const csvContent =
      "Section-ID, Lat, Lon, Cross-Slope, Run-Slope\n" +
      data.map((row) => row.slice(0, 5).join(",")).join("\n");

    // Create Blob object
    const blob = new Blob([csvContent], { type: "text/csv" });

    // Create temporary URL
    const url = URL.createObjectURL(blob);

    // Create link element
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;

    // Append link to body and trigger click event
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  // Function to handle download button
  function handleDownloadButtonClick() {
    downloadCSV(data, "upload.csv");
  }

  // Function to handle item selection
  const handleSelect = (itemId) => {
    if (itemId < 2) {
      setBlobPath(blobPaths[itemId]);
      setIndex(1);
      setData([]);
      setFolder(zipItems[itemId].label);
      // console.log("blobPath: ", blobPath);
    } else {
      // setBlobPath(blobPaths[itemId]);
      setIndex(itemId);
      setData([]);
      setFolder(zipItems[itemId].label);
      // fetchAllHandler(itemId); // everytime i select an item it calls on this file right away. dont want that.
    }
    setSelectedItem(itemId);

    // Execute a function based on the selected item's ID
    console.log("Selected item ID:", itemId);
    // Add your logic here to execute a function based on the selected item's ID
  };

  // Function to handle fetching remote zip data (Azure)
  const fetchAllHandler = () => {
    setBlobItem(blobPaths[index]);
    let payLoad = [];
    const zip = new JSZip();

    axios
      .get(
        `https://${accountName}.blob.core.windows.net/${containerName}/${blobPaths[index]}?${sas}`,
        { responseType: "arraybuffer" }
      )
      .then((response) => {
        // Load the zip file
        zip.loadAsync(response.data).then(async (zip) => {
          // Iterate through each file in the zip
          zip.forEach(async (relativePath, file) => {
            // Extract the contents of each file
            const content = await file.async("string");
            // console.log(`File ${relativePath}: ${content}`);
            if (content.length > 0) {
              let split_content = content.split("\n");
              // Iterate through each csv file to parse
              split_content.forEach((csvString) => {
                Papa.parse(csvString, {
                  header: false,
                  complete: (result) => {
                    console.log("CSV Data: ", result.data);
                    const parsedRows = result.data.map((row) =>
                      row.slice(0, 5).join(",")
                    ); // Keep first 5 entries and join by comma
                    payLoad.push(parsedRows);
                  },
                  error: (error) => {
                    console.log("Error parsing CSV: ", error.message);
                  },
                });
              });
            }
          });
          setData(payLoad);
        });
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setBlobItem("End of Container...");
          setIndex(1);
        }
        console.error(
          "Error fetching data from Azure Blob Storage:",
          error.message.statusText
        );
      });
  };

  // Table component for rendering
  const tableContainer = (
    <div>
      <Container fluid="md" className="p-1">
        <Row>
          <Col>
            <div className="table-container">
              <Table striped border={10} hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Section ID</th>
                    <th>Lat</th>
                    <th>Lon</th>
                    <th>X-Slope</th>
                    <th>Y-Slope</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.length > 0 &&
                    data.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td>{rowIndex + 1}</td>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                        <td>{row[3]}</td>
                        <td>{row[4]}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );

  // Button component for rendering
  const buttonContainer = (
    <div>
      <Container fluid className="p-4">
        <Row>
          <Col className="no-scroll border border-5 border-dark" align="center">
            <Icons.FiletypeCsv className="bagIcon" />
            <p>
              {data.length > 0
                ? blobItem
                : "No file yet. Select a folder to begin..."}
            </p>
            <p>Folder Selected: {folder} </p>
            <p align="left">
              <b>Instructions</b>:
              <dl>
                <dt>
                  <b>Step 1.</b> Select Folder
                </dt>
                <dt>
                  <b>Step 2.</b> Click on 'Get Single Csv' button. (click
                  repeatedly to cylce through csv files). &nbsp;
                  <i>
                    If folder selected is any one of the 'All..' folders Click
                    on 'Get All CSV' button (no need for repeated clicks).
                  </i>
                </dt>
                <dt>
                  <b>Step 3.</b>&nbsp;Click on 'Download CSV' button. Browser will download csv file to your computer. 
                </dt>
              </dl>
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm align="center" className="box m-auto">
            <Dropdown onSelect={handleSelect}>
              1.&nbsp;&nbsp;
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select a Folder
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {zipItems.map((item) => (
                  <Dropdown.Item key={item.id} eventKey={item.id}>
                    {item.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          {selectedItem < 2 ? (
            <Col sm align="center">
              <motion.div className="box m-auto" whileHover={{ scale: 1.5 }}>
                2.&nbsp;&nbsp;
                <Button onClick={fetchHandler}>Get Single CSV</Button>
              </motion.div>
            </Col>
          ) : (
            <Col sm align="center">
              <motion.div className="box m-auto" whileHover={{ scale: 1.5 }}>
                2.&nbsp;&nbsp;
                <Button onClick={fetchAllHandler}>Get All CSV</Button>
              </motion.div>
            </Col>
          )}
          <Col sm align="center">
            <motion.div className="box m-auto" whileHover={{ scale: 1.5 }}>
              3.&nbsp;&nbsp;
              <Button onClick={handleDownloadButtonClick}>Download CSV</Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );

  return (
    <>
      <div>
        <h1 align="center">Navigate LA</h1>
        {tableContainer}
        {buttonContainer}
      </div>
    </>
  );
};

export default NavigateLA;
