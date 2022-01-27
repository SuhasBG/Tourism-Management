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
    <div
      style={{
        backgroundImage: `url("https://www.tripsavvy.com/thmb/oOZHSZWDwEGuY-yh3J9Ah-h7O98=/960x640/filters:no_upscale():max_bytes(150000):strip_icc()/36961551_464494194020966_3634414764827869184_n-5b53e86346e0fb005bed59d5.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        paddingTop: "250px",
        paddingBottom: "285px",
      }}
    >
      <div className="container">
        <div className="py-4">
          <h1 style={{ color: "white", paddingBottom: "15px" }}>
            Click here to get the list of restaurants
          </h1>
          <div>
            <button onClick={getRestaurants}>Restaurants</button>
          </div>
          {restaurantsList.map((item, index) => (
            <div className="restaurant" style={{ background: "white" }}>
              <h6>
                <b>Restaurant Id : </b>
                {item.rid}
              </h6>
              <h6>
                <b>Restaurant Name : </b>
                {item.rname}
              </h6>
              <h6>
                <b>Address : </b>
                {item.address}
              </h6>
              <h6>
                <b>Rating : </b>
                {item.rating}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Restaurants;
