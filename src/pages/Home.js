import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import hackerImage from "../assets/image-hacker.png";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const navigate = useNavigate();

  const handleStartChallenge = () => {
    navigate("/challenge-landing");
  };

  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    color: "#000000",
    fontFamily: "monospace",
    position: "relative",
    overflow: "hidden",
  };

  const headerStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    fontSize: "20px",
  };

  const pixelArtStyle = {
    position: "absolute",
    fontSize: "20px",
    color: "#000000",
    userSelect: "none",
  };

 
  const buttonStyle = {
    backgroundColor: "#ffffff",
    color: "#000080",
    border: "2px solid #000080",
    padding: "10px 20px",
    fontSize: "16px",
    fontFamily: "monospace",
    transition: "all 0.3s",
  };

  return (
    <Container fluid style={containerStyle}>
      <div style={headerStyle}>
      <TypeAnimation
              sequence={[
                '> INITIALIZING MISSION...',
                1000,
                '> INITIALIZING MISSION...\n> LOADING ASSETS...',
                1000,
                '> INITIALIZING MISSION...\n> LOADING ASSETS...\n> READY.',
                1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={1}
              style={{ whiteSpace: 'pre-line' }}
            />
      </div>

      <Row className="justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Col xs={12} className="text-center">
          <img src={hackerImage} alt="Hacker" className="img-fluid mb-4" style={{ maxWidth: "300px" }} />
          <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>Code Red: Your Digital Espionage Mission Awaits</h1>
          <p style={{ fontSize: "18px", marginBottom: "30px" }}>Prove your hacking skills in this ultimate cyber challenge!</p>
          <Button
        variant="outline-primary"
        size="lg"
        onClick={handleStartChallenge}
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#000080";
          e.target.style.color = "#ffffff";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#ffffff";
          e.target.style.color = "#000080";
        }}
          >
            &gt;_Start Challenge
          </Button>
        </Col>
      </Row>

      {/* Pixel art decorations */}
      <div style={{...pixelArtStyle, top: '10%', left: '5%'}}>▓▓▓<br />█▓▓<br />███</div>
      <div style={{...pixelArtStyle, top: '20%', right: '10%'}}>▓▓▓<br />███</div>
      <div style={{...pixelArtStyle, bottom: '15%', left: '15%'}}>███<br />▓▓▓</div>
      <div style={{...pixelArtStyle, bottom: '25%', right: '20%', color: '#ffff00'}}>▀▀▀<br />▀▀▀</div>
    </Container>
  );
};

export default Home;
