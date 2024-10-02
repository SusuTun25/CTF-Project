import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';

const categories = [
  { name: "Web Exploitation", progress: 60, color: "success", path: "/web-exploitation" },
  { name: "Cryptography", progress: 40, color: "info", path: "/cryptography" },
  { name: "Network Security", progress: 80, color: "warning", path: "/network-security" },
  { name: "Reverse Engineering", progress: 20, color: "danger", path: "/reverse-engineering" },
  { name: "Binary Exploitation", progress: 100, color: "primary", path: "/binary-exploitation" },
];

const ChallengeLanding = () => {
  return (
    <Container className="py-5 position-relative" fluid style={{ minHeight: "100vh" }}>
      {/* Static Score Display */}
      <Card 
        className="position-absolute top-0 end-0 m-3" 
        style={{ width: '120px', zIndex: 1000 }}
      >
        <Card.Body className="text-center">
          <Card.Title>Score</Card.Title>
          <Card.Text className="h3">1000</Card.Text>
        </Card.Body>
      </Card>

      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="text-center mb-5">Progress So Far</h1>
          {categories.map((category, index) => (
            <div key={index} className="mb-4">
              <h5 className="mb-2">
                <Link 
                  to={category.path} 
                  className="text-decoration-none text-dark category-link"
                  style={{
                    transition: 'color 0.3s ease, transform 0.3s ease',
                    display: 'inline-block'
                  }}
                >
                  {category.name}
                </Link>
              </h5>
              <ProgressBar
                now={category.progress}
                label={`${category.progress}%`}
                variant={category.color}
                style={{ height: '25px' }}
              />
            </div>
          ))}
        </Col>
      </Row>
      <style>
        {`
          .category-link:hover {
            color: #007bff !important;
            transform: translateX(5px);
          }
        `}
      </style>
    </Container>
  );
};

export default ChallengeLanding;