import React from "react";
import "../Sociallinks/sociallinks";
import SocialLinks from "../Sociallinks/sociallinks";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer_section">
      <div className="footer_wrapper">
        <div className="footer_address">
          <h2>Address</h2>
          <p>Shivsahi Darshan Apartment</p>
          <p> Ajdegaon, Dombivali (E), 421203</p>
        </div>
        <div className="footer_address">
          <h2>Mobile Number</h2>
          <p> +91 7709762057</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer_links">
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
