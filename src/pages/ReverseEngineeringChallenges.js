import React from "react";
import CategorySubPage from "../components/CategorySubPage";
import ChallengesTable from "../components/ChallengesTable";
import challengeData from "../challengeData";

const ReverseEngineeringChallenges = () => {


  const reverseEngineeringChallenges = challengeData.reverseEngineering || []
  const challenges = reverseEngineeringChallenges.map(challenge => ({
    id: challenge.id,
    name: challenge.title,
    difficulty: challenge.difficulty || "N/A",
    points: challenge.points || 100,
    completed: false,
    path: `/reverse-engineering/challenges/${challenge.id}`
  }))

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