import React from "react";
import CategorySubPage from "../components/CategorySubPage";
import aiImage from "../assets/image-AI.png";

const ReverseEngineering = () => {
  return (
    <CategorySubPage
      title="Code Decipherer"
      description="Agent, we've intercepted some of The Phantom Collective's compiled software. 
      These programs are key to understanding their operations, but they're obfuscated and protected. 
      Your mission is to reverse engineer these applications, decipher their functionality, and extract any hidden information. 
      You'll need to utilize disassemblers, debuggers, and your code analysis skills to unravel their secrets. 
      Each piece of software you crack could reveal crucial intel about their plans. 
      Time is of the essence – can you decode their digital fingerprints?"
      imageSrc={aiImage}
      buttons={[
        { text: "Start Challenges", path: "/reverse-engineering/challenges" },
      ]}
    />
  );
};

export default ReverseEngineering;

