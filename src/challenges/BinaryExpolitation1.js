import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import challengeData from '../challengeData';
import ChallengeInterface from '../components/ChallengeInterface';
import { Card, Container} from 'react-bootstrap';

const BufferOverflowChallenge = () => {

    const challenge = challengeData.binaryExploitation.find(c => c.id === 'bin1');

    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Call backend vulnerable program
        try {
        const response = await fetch('http://localhost:5000/exploit', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input: userInput }),
        });
        
        const data = await response.json();
        setResult(data.message);
        } catch (error) {
        console.error('Error:', error);
        }
    };

    const challengeContent = (<Container className="my-5">
        <Card className="shadow">
            <Card.Header as="h2" className="text-center bg-primary text-white">
                Buffer Overflow Challenge
            </Card.Header>
            <Card.Body>
                <Card.Text className="text-center mb-4">
                    Can you overflow the buffer and reveal the hidden flag?
                </Card.Text>

                <Form onSubmit={handleSubmit} className="mt-4">
                    <Form.Group className="mb-3" controlId="decryptedMessage">
                        <Form.Label>Enter your input:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type your decrypted message here"
                        />
                    </Form.Group>
                    <div className="d-grid">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>

                {result && (
                    <Alert variant="secondary" className="mt-4 text-center">
                        {result}
                    </Alert>
                )}
            </Card.Body>
        </Card>
    </Container>)

  return challenge ? (
        <ChallengeInterface challenge={challenge}>
            {challengeContent}
        </ChallengeInterface>
    ) : (
        <div>Challenge not found</div>
    );
};

export default BufferOverflowChallenge;
