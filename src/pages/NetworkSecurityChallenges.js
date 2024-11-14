import React from "react";
import CategorySubPage from "../components/CategorySubPage";
import ChallengesTable from "../components/ChallengesTable";
import challengeData from "../challengeData";

const NetworkSecurityChallenges = () => {
 
  const networkSecurityChallenges = challengeData.networkSecurity || [];

  const challenges = networkSecurityChallenges.map(challenge => ({
    id: challenge.id,
    name: challenge.title,
    difficulty: challenge.difficulty || "N/A",
    points: challenge.points || 100,
    completed: localStorage.getItem(`challenge_${challenge.id}_completed`) === 'true',
    path: `/network-security/challenges/${challenge.id}`
  }))

  const challengesContent = challenges.length > 0 ? (
    <ChallengesTable
      challenges={challenges}
      categoryPath="/network-security"
    />
  ) : (
    <p>No challenges available at the moment.</p>
  );


  return (
    <CategorySubPage
      title="Network Security Challenges"
      content={challengesContent}
      buttons={[
        {
          text: "Back to Overview",
          path: "/network-security",
          variant: "secondary",
        },
      ]}
    />
  );
};

export default NetworkSecurityChallenges;