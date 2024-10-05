import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import challengeData from '../challengeData';
import ChallengeInterface from '../components/ChallengeInterface';
import { Card, Container} from 'react-bootstrap';


const CryptographyChallenge1 = () => {

    const challenge = challengeData.cryptography.find(c => c.id === 'crypto1');
    // The encrypted message
    const encryptedMessage = 'Khoor Zruog';

    // The correct decrypted message (this would be "Hello World" when shifted correctly)
    const correctDecryption = 'Hello World';

    // State to store the user's input
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState(null);

    // Function to handle decryption attempt
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput === correctDecryption) {
            setResult('Correct! You have decrypted the message! FLAG{CaesarCipher}');
        } else {
            setResult('Incorrect. Try again.');
        }
    };

    const challengeContent = (<Container className="my-5">
        <Card className="shadow">
            <Card.Header as="h2" className="text-center bg-primary text-white">
                Caesar Cipher Challenge
            </Card.Header>
            <Card.Body>
                <Card.Text className="text-center mb-4">
                    We have encrypted a message using a Caesar Cipher with a shift of 3.
                </Card.Text>
                <Alert variant="info" className="text-center">
                    <strong>Encrypted Message:</strong> {encryptedMessage}
                </Alert>

                <Form onSubmit={handleSubmit} className="mt-4">
                    <Form.Group className="mb-3" controlId="decryptedMessage">
                        <Form.Label>Enter your decrypted message:</Form.Label>
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
}

export default CryptographyChallenge1