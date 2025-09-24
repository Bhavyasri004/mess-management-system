import React from "react";
import "./NutritionalInfo.css"; // we’ll style separately

function NutritionalInfo() {
  return (
    <section className="nutrition">
      <h2>Nutritional Information</h2>
      <p>All our meals are carefully planned to provide balanced nutrition</p>
      <div className="nutrition-stats">
        <div>
          <h3>2200+</h3>
          <p>Daily Calories</p>
        </div>
        <div>
          <h3>65g</h3>
          <p>Protein</p>
        </div>
        <div>
          <h3>8+</h3>
          <p>Vegetables</p>
        </div>
        <div>
          <h3>100%</h3>
          <p>Fresh Ingredients</p>
        </div>
      </div>
    </section>
  );
}

export default NutritionalInfo;
