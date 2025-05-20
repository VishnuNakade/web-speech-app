import React from "react";
import "./FrequencyBar.css";

function FrequencyBar({ active }) {
  return (
    <div className={`bar-container ${active ? "active" : ""}`}>
      {Array.from({ length: 20 }).map((_, i) => (
        <span key={i} className="bar"></span>
      ))}
    </div>
  );
}

export default FrequencyBar;
