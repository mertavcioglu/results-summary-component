import React from "react";
import "./Container.css";
import Score from "./Score";
import Summary from "./Summary";

function Container() {
  return (
    <div className="main-container">
      <Score />
      <Summary />
    </div>
  );
}

export default Container;
