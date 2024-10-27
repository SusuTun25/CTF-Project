import React from 'react';
import challengeData from '../challengeData';
import ChallengeInterface from '../components/ChallengeInterface';
import { Container, Button} from 'react-bootstrap';

const networkSecurityChallenge1 = () => {

    const challenge = challengeData.networkSecurity.find(c => c.id === 'net1');

    const challengeContent = (
        <Container className="my-5">
            <div className="d-flex justify-content-center">
                    <a href="../../Resources/capture.pcap" download="network_capture.pcap">
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

export default networkSecurityChallenge1;
