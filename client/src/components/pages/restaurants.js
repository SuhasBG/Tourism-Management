import React from "react";
import Axios from "axios";
import { useState } from "react";

function Restaurants() {
  const [restaurantsList, setRestaurantsList] = useState([]);

  function getRestaurants() {
    Axios.get("http://localhost:3000/restaurants", { crossdomain: true }).then(
      (response) => {
        setRestaurantsList(response.data);
        console.log(response);
      }
    );
  }
  return (
    <div className="container">
      <div className="py-4">
        <h1>Click here to get the list of restaurants</h1>
        <div>
          <button onClick={getRestaurants}>Restaurants</button>
        </div>
        {restaurantsList.map((item, index) => (
          <div key={item.rname + index}>
            <h5>{item.rname}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;
