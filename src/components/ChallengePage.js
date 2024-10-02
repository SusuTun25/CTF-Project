import React, { useState } from 'react';
import { Container, Card, Form, Button, Modal } from 'react-bootstrap';

const ChallengePage = ({ challenge }) => {
  const [showHintModal, setShowHintModal] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [flagInput, setFlagInput] = useState('');

  if (!challenge) {
    return <div>Challenge not found</div>;
  }

  const handleHintRequest = () => {
    setShowHintModal(true);
  };

  const confirmHint = () => {
    setShowHint(true);
    setShowHintModal(false);
  };

  const handleFlagSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted flag:', flagInput);
  };

  return (
    <Container className="py-5">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{challenge.title}</Card.Title>
          <Card.Text>{challenge.description}</Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Form onSubmit={handleFlagSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Enter Flag:</Form.Label>
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
        </Card.Body>
      </Card>

      <Button variant="secondary" onClick={handleHintRequest}>
        Get Hint
      </Button>

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
          Are you sure you want to view the hint? This will deduct points from your score.
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