import React from "react";
import Axios from "axios";
import { useState } from "react";

function Cities() {
  const [citiesList, setCitiesList] = useState([]);

  function getCities() {
    Axios.get("http://localhost:3000/cities", { crossdomain: true }).then(
      (response) => {
        setCitiesList(response.data);
        console.log(response);
      }
    );
  }
  return (
    <div
      style={{
        backgroundImage: `url("http://www.esri.com/~/media/Images/Content/news/releases/17-3qtr/esri-cityengine-2017-makes-urban-planning-more-efficient-lg.gif")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        paddingTop: "250px",
        paddingBottom: "261px",
      }}
    >
      <div className="container">
        <div className="py-4" style={{display: "flex", flexDirection:"column", justifyContent:"center",alignItems:"center",alignContent:"center"}}>
          <h1
            style={{
              color: "white",
              marginBottom: "15px",
              padding: "15px 0",
              background: "black",
            }}
          >
            Click here to get the list of cities
          </h1>
          <div className="container">
            <button onClick={getCities}>Cities</button>
          </div>

          {citiesList.map((item, index) => (
            <div
              className="city"
              style={{
                background: "white",
                alignContent: "center",
                paddingLeft: "50px",
              }}
            >
              <h6>{item.cid}</h6>
              <h6>{item.cname}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cities;
