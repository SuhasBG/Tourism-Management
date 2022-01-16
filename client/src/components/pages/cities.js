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
    <div className="container">
      <div className="py-4">
        <h1>Click here to get the list of cities</h1>
        <div className="container">
          <button onClick={getCities}>Cities</button>
        </div>
        {citiesList.map((item, index) => (
          <div key={item.cname + index}>
            <h5>{item.cid + item.cname}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cities;
