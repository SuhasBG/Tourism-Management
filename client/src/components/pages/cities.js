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
        {/* <table class="center">
          <tr>
            <th>City Id</th>
            <th>City Name</th>
          </tr>
          <tr> */}
        {citiesList.map((item, index) => (
          <div className="city">
            <h6>{item.cid}</h6>
            <h6>{item.cname}</h6>
          </div>
        ))}
        {/* </tr>
        </table> */}
      </div>
    </div>
  );
}

export default Cities;
