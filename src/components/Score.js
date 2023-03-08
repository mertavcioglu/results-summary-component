import React from "react";
import "./Score.css";

function Score() {
  return (
    <div className="score-container">
      <h2 className="score-header">Your Result</h2>
      <div className="score-circle">
        <span className="score-big-number">76</span> of 100
      </div>
      <h1 className="score-comment">Great</h1>
      <p className="score-paragraph">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default Score;
