import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import hackerImage from "../assets/image-hacker.png";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const handleStartChallenge = () => {
    navigate("/challenge-landing"); // Navigate to the landing page
  };
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
        <Col className="text-center">
          <img src={hackerImage} alt="Hacker" className="img-fluid mb-4"  style={{ maxWidth: "300px" }}/> {/* Image added here */}
          <h1>Welcome to Capture The Flag</h1>
          <p>Your ultimate quiz challenge awaits!</p>
          <Button variant="primary" size="lg" onClick={handleStartChallenge}>
            Start Challenge
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
