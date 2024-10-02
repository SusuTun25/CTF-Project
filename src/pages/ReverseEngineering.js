import React from "react";
import CategorySubPage from "../components/CategorySubPage";
import aiImage from "../assets/image-AI.png";

const ReverseEngineering = () => {
  return (
    <CategorySubPage
      title="Reverse Engineering"
      description="Unravel the mysteries of compiled code. Learn to analyze and understand software without access to its source code."
      imageSrc={aiImage}
      buttons={[
        { text: "Start Challenges", path: "/reverse-engineering/challenges" },
      ]}
    />
  );
};

export default ReverseEngineering;

