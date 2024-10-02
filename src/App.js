import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Your header component
import Home from './pages/Home'; // The landing page component
import WebExploitation from './pages/WebExploitation';
import Cryptography from './pages/Cryptography';
import NetworkSecurity from './pages/NetworkSecurity';
import ReverseEngineering from './pages/ReverseEngineering';
import BinaryExploitation from './pages/BinaryExploitation';
import ChallengeLanding from './pages/ChallengeLanding';
import WebExploitationChallenges from './pages/WebExploitationChallenges';
import ReverseEngineeringChallenges from './pages/ReverseEngineeringChallenges';
import NetworkSecurityChallenges from './pages/NetworkSecurityChallenges';
import BinaryExploitationChallenges from './pages/BinaryExploitationChallenges';
import CryptographyChallenges from './pages/CryptographyChallenges';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here as needed */}
        <Route path="/web-exploitation" element={<WebExploitation />} />
        <Route path="/web-exploitation/challenges" element={<WebExploitationChallenges />}/>
        <Route path="/reverse-engineering/challenges" element={<ReverseEngineeringChallenges />}/>
        <Route path='/cryptography' element={<Cryptography />} />
        <Route path="/cryptography/challenges" element={<CryptographyChallenges />}/>
        <Route path='/network-security' element={<NetworkSecurity />} />
        <Route path='/network-security/challenges' element={<NetworkSecurityChallenges />} />
        <Route path='/reverse-engineering' element={<ReverseEngineering />} />
        <Route path='/binary-exploitation' element={<BinaryExploitation />} />
        <Route path='/binary-exploitation/challenges' element={<BinaryExploitationChallenges />}/>
        <Route path="/challenge-landing" element={<ChallengeLanding />} />
      </Routes>
    </Router>
  );
};

export default App;
