import React from "react";
import "./SpeakingPractice.css";

const SpeakingPractice = ({ verse }) => {
  return (
    <div className="speaking-practice">
      <div className="practice-header">
        <div>
          <h3>🗣️ Speaking Practice</h3>
          <p>Listen and practice speaking the verse</p>
        </div>

        <span className="practice-status">Practice</span>
      </div>

      <div className="practice-text">
        {verse?.hindi || "Your verse will appear here"}
      </div>

      <button className="start-practice-btn">
        🎤 Start Practice
      </button>

      <p className="practice-note">
        Speech recognition will be connected later.
      </p>
    </div>
  );
};

export default SpeakingPractice;