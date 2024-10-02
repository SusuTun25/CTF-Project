import React from "react";
import CategorySubPage from "../components/CategorySubPage";
import networkImage from "../assets/image-network-security.png";

const NetworkSecurity = () => {
  return (
    <CategorySubPage
      title="Network Security"
      description="Dive into the realm of network security. Analyze traffic, exploit vulnerabilities, and learn to secure network infrastructure."
      imageSrc={networkImage}
      buttons={[
        { text: "Start Challenges", path: "/network-security/challenges" },
      ]}
    />
  );
};

export default NetworkSecurity;

