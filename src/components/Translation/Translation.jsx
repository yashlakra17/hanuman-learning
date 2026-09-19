import React from "react";
import "./Translation.css";

const Translation = ({ hindi, english }) => {
  return (
    <div className="translation-card">
      <div className="translation-title">
        <span>📖</span>
        <h3>Translation</h3>
      </div>

      <div className="translation-content">
        <div className="translation-hindi">
          <span>हिंदी</span>
          <p>{hindi}</p>
        </div>

        <div className="translation-divider"></div>

        <div className="translation-english">
          <span>English Meaning</span>
          <p>{english}</p>
        </div>
      </div>
    </div>
  );
};

export default Translation;