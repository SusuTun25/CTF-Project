import React, { useState } from 'react';
import challengeData from '../challengeData';
import ChallengeInterface from '../components/ChallengeInterface';
import { Card, Container} from 'react-bootstrap';
import { Form, Button, Alert } from 'react-bootstrap';

const ReverseEngineeringChallenge1 = () => {

    const challenge = challengeData.reverseEngineering.find(c => c.id === 'rev1');
    
    const encodedString = 'R0FMW3JldmVyc2VDVEYhcmVudG9yF0Bb';
    const correctFlag = 'FLAG{ReverseCTFChallenge}';

    // State to store the user's input and the result
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState(null);

    // Function to handle the flag submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if the user entered the correct flag
        if (userInput === correctFlag) {
            setResult('Correct! You have successfully reverse-engineered the encoded string. FLAG{ReverseCTFChallenge}');
        } else {
            setResult('Incorrect flag. Keep trying!');
        }
    };

    const challengeContent = (
        <Container className="my-5">
            <Card className="shadow">
                <Card.Header as="h2" className="text-center bg-primary text-white">
                    Reverse Engineering Challenge
                </Card.Header>
                <Card.Body>
                    <Card.Text className="text-center mb-4">
                        We have encoded a secret message. Your task is to reverse-engineer it and find the correct flag.
                    </Card.Text>
                    <Alert variant="info" className="text-center">
                        <strong>Message:</strong> {encodedString}
                    </Alert>

                    <Form onSubmit={handleSubmit} className="mt-4">
                        <Form.Group className="mb-3" controlId="decryptedMessage">
                            <Form.Label>Enter the flag : </Form.Label>
                            <Form.Control
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="Type your flag here"
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
        </Container>
    );

    return challenge ? (
        <ChallengeInterface challenge={challenge}>
            {challengeContent}
        </ChallengeInterface>
    ) : (
        <div>Challenge not found</div>
    );
};

export default ReverseEngineeringChallenge1;
