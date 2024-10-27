import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import challengeData from '../challengeData';
import ChallengeInterface from '../components/ChallengeInterface';
import { Card, Container} from 'react-bootstrap';

const BufferOverflowChallenge2 = () => {

    const challenge = challengeData.binaryExploitation.find(c => c.id === 'bin2');

    const challengeContent = (
        <Container className="my-5">
            <Card className="shadow">
                <Card.Header as="h2" className="text-center bg-primary text-white">
                    Binary Exploitation Challenge
                </Card.Header>
                <Card.Body>
                    <Card.Text className="text-center mb-4">
                        A critical program on your target system contains a buffer overflow vulnerability that could allow an attacker to execute arbitrary code or manipulate program control flow.
                    </Card.Text>

                    <div className="d-flex justify-content-center">
                        <a href="..\..\Resources\BinaryExploitation2.7z" download="BinaryExploitation2.7z">
                            <Button variant="primary" type="submit">
                                download
                            </Button>
                        </a> 
                    </div>
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

export default BufferOverflowChallenge2;
