import challengeData from "../challengeData";
import ChallengeInterface from "../components/ChallengeInterface";
import { Card, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ReverseEngineeringChallenge1 = () => {
  const challenge = challengeData.reverseEngineering.find(
    (c) => c.id === "rev1"
  );
  const handleDownload = () => {
    // Specify the path to your ZIP file
    const url = "./phantom_test.zip"; // Adjust the path accordingly

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'phantom.zip'); // Specify the name of the file

    // Append to the document
    document.body.appendChild(link);
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  };

  const challengeContent = (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title className="text-center mb-4">
          Phantom's Recruit Test
        </Card.Title>
        <p>
          Your task is to reverse engineer the provided binary and find the
          hidden flag within it. Use your reverse engineering skills to analyze
          the program's behavior and structure.
        </p>
        <div className="mt-3">

          <Button variant="primary" onClick={handleDownload}>
            Download Challenge Binary
          </Button>
         
        </div>
      </Card.Body>
    </Card>
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
