import React from "react";
import CategorySubPage from "../components/CategorySubPage";
import ChallengesTable from "../components/ChallengesTable";

const NetworkSecurityChallenges = () => {
  const challenges = [
    { id: 1, name: "Packet Analysis", difficulty: "Easy", points: 75, completed: false },
    { id: 2, name: "Firewall Configuration", difficulty: "Medium", points: 175, completed: false },
    { id: 3, name: "VPN Setup", difficulty: "Hard", points: 275, completed: false },
  ];

  const challengesContent = (
    <ChallengesTable 
      challenges={challenges} 
      categoryPath="/network-security"
    />
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