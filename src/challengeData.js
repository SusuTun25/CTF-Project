const challengeData = {
  "webExploitation": [
    {
      "id": "web1",
      "title": "The Phantom's Control Panel",
      "description": "You've found references to a secret admin control panel. This panel likely holds the keys to all the stolen data. Your task is to find and exploit vulnerabilities in their access control system to reach this panel.",
      "hint": "The application doesn't seem to properly check authorization for all its pages. Try to find what might be accessible without proper permissions.",
      "flag": "CTF{IDOR_L34DS_T0_PR1V_3SC}",
      "component": "WebExploitationChallenge2",
      "difficulty": "Easy",
      "points": 100
    },
    {
      "id": "web2",
      "title": "The Phantom's Secure Portal",
      "description": "The Phantom Collective has implemented a 'secure' admin portal with a custom sorting mechanism. Your task is to bypass their login system, defeat the two-step verification, and execute a payload on their server.",
      "hint": "Sometimes, the order of operations matters more than you think. And in two-step verification, the devil is in the details.",
      "flag": "CTF{SQLi_2FA_BYPASS_MASTER}",
      "component": "WebExploitationChallenge3",
      "difficulty": "Hard",
      "points": 300
    }
  ],
  "cryptography": [
    {
      "id": "crypto1",
      "title": "Phantom's Whisper",
      "description": "Decrypt this message that was encrypted using a simple substitution cipher.",
      "hint": "The key to breaking this cipher lies in frequency analysis.",
      "flag": "CTF{SUBSTITUTION_CRACKED}",
      "component": "CryptographyChallenge1",
      "difficulty": "Easy",
      "points": 100
    },
    {
      "id": "crypto2",
      "title": "The Phantom's Signature",
      "description": "Intercept and forge a digital signature used by The Phantom Collective Bank.",
      "hint": "Look at your developer tools",
      "flag": "CTF{LENGTH_EXTENSION_PWNED}",
      "component": "CryptographyChallenge3",
      "difficulty": "Hard",
      "points": 300
    }
  ],
  "networkSecurity": [
    {
      "id": "net1",
      "title": "The Phantom's Shadows of the Wire",
      "description": "Uncover the secrets hidden in this pcap file. A ghostly flag awaits those who dare to investigate.",
      "hint": "Look for source.",
      "flag": "FLAG{NetworkTrafficSniffer}",
      "component": "NetworkSecurityChallenge1",
      "difficulty": "Easy",
      "points":100
    },
    {
      "id": "net2",
      "title": "Phantom's Secrets in the Storm",
      "description": "Amid a flurry of false trails and decoy requests, an intruder’s true intent is buried. Search through the noise to uncover the hidden password, lurking among the shadows of failed attempts.",
      "hint": "Focus on the POST requests to find the password.",
      "flag": "FLAG{correct_password}",
      "component": "NetworkSecurityChallenge2",
      "difficulty": "Hard",
      "points":200
    }
  ],
  "reverseEngineering": [
    {
      "id": "rev1",
      "title": "Hello, Phantom",
      "description": "Reverse engineer this simple program used by The Phantom Collective for recruit testing.",
      "hint": "Start by identifying the main function and work your way through the program flow.",
      "flag": "CTF{BABY_STEPS_IN_REVERSE}",
      "component": "ReverseEngineeringChallenge1",
      "difficulty": "Easy",
      "points": 100
    },
    {
      "id": "rev2",
      "title": "Ghost in the Machine",
      "description": "This advanced malware was found in our systems. Reverse engineer it to understand its functionality and find a way to neutralize it.",
      "hint": "The malware uses advanced obfuscation techniques. Look for suspicious API calls and hidden code segments.",
      "flag": "CTF{ADVANCED_MALWARE_DISSECTED}",
      "component": "ReverseEngineeringChallenge2",
      "difficulty": "Hard",
      "points": 300
    }
  ],
  "binaryExploitation": [
    {
      "id": "bin1",
      "title": "Phantom of Overflow",
      "description": "A shadowy program holds a flaw in its defenses, vulnerable to those who know where to push. Unravel its weakness and let your inputs spill beyond the boundaries.",
      "hint": "What might happen if you give it more than it can hold?",
      "flag": "FLAG{BufferOverflowMaster}",
      "component": "BinaryExploitationChallenge1",
      "difficulty": "Easy",
      "points":100
    },
    {
      "id": "bin2",
      "title": "Shadows of Control",
      "description": "A fragile boundary separates control from chaos. A single overflow can tilt the balance, redirecting execution to paths unseen.",
      "hint": "Think about bypassing the call stack directly. ROP chains can give you power over execution by stitching together fragments of code already in memory. ",
      "flag": "FLAG{BufferOverflowMaster}",
      "component": "BinaryExploitationChallenge2",
      "difficulty": "Hard",
      "points":200
    }
  ]
};

export default challengeData;
