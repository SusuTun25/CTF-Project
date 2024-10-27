import React from 'react';
import { Card, Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ScoreCard from './ScoreCard'

const ChallengeInterface = ({ challenge, children }) => {
  const navigate = useNavigate();

  if (!challenge) {
    return <div>Challenge not found</div>;
  }


  const goBackToMainPage = () => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/\/view$/, '');
    navigate(newPath);
  };

  return (
    <Container className="my-5">
      <ScoreCard />
      <Card className="shadow-sm">
        <Card.Header as="h2" className="bg-primary text-white">
          {challenge.title}
        </Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <Badge bg="info">Difficulty: {challenge.difficulty}</Badge>
            </Col>
            <Col className="text-end">
              <Badge bg="success">Points: {challenge.points}</Badge>
            </Col>
          </Row>
          <Card.Text>{challenge.description}</Card.Text>
          <div className="challenge-content mt-4 mb-4">
            {children}
          </div>
          <Button variant="secondary" className='me-2' onClick={goBackToMainPage}>
            Go Back To Flag Page      
          </Button>

        </Card.Body>
      </Card>
    </Container>
  );
};

export default ChallengeInterface;