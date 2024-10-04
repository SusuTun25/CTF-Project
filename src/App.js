import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import WebExploitation from "./pages/WebExploitation";
import Cryptography from "./pages/Cryptography";
import NetworkSecurity from "./pages/NetworkSecurity";
import ReverseEngineering from "./pages/ReverseEngineering";
import BinaryExploitation from "./pages/BinaryExploitation";
import ChallengeLanding from "./pages/ChallengeLanding";
import WebExploitationChallenges from "./pages/WebExploitationChallenges";
import ReverseEngineeringChallenges from "./pages/ReverseEngineeringChallenges";
import NetworkSecurityChallenges from "./pages/NetworkSecurityChallenges";
import BinaryExploitationChallenges from "./pages/BinaryExploitationChallenges";
import CryptographyChallenges from "./pages/CryptographyChallenges";
import ChallengePage from "./components/ChallengePage";
import challengeData from "./challengeData";
import ChallengeInterface from "./components/ChallengeInterface";

// Helper function to convert camelCase to kebab-case
const camelToKebabCase = (string) => {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-exploitation" element={<WebExploitation />} />
        <Route
          path="/web-exploitation/challenges"
          element={<WebExploitationChallenges />}
        />
        <Route path="/reverse-engineering" element={<ReverseEngineering />} />
        <Route
          path="/reverse-engineering/challenges"
          element={<ReverseEngineeringChallenges />}
        />
        <Route path="/cryptography" element={<Cryptography />} />
        <Route
          path="/cryptography/challenges"
          element={<CryptographyChallenges />}
        />
        <Route path="/network-security" element={<NetworkSecurity />} />
        <Route
          path="/network-security/challenges"
          element={<NetworkSecurityChallenges />}
        />
        <Route path="/binary-exploitation" element={<BinaryExploitation />} />
        <Route
          path="/binary-exploitation/challenges"
          element={<BinaryExploitationChallenges />}
        />
        <Route path="/challenge-landing" element={<ChallengeLanding />} />

        {/* Dynamic routes for individual challenges */}
        {Object.entries(challengeData).map(([category, challenges]) =>
          challenges.map((challenge) => (
            <React.Fragment key={challenge.id}>
              <Route
                path={`/${camelToKebabCase(category)}/challenges/${challenge.id}`}
                element={<ChallengePage challenge={challenge} />}
              />
              <Route
                path={`/${camelToKebabCase(category)}/challenges/${challenge.id}/view`}
                element={<ChallengeInterface challenge={challenge} />}
              />
            </React.Fragment>
          ))
        )}
      </Routes>
    </Router>
  );
};

export default App;
