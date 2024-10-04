import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import WebExploitation from "./pages/WebExploitation";
import WebExploitationChallenges from "./pages/WebExploitationChallenges";
import WebExploitationChallenge1 from "./pages/web-exploitation/WebExploitation1";
import Cryptography from "./pages/Cryptography";
import CryptographyChallenges1 from  "./pages/Cryptography/CryptographyChallenge1";
import NetworkSecurity from "./pages/NetworkSecurity";
import ReverseEngineering from "./pages/ReverseEngineering";
import BinaryExploitation from "./pages/BinaryExploitation";
import ChallengeLanding from "./pages/ChallengeLanding";
import ReverseEngineeringChallenges from "./pages/ReverseEngineeringChallenges";
import NetworkSecurityChallenges from "./pages/NetworkSecurityChallenges";
import BinaryExploitationChallenges from "./pages/BinaryExploitationChallenges";
import CryptographyChallenges from "./pages/CryptographyChallenges";
import ChallengePage from "./components/ChallengePage"; // Assume you've created this component
import challengeData from "./challengeData";
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
        <Route
          path="/web-exploitation/challenges/1"
          element={<WebExploitationChallenge1 />}
        />
        <Route
          path="/web-exploitation/challenges/2"
          element={<WebExploitationChallenge1 />}
        />
        <Route
          path="/web-exploitation/challenges/3"
          element={<WebExploitationChallenge1 />}
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
         <Route
          path="/cryptography/challenges/1"
          element={<CryptographyChallenges1 />}
        />
        <Route
          path="/cryptography/challenges/2"
          element={<CryptographyChallenges1 />}
        />
        <Route
          path="/cryptography/challenges/3"
          element={<CryptographyChallenges1 />}
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
            <Route
              key={challenge.id}
              path={`/${camelToKebabCase(category)}/challenges/${challenge.id}`}
              element={<ChallengePage challenge={challenge} />}
            />
          ))
        )}
      </Routes>
    </Router>
  );
};

export default App;
