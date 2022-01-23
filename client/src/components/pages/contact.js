import React from "react";

const Contact = () => {
  return (
    <div style={{ 
      backgroundImage: `url("https://media.istockphoto.com/photos/communication-symbols-contact-info-symbols-picture-id1201366596?k=20&m=1201366596&s=612x612&w=0&h=6swaFuvPnPzJnKYqmbni8Gzbu7WFDBvWGguDFlamm4k=")`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      padding: '300px'  
    }}>
      <div className Name="container">
      <h1 style={{color: 'black', marginBottom: 0}}>Email : suhasbg448@gmail.com</h1>
      <h1 style={{color: 'black', marginTop: 0}}>Phone : 8431551520</h1>
      </div>
    </div>
    
  );
};

export default Contact;
