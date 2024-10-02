import React from "react";
import CategorySubPage from "../components/CategorySubPage";
import ChallengesTable from "../components/ChallengesTable";

const ReverseEngineeringChallenges = () => {
  const challenges = [
    { id: 1, name: "Basic Assembly", difficulty: "Easy", points: 125, completed: false },
    { id: 2, name: "Malware Analysis", difficulty: "Medium", points: 225, completed: false },
    { id: 3, name: "Obfuscated Code", difficulty: "Hard", points: 325, completed: false },
  ];

  const challengesContent = (
    <ChallengesTable 
      challenges={challenges} 
      categoryPath="/reverse-engineering"
    />
  );

  return (
    <CategorySubPage
      title="Reverse Engineering Challenges"
      content={challengesContent}
      buttons={[
        {
          text: "Back to Overview",
          path: "/reverse-engineering",
          variant: "secondary",
        },
      ]}
    />
  );
};

export default ReverseEngineeringChallenges;