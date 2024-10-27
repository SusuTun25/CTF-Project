import React from "react";
import CategorySubPage from "../components/CategorySubPage";
import cryptographyImage from "../assets/image-sha256.png"; 

const Cryptography = () => {
  return (
    <CategorySubPage
      title="Crypto Breakers"
      description="Agent, you've reached The Phantom Collective's encryption layer. 
  They're using advanced cryptographic techniques to secure their communications and data. 
  Your task is to break through these encryption methods, decipher their messages, and unlock access to their protected information. 
  Each challenge represents a different encryption puzzle you must solve. 
  Time is of the essence – crack these codes to progress further into their network. Good luck, cryptobreaker."
      imageSrc={cryptographyImage}
      buttons={[
        { text: "Begin Decryption", path: "/cryptography/challenges" },
      ]}
    />
  );
}
export default Cryptography;
