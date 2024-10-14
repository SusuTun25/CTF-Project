const challengeData = {
  "webExploitation": [
    {
      "id": "web1",
      "title": "Log Me In",
      "description": "You've discovered the login page to The Phantom Collective's command center. Your task is to bypass their authentication system and gain initial access.",
      "hint": "The login form might be vulnerable to a common authentication bypass technique. Try manipulating the request parameters.",
      "flag": "CTF{BR0K3N_AUTH_BY9ASS3D}",
      "component": "WebExploitationChallenge1",
      "difficulty": "Easy",
      "points": 100
    },
    {
      "id": "web2",
      "title": "Data Exfiltration Maze",
      "description": "You're in, but the stolen data is hidden within the website's content management system. The Phantom Collective uses a custom plugin for data storage. Find a way to exploit their system and locate the hidden data.",
      "hint": "The custom plugin might be vulnerable to SQL injection. Look for user input fields that interact with the database.",
      "flag": "CTF{SQL_1NJ3CT10N_M4ST3R}",
      "component": "WebExploitationChallenge2",
      "difficulty": "Medium",
      "points": 200
    },
    {
      "id": "web3",
      "title": "The Phantom's Control Panel",
      "description": "You've found references to a secret admin control panel. This panel likely holds the keys to all the stolen data. Your task is to find and exploit vulnerabilities in their access control system to reach this panel.",
      "hint": "The application doesn't seem to properly check authorization for all its pages. Try to find endpoints that might be accessible without proper permissions.",
      "flag": "CTF{IDOR_L34DS_T0_PR1V_3SC}",
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
      "title": "Binary Secrets",
      "description": "The Phantom Collective uses a custom encoding scheme. Decode this message to reveal their next target.",
      "hint": "The encoding uses binary, but with a twist. Each byte might not represent what you think it does.",
      "flag": "CTF{B1NARY_N0T_50_51MPL3}",
      "component": "CryptographyChallenge2",
      "difficulty": "Medium",
      "points": 200
    },
    {
      "id": "crypto3",
      "title": "The Phantom's Signature",
      "description": "Intercept and forge a digital signature used by The Phantom Collective to authenticate their communications.",
      "hint": "The signature algorithm might be vulnerable to a length extension attack.",
      "flag": "CTF{LENGTH_EXTENSION_PWNED}",
      "component": "CryptographyChallenge3",
      "difficulty": "Hard",
      "points": 300
    }
  ],
  "networkSecurity": [
    {
      "id": "net1",
      "title": "Packet Sniffing 101",
      "description": "Analyze this captured network traffic to find The Phantom Collective's communication channel.",
      "hint": "Look for unusual patterns in the packet headers. They might be hiding data in plain sight.",
      "flag": "CTF{HIDDEN_IN_PLAIN_PACKETS}",
      "component": "NetworkSecurityChallenge1",
      "difficulty": "Easy",
      "points": 100
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
    {
      "id": "net3",
      "title": "Man-in-the-Middle",
      "description": "Intercept and modify The Phantom Collective's encrypted communication to gain access to their command server.",
      "hint": "Their encryption might be strong, but how secure is their key exchange process?",
      "flag": "CTF{MITM_ATTACK_SUCCESSFUL}",
      "component": "NetworkSecurityChallenge3",
      "difficulty": "Hard",
      "points": 300
    }
  ],
  "reverseEngineering": [
    {
      "id": "re1",
      "title": "Hello, Phantom",
      "description": "Reverse engineer this simple program used by The Phantom Collective for recruit testing.",
      "hint": "Start by identifying the main function and work your way through the program flow.",
      "flag": "CTF{BABY_STEPS_IN_REVERSE}",
      "component": "ReverseEngineeringChallenge1",
      "difficulty": "Easy",
      "points": 100
    },
    {
      "id": "re2",
      "title": "Phantom's Vault",
      "description": "The Phantom Collective's password manager has been captured. Crack it to reveal their secrets.",
      "hint": "The program uses a custom encryption algorithm. Can you figure out how it works?",
      "flag": "CTF{CUSTOM_CRYPTO_BROKEN}",
      "component": "ReverseEngineeringChallenge2",
      "difficulty": "Medium",
      "points": 200
    },
    {
      "id": "re3",
      "title": "Ghost in the Machine",
      "description": "This advanced malware was found in our systems. Reverse engineer it to understand its functionality and find a way to neutralize it.",
      "hint": "The malware uses advanced obfuscation techniques. Look for suspicious API calls and hidden code segments.",
      "flag": "CTF{ADVANCED_MALWARE_DISSECTED}",
      "component": "ReverseEngineeringChallenge3",
      "difficulty": "Hard",
      "points": 300
    }
  ],
  "binaryExploitation": [
    {
      "id": "bin1",
      "title": "Buffer Overflow 101",
      "description": "Exploit a simple buffer overflow vulnerability in this program to gain control of the execution flow.",
      "hint": "Look for user input that isn't properly validated. Can you overflow a buffer to overwrite critical data?",
      "flag": "CTF{STACK_SMASHING_SUCCESS}",
      "component": "BinaryExploitationChallenge1",
      "difficulty": "Easy",
      "points": 100
    },
    {
      "id": "bin2",
      "title": "Return-Oriented Programming",
      "description": "The program has stack protection enabled. Use ROP to bypass it and execute arbitrary code.",
      "hint": "You can't inject your own code, but can you reuse existing code in the binary to achieve your goal?",
      "flag": "CTF{ROP_CHAIN_MASTER}",
      "component": "BinaryExploitationChallenge2",
      "difficulty": "Medium",
      "points": 200
    },
    {
      "id": "bin3",
      "title": "Kernel Exploit",
      "description": "You've found a vulnerability in a kernel module used by The Phantom Collective. Exploit it to gain root access to their systems.",
      "hint": "The vulnerability is in the IOCTL handler. Can you craft a payload that will elevate your privileges?",
      "flag": "CTF{KERNEL_PWNED_GAME_OVER}",
      "component": "BinaryExploitationChallenge3",
      "difficulty": "Hard",
      "points": 300
    }
  ]
};

export default challengeData;