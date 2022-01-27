import React from "react";

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://www.vtdesignz.com/wp-content/uploads/2016/06/about-us-banner.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        paddingTop: "250px",
        paddingBottom: "260px",
      }}
    >
      <div className="container">
        <div className="py-4">
          <h1 style={{ color: "white", marginBottom: "15px" }}>About Us</h1>
          <p
            className="lead"
            style={{ color: "white", background: "black", padding: "15px 0" }}
          >
            This project uses OpenMaps API to locate and to calculate the
            distance between the locations and provides the shortest distance
            between the selected points. This project helps tourists to find
            differnt tourist places near the city they are planning to visit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
