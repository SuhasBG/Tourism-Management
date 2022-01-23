import React from "react";
import "./map.css";

const Maps = () => {
  return (
    <div style={{ 
      backgroundImage: `url("https://gumlet.assettype.com/swarajya%2F2018-08%2F31b7ce59-d0df-4494-98a9-7cb36f51bccb%2F56b892ff_af3e_4dce_838d_459757f88f16.png?format=auto")`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      paddingTop: '250px',
      paddingBottom: '261px'  
    }}>
      <div className="container">
      <div className="py-4">
        <h1 style={{paddingBottom: '15px'}}>Map Page</h1>
        <div>
          <button onClick={() => (window.location.href = "mapOfMysuru.html")}>
            Map of Mysuru
          </button>
          {"\n"}
          <button
            onClick={() => (window.location.href = "mapOfBengaluru.html")}
          >
            Map of Bengaluru
          </button>
          {"\n"}
          <button
            onClick={() => (window.location.href = "mapOfMangaluru.html")}
          >
            Map of Mangaluru
          </button>
          {"\n"}
          <button
            onClick={() => (window.location.href = "mapOfVijayapura.html")}
          >
            Map of Vijayapura
          </button>
          {"\n"}
          <button
            onClick={() => (window.location.href = "mapOfShivamogga.html")}
          >
            Map of Shivamogga
          </button>
        </div>
      </div>
      </div>
    </div>
    
  );
};

export default Maps;
