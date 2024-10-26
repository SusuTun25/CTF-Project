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
      },
      {
        "id": "net2",
        "title": "Password Hunter",
        "description": "An attacker has attempted to brute-force login credentials by sending multiple requests with a mix of irrelevant data and incorrect passwords. Among the noise, the correct password was transmitted, but it’s hidden within a series of meaningless requests.",
        "hint": "Focus on the POST requests to find the password.",
        "flag": "FLAG{correct_password}",
        "difficulty": "Hard",
        "points":200
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
      },
      {
        "id": "bin2",
        "title": "Stack Smash: Breaking the Barrier",
        "description": "A critical program on your target system contains a buffer overflow vulnerability that could allow an attacker to execute arbitrary code or manipulate program control flow. Your mission is to exploit this vulnerability by crafting an input that overflows the buffer and hijacks the program’s execution to call a hidden function that reveals a secret flag.",
        "hint": "The flag is in the format `FLAG{message}`, and the encoding is a common reversible technique. Start by decoding the base64 string and look for clues!",
        "flag": "FLAG{BufferOverflowMaster}",
        "difficulty": "Hard",
        "points":200
      }
    ]
  };
  
  export default challengeData;