import React from "react";
import CategorySubPage from "../components/CategorySubPage";
import ChallengesTable from "../components/ChallengesTable";

const CryptographyChallenges = () => {
  const challenges = [
    { id: 1, name: "Caesar Cipher", difficulty: "Easy", points: 50, completed: false, path:"/cryptography/challenges/1" },
    { id: 2, name: "Vigenère Cipher", difficulty: "Medium", points: 150, completed: false },
    { id: 3, name: "RSA Encryption", difficulty: "Hard", points: 250, completed: false },
  ];

  const challengesContent = (
    <ChallengesTable 
      challenges={challenges} 
      categoryPath="/cryptography"
    />
  );

  return (
    <CategorySubPage
      title="Cryptography Challenges"
      content={challengesContent}
      buttons={[
        {
          text: "Back to Overview",
          path: "/cryptography",
          variant: "secondary",
        },
      ]}
    />
  );
};

export default CryptographyChallenges;