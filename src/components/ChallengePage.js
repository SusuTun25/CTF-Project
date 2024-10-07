import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Button, Modal, Alert, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ChallengePage = ({ challenge }) => {
  const [showHintModal, setShowHintModal] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [flagInput, setFlagInput] = useState('');
  const [flagSubmissionResult, setFlagSubmissionResult] = useState(null);
  const [points, setPoints] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize points and hint status when the component mounts or challenge changes
    const initializeChallenge = () => {
      const storedPoints = localStorage.getItem(`challenge_${challenge.id}_points`);
      const storedHintUsed = localStorage.getItem(`challenge_${challenge.id}_hint_used`);
      
      if (storedPoints !== null) {
        setPoints(parseInt(storedPoints, 10));
      } else {
        setPoints(challenge.points);
      }

      if (storedHintUsed === 'true') {
        setShowHint(true);
      }
    };

    initializeChallenge();
  }, [challenge.id, challenge.points]);

  useEffect(() => {
    // Save points to localStorage whenever it changes
    if (points !== null) {
      localStorage.setItem(`challenge_${challenge.id}_points`, points.toString());
    }
  }, [challenge.id, points]);

  if (!challenge) {
    return <div>Challenge not found</div>;
  }

  const handleHintRequest = () => {
    setShowHintModal(true);
  };

  const confirmHint = () => {
    setShowHint(true);
    setShowHintModal(false);
    // Deduct 20 points for hint, allowing negative points
    setPoints(prevPoints => prevPoints - 20);
    localStorage.setItem(`challenge_${challenge.id}_hint_used`, 'true');
  };

  const handleFlagSubmit = (e) => {
    e.preventDefault();
    if (flagInput.trim() === challenge.flag) {  // Case-sensitive comparison
      setFlagSubmissionResult({
        success: true,
        message: 'Congratulations! You\'ve captured the flag!'
      });
      // Set points to challenge points minus 20 if hint was used, but don't go below 0
      setPoints(Math.max(0, challenge.points - (showHint ? 20 : 0)));
    } else {
      setFlagSubmissionResult({
        success: false,
        message: 'Incorrect flag. Try again! Remember, the flag is case-sensitive.'
      });
    }
    setFlagInput(''); // Clear input after submission
  };

  const goToChallengeSubPage = () => {
    navigate(`${window.location.pathname}/view`);
  };

  return (
    <Container className="py-5">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{challenge.title}</Card.Title>
          <Card.Text>{challenge.description}</Card.Text>
          <Card.Text>
            <strong>Difficulty:</strong> {challenge.difficulty}
          </Card.Text>
          <Card.Text>
            <strong>Total Points:</strong> {challenge.points}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Form onSubmit={handleFlagSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Enter Flag (case-sensitive):</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="CTF{...}" 
                value={flagInput}
                onChange={(e) => setFlagInput(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Flag
            </Button>
          </Form>
          {flagSubmissionResult && (
            <Alert variant={flagSubmissionResult.success ? 'success' : 'danger'} className="mt-3">
              {flagSubmissionResult.message}
            </Alert>
          )}
        </Card.Body>
      </Card>

      <Row className="mb-3">
        <Col>
          <Button variant="success" onClick={goToChallengeSubPage} className="w-100">
            Launch Challenge Interface
          </Button>
        </Col>
        <Col>
          <Button 
            variant="secondary" 
            onClick={handleHintRequest} 
            className="w-100" 
            disabled={showHint}
          >
            {showHint ? 'Hint Used' : 'Get Hint (-20 points)'}
          </Button>
        </Col>
      </Row>

      <Alert variant="light" className="text-center">
        <strong>Current Points:</strong> {points !== null ? points : 'Loading...'}
      </Alert>

      {showHint && (
        <Card className="mt-3">
          <Card.Body>
            <Card.Title>Hint</Card.Title>
            <Card.Text>{challenge.hint}</Card.Text>
          </Card.Body>
        </Card>
      )}

      <Modal show={showHintModal} onHide={() => setShowHintModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Hint Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to view the hint? This will deduct 20 points from your score, even if it results in a negative score.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowHintModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmHint}>
            View Hint
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ChallengePage;