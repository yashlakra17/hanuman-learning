import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ current = 1, total = 43 }) => {
  const safeTotal = total > 0 ? total : 1;
  const safeCurrent = Math.min(Math.max(current, 0), safeTotal);

  const progress = (safeCurrent / safeTotal) * 100;

  return (
    <div className="progress-container">
      <div className="progress-info">
        <span>Progress</span>

        <span>
          {safeCurrent} / {safeTotal}
        </span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="progress-text">
  {safeCurrent === 0
    ? "Not started"
    : `${Math.round(progress)}% completed`}
</p>
    </div>
  );
};

export default ProgressBar;