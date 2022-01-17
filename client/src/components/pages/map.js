import React from "react";
import "./map.css";

const Maps = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Map Page</h1>
        <div>
          <button onClick={() => (window.location.href = "mapOfMysuru.html")}>
            Map of Mysuru
          </button>
          <button>Map of Bengaluruu</button>
          <button>Map of Mangaluru</button>
          <button>Map of Vijayapura</button>
          <button>Map of Shivamogga</button>
        </div>
      </div>
    </div>
  );
};

export default Maps;
