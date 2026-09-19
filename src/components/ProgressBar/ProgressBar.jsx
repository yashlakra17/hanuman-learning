import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ current = 1, total = 40 }) => {
  const progress = Math.min((current / total) * 100, 100);

  return (
    <div className="progress-container">
      <div className="progress-info">
        <span>Progress</span>
        <span>
          {current} / {total}
        </span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="progress-text">
        {Math.round(progress)}% completed
      </p>
    </div>
  );
};

export default ProgressBar;
