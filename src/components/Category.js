import React from "react";
import "./Category.css";

function Category(props) {
  return (
    <div className={`category-container ${props.categoryName}`}>
      <img
        src={require(`../images/${props.categoryName}.svg`)}
        alt="category-img"
      />
      <h3 className="category-name">{props.categoryName}</h3>
      <h4 className="category-score-container">
        <span className="category-score">{props.categoryScore}</span> / 100
      </h4>
    </div>
  );
}

export default Category;
