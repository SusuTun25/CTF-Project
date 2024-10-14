import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import ScoreCard from '../components/ScoreCard';
const categories = [
  { name: "Network Infiltration", path: "/network-security", icon: "fas fa-network-wired" },
  { name: "Crypto Breaker", path: "/cryptography", icon: "fas fa-lock" },
  { name: "Web Exploitation", path: "/web-exploitation", icon: "fas fa-globe" },
  { name: "Code Decipherer", path: "/reverse-engineering", icon: "fas fa-code" },
  { name: "System Hacker", path: "/binary-exploitation", icon: "fas fa-bug" },
];

const ChallengeLanding = () => {
  return (
    <Container className="py-5 position-relative" fluid style={{ minHeight: "100vh" }}>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
        <ScoreCard />
          <h1 className="text-center mb-5">Operation Phantom Purge</h1>
          
          <Card className="mb-5 shadow-sm border-light">
            <Card.Body>
              <Card.Text style={{ fontFamily: 'monospace' }}>
                <TypeAnimation
                  sequence={[
                    `AGENT,

Our organization has been compromised by "The Phantom Collective", a notorious group of cyber criminals. They've infiltrated our systems and stolen classified data, hiding it behind complex security measures.

Your mission is to recover this data by completing a series of challenges. Each challenge represents a different aspect of their defense system that you must overcome.

Time is of the essence. The future of our organization depends on your success.

Good luck, agent. The world is counting on you.`,
                    1000
                  ]}
                  wrapper="div"
                  cursor={true}
                  style={{ whiteSpace: 'pre-line' }}
                />
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