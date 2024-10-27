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
      "title": "Intercept the Secret",
      "description": "Analyze this pcap file to find the hidden flag.",
      "hint": "Look for unencrypted HTTP traffic.",
      "flag": "FLAG{NetworkTrafficSniffer}",
      "difficulty": "Easy",
      "points":100
    },
    {
      "id": "net2",
      "title": "Firewall Bypass",
      "description": "The Phantom Collective's server is protected by a firewall. Find a way to bypass it and establish a connection.",
      "hint": "The firewall might not be filtering all types of traffic equally. Some protocols might be overlooked.",
      "flag": "CTF{FIREWALL_HOLE_FOUND}",
      "component": "NetworkSecurityChallenge2",
      "difficulty": "Medium",
      "points": 200
    },
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