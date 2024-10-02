import React from "react";
import CategorySubPage from "../components/CategorySubPage";
import cryptographyImage from "../assets/image-cryptography.png"; 

const Cryptography = () => {
  return (
    <CategorySubPage
      title="Cryptography"
      description="Explore the world of cryptography. From ancient ciphers to modern encryption techniques, test your skills in securing and breaking coded messages."
      imageSrc={cryptographyImage}
      buttons={[
        { text: "Start Challenges", path: "/cryptography/challenges" },
      ]}
    />
  );
}
export default Cryptography;
