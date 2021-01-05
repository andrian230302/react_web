import React from "react";
import "./Footer.css";
import ImageModel1 from "../../Icons/twitter.svg";
import ImageModel2 from "../../Icons/facebook.svg";
import ImageModel3 from "../../Icons/instagram.svg";

const Footer = () => {
  return (
    <div className="wrapper">
      <div className="logo_wrapper">
        <img
          src={ImageModel1}
          alt="ffff"
          className="icon_base"
        />
         <img
          src={ImageModel2}
          alt="ffff"
          className="icon_base"
        />
         <img
          src={ImageModel3}
          alt="ffff"
          className="icon_base"
        />
    
      </div>
      <div className="styled_text">
      <h1>
      © IDK shop
      </h1>
    </div>
    </div>
    
  );
};

export default Footer;
