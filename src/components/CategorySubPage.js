import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CategorySubPage = ({ title, description, imageSrc, content, buttons }) => {
  const navigate = useNavigate();

  return (
    <Container fluid className="py-5">
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
                <Card.Title className="display-4">{title}</Card.Title>
                {description && <Card.Text className="lead">{description}</Card.Text>}
                {content}
                {buttons && (
                  <div className="mt-4">
                    {buttons.map((button, index) => (
                      <Button
                        key={index}
                        variant={button.variant || "primary"}
                        size="lg"
                        className="mx-2"
                        onClick={() => navigate(button.path)}
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