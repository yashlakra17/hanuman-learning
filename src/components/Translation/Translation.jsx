import React from "react";
import "./Translation.css";

const Translation = ({ hindi, hindEnglish, english }) => {
  return (
    <div className="translation-card">
      <div className="translation-title">
        <span>📖</span>
        <h3>Meaning & Translation</h3>
      </div>

      <div className="translation-content">
        <div className="translation-section">
          <span>हिंदी</span>
          <p className="translation-hindi-text">
            {hindi}
          </p>
        </div>

        <div className="translation-section">
          <span>🔤 HindEnglish</span>
          <p className="translation-hindenglish-text">
            {hindEnglish}
          </p>
        </div>

        <div className="translation-section">
          <span>🇬🇧 English Meaning</span>
          <p>{english}</p>
        </div>
      </div>
    </div>
  );
};

export default Translation;