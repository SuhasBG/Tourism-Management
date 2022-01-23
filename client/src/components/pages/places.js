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
    <div style={{ 
      backgroundImage: `url("https://www.nobroker.in/blog/wp-content/uploads/2021/11/Karnataka-Land-Records.jpg")`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      paddingTop: '250px',
      paddingBottom: '261px'  
    }}>
      <div className="container">
      <div className="py-4">
        <h1 style={{paddingBottom: '15px'}}>Click here to get the list of places</h1>
        <div>
          <button onClick={getPlaces}>Places</button>
        </div>
        {placesList.map((item, index) => (
          <div className="place">
            <h6>Place Id : {item.pid}</h6>
            <h6>Place Name : {item.place_name}</h6>
            <h6>Category : {item.category}</h6>
            <h6> Description : {item.description}</h6>
            <h6>Address : {item.address}</h6>
            <h6>Website : {item.website}</h6>
          </div>
        ))}
      </div>
      </div>
    </div>
    
  );
}

export default Places;
