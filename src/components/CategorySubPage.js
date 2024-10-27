import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import ScoreCard from "./ScoreCard";

const CategorySubPage = ({ title, description, imageSrc, content, buttons }) => {
  const navigate = useNavigate();
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
    <Container fluid className="py-5">
            <ScoreCard />

      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <div className="d-flex flex-column align-items-center">
            {imageSrc && (
              <img
                src={imageSrc}
                alt={title}
                className="img-fluid mb-4"
                style={{ maxWidth: "300px" }}
              />
            )}
            <Card className="shadow w-100">
              <Card.Body>
                <Card.Title className="display-4" style={{
                    fontFamily: 'monospace',
                  }}>{title}</Card.Title>
                {description && <Card.Text
                  className="lead"
                  style={{
                    fontFamily: 'monospace',
                  }}
                >         
                <TypeAnimation
                    sequence={[description, 1000]}
                    wrapper="div"
                    cursor={true}
                    repeat={1}
                    style={{ whiteSpace: 'pre-line' }}
                  />
                </Card.Text>}
                {content}
                {buttons && (
                  <div className="mt-4">
                    {buttons.map((button, index) => (
                      <Button
                        key={index}
                        variant={button.variant || "primary"}
                        size="lg"
                        className="mx-2"
                        style={buttonStyle}
                        onClick={() => navigate(button.path)}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#000080";
                          e.target.style.color = "#ffffff";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "#ffffff";
                          e.target.style.color = "#000080";
                        }}
                      >
                        {button.text}
                      </Button>
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CategorySubPage;