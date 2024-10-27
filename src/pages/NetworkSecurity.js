import React from "react";
import CategorySubPage from "../components/CategorySubPage";
import networkImage from "../assets/image-network-security.png";

const NetworkSecurity = () => {
  return (
    <CategorySubPage
      title="Network Infiltration"
      description={`Agent, your first task is to infiltrate The Phantom Collective's network infrastructure. 
        They've set up a complex web of firewalls, intrusion detection systems, and encrypted communications. 
        Your mission is to bypass these defenses, intercept their communications, and find vulnerabilities that will allow us to access their systems. 
        Be cautious – they're monitoring for any unusual activity. Good luck, agent.`}      
        imageSrc={networkImage}
       buttons={[
        { text: "Begin Infiltration", path: "/network-security/challenges" },
      ]}
    />
  );
};

export default NetworkSecurity;

