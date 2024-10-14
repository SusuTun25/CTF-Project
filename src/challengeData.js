const challengeData = {
    "webExploitation": [
      {
        "id": "web1",
        "title": "Log Me In",
        "description": "Can you exploit this simple login form to gain unauthorized access?",
        "hint": "Try looking at the source.",
        "flag": "CTF{sql_injection_mastered}",
        "component": 'WebExploitationChallenge1',
        "difficulty": "Easy",
        "points":100
      },
     
    ],
    "cryptography": [
      {
        "id": "crypto1",
        "title": "Khoor's Secret",
        "description": "Decrypt this message that was encrypted using a Caesar cipher.",
        "hint": "The shift used is equal to the atomic number of Carbon.",
        "flag": "FLAG{CaesarCipher}",
        "difficulty": "Easy",
        "points":100
      },
     
    ],
    "networkSecurity": [
      {
        "id": "net1",
        "title": "Intercept the Secret",
        "description": "Analyze this pcap file to find the hidden flag.",
        "hint": "Look for unencrypted HTTP traffic.",
        "flag": "FLAG{NetworkTrafficSniffer}",
        "difficulty": "Easy",
        "points":100
      }
    ],
    "reverseEngineering": [
      {
        "id": "rev1",
        "title": "Assembly Basics",
        "description": "We have encrypted a secret message and hidden it in an encoded string. Your task is to reverse-engineer the encoding to discover the flag.",
        "hint": "The flag is in the format `FLAG{message}`, and the encoding is a common reversible technique. Start by decoding the base64 string and look for clues!",
        "flag": "FLAG{ReverseCTFChallenge}",
        "difficulty": "Easy",
        "points":100
      }
    ],
    "binaryExploitation": [
      {
        "id": "bin1",
        "title": "Buffer Overflow 101",
        "description": "You’ve discovered a vulnerable program that seems to lack proper input validation.",
        "hint": "The flag is in the format `FLAG{message}`, and the encoding is a common reversible technique. Start by decoding the base64 string and look for clues!",
        "flag": "FLAG{BufferOverflowMaster}",
        "difficulty": "Easy",
        "points":100
      }
    ]
  };
  
  export default challengeData;