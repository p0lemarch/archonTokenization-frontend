// client/src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";

// Import your other components here
// import HowDoesItWork from './HowDoesItWork';
// import AvailableAssets from './AvailableAssets';
// import Stats from './Stats';
// import About from './About';
// import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Add your routes here */}
          {/* 
          <Route path="/how-does-it-work" element={<HowDoesItWork />} />
          <Route path="/available-assets" element={<AvailableAssets />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
