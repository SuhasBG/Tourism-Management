import React from "react";

const Home = () => {
  return (
    <div style={{ 
      backgroundImage: `url("https://www.backpacknxplore.com/wp-content/uploads/2021/05/cover.jpg")`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      paddingTop: '500px',
      paddingBottom: '110px'  
    }}>
      <div className="container">
      <div className="py-4">
        <h4 style={{color: 'white'}}>
          Use the navigation bar to use the different functionalities of this
          website.
        </h4>
      </div>
    </div>
    </div>
    
  );
};

export default Home;
