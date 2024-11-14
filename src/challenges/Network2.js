import React from 'react';
import challengeData from '../challengeData';
import ChallengeInterface from '../components/ChallengeInterface';
import { Container, Button} from 'react-bootstrap';

const networkSecurityChallenge2 = () => {

    const challenge = challengeData.networkSecurity.find(c => c.id === 'net2');

    const challengeContent = (
        <Container className="my-5">
            <div className="d-flex justify-content-center">
                <a href="../../Resources/Message.pcap" download="message.pcap">
                    <Button variant="primary" type="submit">
                        download
                    </Button>
                </a> 
            </div>
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
