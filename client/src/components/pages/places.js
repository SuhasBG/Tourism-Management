import React from "react";
import Axios from "axios";
import { useState } from "react";

function Places() {
  const [placesList, setPlacesList] = useState([]);

  function getPlaces() {
    Axios.get("http://localhost:3000/places", { crossdomain: true }).then(
      (response) => {
        setPlacesList(response.data);
        console.log(response);
      }
    );
  }
  return (
    <div
      style={{
        backgroundImage: `url("https://www.nobroker.in/blog/wp-content/uploads/2021/11/Karnataka-Land-Records.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        paddingTop: "250px",
        paddingBottom: "261px",
      }}
    >
      <div className="container">
        <div className="py-4">
          <h1 style={{ paddingBottom: "15px" }}>
            Click here to get the list of places
          </h1>
          <div>
            <button onClick={getPlaces}>Places</button>
          </div>
          {placesList.map((item, index) => (
            <div className="place" style={{ background: "white" }}>
              <h6>
                <b>Place Id : </b>{item.pid}
              </h6>
              <h6><b>Place Name :</b> {item.place_name}</h6>
              <h6><b>Category : </b>{item.category}</h6>
              <h6><b> Description :</b> {item.description}</h6>
              <h6><b>Address :</b> {item.address}</h6>
              <h6><b>Website : </b>{item.website}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Places;
