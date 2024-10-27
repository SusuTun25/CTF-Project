import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Button, Modal, Alert, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { updateTotalScore } from '../utils/scoreManager';
import ScoreCard from './ScoreCard';
const ChallengePage = ({ challenge }) => {
  const [showHintModal, setShowHintModal] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [flagInput, setFlagInput] = useState('');
  const [flagSubmissionResult, setFlagSubmissionResult] = useState(null);
  const [isChallengeCompleted, setIsChallengeCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeChallenge = () => {
      const storedHintUsed = localStorage.getItem(`challenge_${challenge.id}_hint_used`);
      const storedCompleted = localStorage.getItem(`challenge_${challenge.id}_completed`);
      
      setShowHint(storedHintUsed === 'true');
      setIsChallengeCompleted(storedCompleted === 'true');
    };

    initializeChallenge();
  }, [challenge.id]);

  if (!challenge) {
    return <div>Challenge not found</div>;
  }

  const handleHintRequest = () => {
    setShowHintModal(true);
  };

  const confirmHint = () => {
    setShowHint(true);
    setShowHintModal(false);
    localStorage.setItem(`challenge_${challenge.id}_hint_used`, 'true');
  };

  const handleFlagSubmit = (e) => {
    e.preventDefault();
    if (flagInput.trim() === challenge.flag && !isChallengeCompleted) {
      const pointsEarned = challenge.points - (showHint ? 20 : 0);
      setFlagSubmissionResult({
        success: true,
        message: `Congratulations! You've captured the flag! You earned ${pointsEarned} points.`
      });
      setIsChallengeCompleted(true);
      localStorage.setItem(`challenge_${challenge.id}_completed`, 'true');
      updateTotalScore(challenge.id, pointsEarned);
    } else if (isChallengeCompleted) {
      setFlagSubmissionResult({
        success: false,
        message: 'You\'ve already completed this challenge!'
      });
    } else {
      setFlagSubmissionResult({
        success: false,
        message: 'Incorrect flag. Try again! Remember, the flag is case-sensitive.'
      });
    }
    setFlagInput('');
  };

  const goToChallengeSubPage = () => {
    navigate(`${window.location.pathname}/view`);
  };

  return (
    <Container className="py-5">
            <ScoreCard />

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{challenge.title}</Card.Title>
          <Card.Text>{challenge.description}</Card.Text>
          <Card.Text>
            <strong>Difficulty:</strong> {challenge.difficulty}
          </Card.Text>
          <Card.Text>
            <strong>Points:</strong> {challenge.points}
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
                disabled={isChallengeCompleted}
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isChallengeCompleted}>
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
            disabled={showHint || isChallengeCompleted}
          >
            {showHint ? 'Hint Used' : 'Get Hint (-20 points)'}
          </Button>
        </Col>
      </Row>

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
          Are you sure you want to view the hint? This will deduct 20 points from your score when you complete the challenge.
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
