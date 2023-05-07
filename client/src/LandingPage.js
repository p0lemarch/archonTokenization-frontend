// client/src/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-8">
          Archon Tokenization
        </h1>
        <p className="text-xl mb-8">
          Tokenization of real assets like real estate, farmland, debt, and
          invoices.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <Link to="/how-does-it-work" className="btn">
          How Does It Work
        </Link>
        <Link to="/available-assets" className="btn">
          Available Assets
        </Link>
        <Link to="/stats" className="btn">
          Stats
        </Link>
        <Link to="/about" className="btn">
          About
        </Link>
        <Link to="/dashboard" className="btn">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
