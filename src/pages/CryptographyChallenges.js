import React from "react";
import CategorySubPage from "../components/CategorySubPage";
import ChallengesTable from "../components/ChallengesTable";
import challengeData from "../challengeData";

const CryptographyChallenges = () => {
  const cryptographyChallenges = challengeData.cryptography || [];

  const challenges = cryptographyChallenges.map(challenge => ({
    id: challenge.id,
    name: challenge.title,
    difficulty: challenge.difficulty || "N/A",
    points: challenge.points || 100,
    completed: false,
    path: `/cryptography/challenges/${challenge.id}`
  }));

  const challengesContent = challenges.length > 0 ? (
    <ChallengesTable
      challenges={challenges}
      categoryPath="/cryptography"
    />
  ) : (
    <p>No challenges available at the moment.</p>
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