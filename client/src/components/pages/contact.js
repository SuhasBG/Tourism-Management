import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://media.istockphoto.com/photos/communication-symbols-contact-info-symbols-picture-id1201366596?k=20&m=1201366596&s=612x612&w=0&h=6swaFuvPnPzJnKYqmbni8Gzbu7WFDBvWGguDFlamm4k=")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        padding: "200px",
      }}
    >
      <div className Name="container">
        <h1 style={{ color: "black", marginBottom: 0 }}>
          Suhas B G : suhasbg448@gmail.com
        </h1>
        <h1 style={{ color: "black", marginBottom: 0 }}>
          Niranjan : nirudikshi27@gmail.com
        </h1>
        <h1 style={{ color: "black", marginBottom: 0 }}>
          Sushanth S : raosushanth511@gmail.com
        </h1>
        <h1 style={{ color: "black", marginBottom: 0 }}>
          Yogesh K M : murthyogesh@gmail.com
        </h1>
        <h1 style={{ color: "black", marginTop: 0 }}></h1>
      </div>

      {/* <div className="container">
        <table>
          <tr>
            <h1 style={{ color: "black", marginBottom: 0 }}>
              <td>Suhas B G </td>
              <td>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                  suhasbg448@gmail.com
                </a>
              </td>
            </h1>
          </tr>
          <tr>
            <td>Niranjan Dikshith T V </td>
            <td>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                nirudikshi27@gmail.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Sushanth S </td>
            <td>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                raosushanth511@gmail.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Yogesh K M </td>
            <td>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                murthyogesh@gmail.com
              </a>
            </td>
          </tr>
        </table> */}
      {/* </div> */}
    </div>
  );
};

export default Contact;
