import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const categories = [
  { name: "Web Exploitation", path: "/web-exploitation", icon: "fas fa-globe" },
  { name: "Cryptography", path: "/cryptography", icon: "fas fa-lock" },
  { name: "Network Security", path: "/network-security", icon: "fas fa-network-wired" },
  { name: "Reverse Engineering", path: "/reverse-engineering", icon: "fas fa-code" },
  { name: "Binary Exploitation", path: "/binary-exploitation", icon: "fas fa-bug" },
];

const ChallengeLanding = () => {
  return (
    <Container className="py-5 position-relative" fluid style={{ minHeight: "100vh" }}>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <h1 className="text-center mb-5">Capture the Flag Challenges</h1>
          
          <Card className="mb-5 shadow-sm border-light">
            <Card.Body>
              <Card.Title className="text-center">What is Capture the Flag?</Card.Title>
              <Card.Text>
                Capture the Flag (CTF) is a cybersecurity competition that challenges participants to solve a variety of computer security problems. In these contests, individuals or teams engage in tasks that involve reverse engineering, hacking, decrypting, and more, all in a safe and legal environment. 
                <br /><br />
                Participants can hone their skills in areas such as web exploitation, cryptography, and network security, all while competing against others. CTFs not only offer practical experience but also foster a sense of community among cybersecurity enthusiasts. 
              </Card.Text>
            </Card.Body>
          </Card>

          <Row>
            {categories.map((category, index) => (
              <Col xs={12} md={6} lg={4} key={index} className="mb-4">
                <Card className="shadow-sm border-light text-center">
                  <Card.Body>
                    <i className={`${category.icon} fa-2x mb-3`}></i>
                    <Card.Title>
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
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <style>
        {`
          .category-link:hover {
            color: #007bff !important;
            transform: translateY(-5px);
            font-weight: bold;
          }
          .card {
            transition: transform 0.2s ease;
          }
          .card:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </Container>
  );
};

export default ChallengeLanding;
