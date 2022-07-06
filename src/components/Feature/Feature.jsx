import React from "react";
import "./index.css";

const Feature = ({ icon, title, desc }) => {
  return (
    <div className="feature-container">
      <div className="feature-icon">{icon}</div>
      <div className="feature-text-wrapper">
        <div className="feature-title">{title}</div>
        <div className="feature-description">{desc}</div>
      </div>
    </div>
  );
};

export default Feature;
