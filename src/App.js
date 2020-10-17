import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "reactstrap";
import "./App.css";

const EASYCOUNT = localStorage.getItem("easycount")
  ? JSON.parse(localStorage.getItem("easycount"))
  : 0;
const MEDIUMCOUNT = localStorage.getItem("mediumcount")
  ? JSON.parse(localStorage.getItem("mediumcount"))
  : 0;
const HARDCOUNT = localStorage.getItem("hardcount")
  ? JSON.parse(localStorage.getItem("hardcount"))
  : 0;

function App() {
  const [easyCount, setEasyCount] = useState(EASYCOUNT);
  const [mediumCount, setMediumCount] = useState(MEDIUMCOUNT);
  const [hardCount, setHardCount] = useState(HARDCOUNT);
  const [totalQuestions, setTotalQuestions] = useState(
    EASYCOUNT + MEDIUMCOUNT + HARDCOUNT
  );
  const [totalPoints, setTotalPoints] = useState(
    EASYCOUNT + 2 * MEDIUMCOUNT + 3 * HARDCOUNT
  );
  useEffect(() => {
    localStorage.setItem("easycount", easyCount);
  }, [easyCount]);

  useEffect(() => {
    localStorage.setItem("mediumcount", mediumCount);
  }, [mediumCount]);

  useEffect(() => {
    localStorage.setItem("hardcount", hardCount);
  }, [hardCount]);
  useEffect(() => {
    setTotalPoints(easyCount + 2 * mediumCount + 3 * hardCount);
    setTotalQuestions(easyCount + mediumCount + hardCount);
  }, [easyCount, mediumCount, hardCount]);
  const handleClear = () => {
    setMediumCount(0);
    setHardCount(0);
    setEasyCount(0);
    setTotalQuestions(0);
    setTotalPoints(0);
  };

  return (
    <Container fluid className="App">
      <Row className="main-container d-flex justify-content-center align-items-center pl-5" >
        <Button
          className="easyButton"
          onClick={() => setEasyCount(easyCount + 1)}
        >
          +Easy
        </Button>

        <Col className="count">{easyCount}</Col>
      </Row>
      <Row className="main-container d-flex justify-content-center align-items-center pl-5">
        <Button
          className="mediumButton"
          onClick={() => setMediumCount(mediumCount + 1)}
        >
          +Medium
        </Button>
        <Col className="count">{mediumCount}</Col>
      </Row>
      <Row className="main-container d-flex justify-content-center align-items-center pl-5">
        <Button
          className="hardButton"
          onClick={() => setHardCount(hardCount + 1)}
        >
          +Hard
        </Button>
        <Col className="count">{hardCount}</Col>
      </Row >
      <Row className="main-container d-flex justify-content-left align-items-center pl-5">
        <Col className="points">{totalPoints}</Col>
      {/* </Row>
      <Row className="main-container d-flex justify-content-center align-items-center pl-5"> */}
        <Col className="t-count">{totalQuestions}</Col>
      </Row>
      <Row className="button-container d-flex justify-content-between pl-5">
        <Button classname="clear-button" onClick={handleClear}>Clear</Button>
      </Row>
    </Container>
  );
}

export default App;
