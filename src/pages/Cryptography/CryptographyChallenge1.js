import React, { useState } from 'react';

const CaesarCipherChallenge = () => {
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

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Caesar Cipher Challenge</h1>
      <p>We have encrypted a message using a Caesar Cipher with a shift of 3.</p>
      <p>Encrypted Message: <strong>{encryptedMessage}</strong></p>
      
      <form onSubmit={handleSubmit}>
        <label>Enter your decrypted message:</label>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
        <button type="submit" style={{ marginLeft: '10px' }}>Submit</button>
      </form>

      {result && <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{result}</p>}
    </div>
  );
};

export default CaesarCipherChallenge;
