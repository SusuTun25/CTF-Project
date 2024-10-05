const challengeData = {
    "webExploitation": [
      {
        "id": "web1",
        "title": "Log Me In",
        "description": "Can you exploit this simple login form to gain unauthorized access?",
        "hint": "Try inputting special characters in the username field.",
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
        "flag": "CTF{hail_caesar}",
        "difficulty": "Easy",
        "points":100
      },
     
    ],
    "networkSecurity": [
      {
        "id": "net1",
        "title": "Packet Sniffing 101",
        "description": "Analyze this pcap file to find the hidden flag.",
        "hint": "Look for unencrypted HTTP traffic.",
        "flag": "CTF{wireshark_pro}"
      }
    ],
    "reverseEngineering": [
      {
        "id": "rev1",
        "title": "Assembly Basics",
        "description": "Reverse engineer this simple x86 assembly code to find the flag.",
        "hint": "Pay attention to the comparison before the jump instruction.",
        "flag": "CTF{asm_master}"
      }
    ],
    "binaryExploitation": [
      {
        "id": "bin1",
        "title": "Buffer Overflow 101",
        "description": "Exploit this program's buffer to gain a shell.",
        "hint": "The buffer is 64 bytes long. What happens if you write more?",
        "flag": "CTF{stack_smashed}"
      }
    ]
  };
  
  export default challengeData;