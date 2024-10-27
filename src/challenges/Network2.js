import React from 'react';
import challengeData from '../challengeData';
import ChallengeInterface from '../components/ChallengeInterface';
import { Card, Container, Button} from 'react-bootstrap';

const networkSecurityChallenge2 = () => {

    const challenge = challengeData.networkSecurity.find(c => c.id === 'net2');

    const challengeContent = (
        <Container className="my-5">
            <Card className="shadow">
                <Card.Header as="h2" className="text-center bg-primary text-white">
                    Network Security Challenge
                </Card.Header>
                <Card.Body>
                    <Card.Text className="text-center mb-4">
                        We intercepted suspicious network traffic from a server suspected of leaking sensitive data. Analyze the provided network capture file and find the secret message hidden in the communication.
                    </Card.Text>

                    <div className="d-flex justify-content-center">
                        <a href="../../Resources/Message.pcap" download="message.pcap">
                            <Button variant="primary" type="submit">
                                download
                            </Button>
                        </a> 
                    </div>
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
}

export default networkSecurityChallenge2;
