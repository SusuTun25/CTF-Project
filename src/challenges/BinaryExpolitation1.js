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

                <Card.Body>
                    <Card.Text className="text-center mb-4">
                        A critical program on your target system contains a buffer overflow vulnerability that could allow an attacker to get the code.
                    </Card.Text>

                    <div className="d-flex justify-content-center">
                        <a href="..\..\Resources\BinaryExploitation1.7z" download="BinaryExploitation1.7z">
                            <Button variant="primary" type="submit">
                                download
                            </Button>
                        </a> 
                    </div>
                </Card.Body>
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
