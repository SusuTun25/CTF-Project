import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import ChallengeInterface from '../components/ChallengeInterface';
import challengeData from '../challengeData';

const ReverseEngineeringChallenge2 = () => {
  const [userToken, setUserToken] = useState('');
  const [adminAttemptToken, setAdminAttemptToken] = useState('');
  const [output, setOutput] = useState('');
  const [apiResponses, setApiResponses] = useState([]);
  
  const challenge = challengeData.reverseEngineering.find(c => c.id === 'rev2');

  // Example token generation code
  const sampleCode = `
# Token Generation Sample (Python)
import base64
import hashlib
import time

def rot13(text):
    result = ""
    for char in text:
        if char.isalpha():
            ascii_offset = ord('A') if char.isupper() else ord('a')
            result += chr((ord(char) - ascii_offset + 13) % 26 + ascii_offset)
        else:
            result += char
    return result

def generate_token(username, role):
    timestamp = int(time.time())
    
    # Create token payload
    payload = f"{username}:{role}:{timestamp}"
    
    # First layer: ROT13
    encoded = rot13(payload)
    
    # Second layer: Base64
    encoded = base64.b64encode(encoded.encode()).decode()
    
    # Generate signature (MD5 of encoded payload)
    signature = hashlib.md5(encoded.encode()).hexdigest()
    
    # Combine payload and signature
    return f"{encoded}.{signature}"

# Example usage:
token = generate_token("user123", "user")
print(token)

# To verify:
# 1. Split token into payload and signature
# 2. Calculate MD5 of payload
# 3. Compare with provided signature
`;

  // Sample API responses
  const apiEndpoints = `
Available API Endpoints:

POST /api/login
Request:
{
    "username": "string",
    "password": "string"
}
Response:
{
    "token": "string",
    "role": "string"
}

GET /api/user
Headers:
    Authorization: Bearer <token>
Response:
{
    "username": "string",
    "role": "string"
}

GET /api/admin
Headers:
    Authorization: Bearer <token>
Response:
{
    "flag": "string"  // Only accessible with admin token
}
`;

  useEffect(() => {
    // Generate sample user token on component mount
    const generateSampleToken = () => {
      const username = "user123";
      const role = "user";
      const timestamp = Math.floor(Date.now() / 1000);
      
      // Base payload
      const payload = `${username}:${role}:${timestamp}`;
      
      // ROT13
      const rot13Encoded = payload.replace(/[a-zA-Z]/g, c => 
        String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26)
      );
      
      // Base64
      const base64Encoded = btoa(rot13Encoded);
      
      // MD5 (simplified for demo)
      const signature = Array.from(base64Encoded)
        .reduce((hash, char) => (((hash << 5) - hash) + char.charCodeAt(0))|0, 0)
        .toString(16);
      
      const token = `${base64Encoded}.${signature}`;
      setUserToken(token);
      addApiResponse('POST /api/login', 'Success', { token, role: 'user' });
    };

    generateSampleToken();
  }, []);

  const handleTokenSubmit = (e) => {
    e.preventDefault();
    
    try {
      // Verify token format
      const [payload, signature] = adminAttemptToken.split('.');
      
      // Decode payload
      const decodedPayload = atob(payload);
      
      // ROT13 decode
      const rot13Decoded = decodedPayload.replace(/[a-zA-Z]/g, c =>
        String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26)
      );
      
      // Parse token parts
      const [username, role, timestamp] = rot13Decoded.split(':');
      
      addApiResponse('GET /api/admin', 'Request', { token: adminAttemptToken });

      // Verify it's a properly formatted admin token
      if (role === 'admin') {
        // Calculate expected signature
        const expectedSignature = Array.from(payload)
          .reduce((hash, char) => (((hash << 5) - hash) + char.charCodeAt(0))|0, 0)
          .toString(16);

        if (signature === expectedSignature) {
          setOutput(`Congratulations! Admin access granted.\n\nFlag: CTF{ADVANCED_MALWARE_DISSECTED}`);
          addApiResponse('GET /api/admin', 'Success', { flag: 'CTF{ADVANCED_MALWARE_DISSECTED}' });
        } else {
          setOutput('Invalid signature. Token tampering detected.');
          addApiResponse('GET /api/admin', 'Error', { message: 'Invalid signature' });
        }
      } else {
        setOutput('Access denied. Admin role required.');
        addApiResponse('GET /api/admin', 'Error', { message: 'Insufficient privileges' });
      }
    } catch (error) {
      setOutput(`Token parsing error: ${error.message}`);
      addApiResponse('GET /api/admin', 'Error', { message: 'Token parsing error' });
    }
  };

  const addApiResponse = (endpoint, status, data) => {
    setApiResponses(prev => [...prev, {
      timestamp: new Date().toISOString(),
      endpoint,
      status,
      data: JSON.stringify(data, null, 2)
    }]);
  };

  const challengeContent = (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>{challenge.title}</Card.Title>
        <Card.Text>{challenge.description}</Card.Text>
        <Alert variant="info">
          <strong>Hint:</strong> {challenge.hint}
        </Alert>
        
        <h5>API Documentation:</h5>
        <pre style={{
          backgroundColor: '#f8f9fa',
          padding: '15px',
          borderRadius: '5px',
          maxHeight: '200px',
          overflow: 'auto'
        }}>
          <code>{apiEndpoints}</code>
        </pre>

        <h5>Sample Token Generation Code:</h5>
        <pre style={{
          backgroundColor: '#1e1e1e',
          color: '#d4d4d4',
          padding: '15px',
          borderRadius: '5px',
          maxHeight: '400px',
          overflow: 'auto',
          fontFamily: 'Consolas, monospace'
        }}>
          <code>{sampleCode}</code>
        </pre>

        <h5>Current User Token:</h5>
        <pre style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>
          {userToken}
        </pre>
        
        <Form onSubmit={handleTokenSubmit} className="mt-3">
          <Form.Group className="mb-3">
            <Form.Label>Enter Admin Token:</Form.Label>
            <Form.Control 
              type="text" 
              value={adminAttemptToken}
              onChange={(e) => setAdminAttemptToken(e.target.value)}
              placeholder="Enter your forged admin token"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Access Admin API
          </Button>
        </Form>
        
        {output && (
          <Alert variant={output.includes('CTF{') ? 'success' : 'danger'} className="mt-3">
            <pre>{output}</pre>
          </Alert>
        )}

        <h5 className="mt-3">API Request Log:</h5>
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '15px', 
          borderRadius: '5px',
          maxHeight: '200px',
          overflow: 'auto'
        }}>
          {apiResponses.map((response, index) => (
            <div key={index} className="mb-2">
              <strong>{response.timestamp}</strong>
              <br />
              <strong>{response.endpoint}</strong> - {response.status}
              <pre style={{ marginBottom: 0 }}>{response.data}</pre>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <ChallengeInterface challenge={challenge}>
      {challengeContent}
    </ChallengeInterface>
  );
};

export default ReverseEngineeringChallenge2;