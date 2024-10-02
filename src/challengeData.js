const challengeData = {
    "webExploitation": [
      {
        "id": "web1",
        "title": "SQL Injection 101",
        "description": "Can you exploit this simple login form to gain unauthorized access?",
        "hint": "Try inputting special characters in the username field.",
        "flag": "CTF{sql_injection_mastered}"
      },
      {
        "id": "web2",
        "title": "XSS Adventure",
        "description": "Inject a script to alert() the cookie on this page.",
        "hint": "Look for user input that's reflected on the page without proper sanitization.",
        "flag": "CTF{xss_master}"
      }
    ],
    "cryptography": [
      {
        "id": "crypto1",
        "title": "Caesar's Secret",
        "description": "Decrypt this message that was encrypted using a Caesar cipher.",
        "hint": "The shift used is equal to the atomic number of Carbon.",
        "flag": "CTF{hail_caesar}"
      },
      {
        "id": "crypto2",
        "title": "RSA Rookie",
        "description": "Break this simple RSA encryption with small prime factors.",
        "hint": "The primes used are both less than 100.",
        "flag": "CTF{small_primes_big_problem}"
      }
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