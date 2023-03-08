import React from "react";
import "./Summary.css";
import Category from "./Category";

function Summary() {
  return (
    <div className="summary-container">
      <h2 className="summary-header">Summary</h2>
      <Category categoryName="Reaction" categoryScore="80" />
      <Category categoryName="Memory" categoryScore="92" />
      <Category categoryName="Verbal" categoryScore="61" />
      <Category categoryName="Visual" categoryScore="72" />
      <button className="continue-button">Continue</button>
    </div>
  );
}

export default Summary;
