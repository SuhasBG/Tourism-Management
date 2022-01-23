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
          <button
            onClick={() => (window.location.href = "mapOfBengaluru.html")}
          >
            Map of Bengaluru
          </button>
          <button
            onClick={() => (window.location.href = "mapOfMangaluru.html")}
          >
            Map of Mangaluru
          </button>
          <button
            onClick={() => (window.location.href = "mapOfVijayapura.html")}
          >
            Map of Vijayapura
          </button>
          <button
            onClick={() => (window.location.href = "mapOfShivamogga.html")}
          >
            Map of Shivamogga
          </button>
        </div>
      </div>
    </div>
  );
};

export default Maps;
