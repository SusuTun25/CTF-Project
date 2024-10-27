import React, { useState } from "react";
import {
  Card,
  Form,
  Button,
  Alert,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import ChallengeInterface from "../components/ChallengeInterface";
import challengeData from "../challengeData";
import SHA256 from "crypto-js/sha256";
import Hex from "crypto-js/enc-hex";

const CryptographyChallenge2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [transferToken, setTransferToken] = useState("");
  const [serverResponse, setServerResponse] = useState("");
  const [showFlag, setShowFlag] = useState(false);

  const challenge = challengeData.cryptography.find((c) => c.id === "crypto2");

  // Simulated server-side secret
  const serverSecret = "SuperSecretKey123!@#";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "regularUser" && password === "password123") {
      setLoggedIn(true);
      setServerResponse("Login successful. You can now make transfers.");
      console.log("Key:SuperSecretKey123!@#");
    } else {
      setServerResponse("Invalid credentials.");
    }
  };

  const generateTransferToken = (amount, recipient) => {
    const data = `${amount}:${recipient}`;
    const hash = SHA256(data + serverSecret).toString(Hex);
    return `${data}:${hash}`;
  };

  const handleTransferRequest = (e) => {
    e.preventDefault();
    const token = generateTransferToken(amount, recipient);
    setTransferToken(token);
    setServerResponse("Transfer token generated. Please confirm the transfer.");
  };

  const handleTransferConfirmation = (e) => {
    e.preventDefault();
    const [tokenAmount, tokenRecipient, tokenHash] = transferToken.split(":");
    const data = `${tokenAmount}:${tokenRecipient}`;
    const computedHash = SHA256(data + serverSecret).toString(Hex);

    if (tokenHash === computedHash) {
      const transferAmount = parseFloat(tokenAmount);
      if (transferAmount <= 1000) {
        setServerResponse(
          `Transfer of $${transferAmount} to ${tokenRecipient} successful!`
        );
      } else {
        if (transferAmount > 1000) {
          setShowFlag(true);
          setServerResponse(
            `Unusual activity detected! Transfer of $${transferAmount} to ${tokenRecipient} was attempted.`
          );
        } else {
          setServerResponse("Transfer failed. Amount exceeds the $1000 limit.");
        }
      }
    } else {
      setServerResponse("Invalid transfer token.");
    }
  };

  const challengeContent = (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>{challenge.title}</Card.Title>
        <Card.Text>{challenge.description}</Card.Text>
        {!loggedIn ? (
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        ) : (
          <div>
            <Form onSubmit={handleTransferRequest}>
              <Form.Group className="mb-3">
                <Form.Label>Amount to transfer (max $1000):</Form.Label>
                <OverlayTrigger
                  overlay={
                    <Tooltip>
                      Transactions are secured using advanced cryptography.
                    </Tooltip>
                  }
                >
                  <span style={{ marginLeft: "10px" }}>ℹ️</span>
                </OverlayTrigger>
                <Form.Control
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  max="1000"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Recipient:</Form.Label>
                <Form.Control
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="Enter recipient"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Generate Transfer Token
              </Button>
            </Form>

            {transferToken && (
              <div className="mt-3">
                <h5>Generated Transfer Token:</h5>
                <p>{transferToken}</p>
                <Form onSubmit={handleTransferConfirmation}>
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Transfer Token:</Form.Label>
                    <Form.Control
                      type="text"
                      value={transferToken}
                      onChange={(e) => setTransferToken(e.target.value)}
                      placeholder="Enter or modify the transfer token"
                    />
                  </Form.Group>
                  <Button variant="success" type="submit">
                    Confirm Transfer
                  </Button>
                </Form>
              </div>
            )}
          </div>
        )}

        {serverResponse && (
          <Alert
            variant={
              serverResponse.includes("successful") ? "success" : "danger"
            }
            className="mt-3"
          >
            {serverResponse}
          </Alert>
        )}

        {showFlag && (
          <Alert variant="success" className="mt-3">
            Congratulations! You've successfully exploited the transfer system.
            The flag is: {challenge.flag}
          </Alert>
        )}
      </Card.Body>
    </Card>
  );

  return (
    <ChallengeInterface challenge={challenge}>
      {challengeContent}
    </ChallengeInterface>
  );
};

export default CryptographyChallenge2;
