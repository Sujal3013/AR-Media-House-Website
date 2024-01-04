import React from "react";
import "../styles/Wonders.css";

const Wonders = () => {
  return (
    <div className="Card">
      <div className="Wonders-flex">
        <span>
          <h1>WE CAN DO</h1>
          <p>wonders for you</p>
        </span>
        <span>
          <button>Let's work together</button>
        </span>
        <span>{/* SVG OR ANIMATION */}</span>
      </div>
    </div>
  );
};

export default Wonders;
