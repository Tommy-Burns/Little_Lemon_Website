import React from "react";
import logo from "../assets/imgs/Logo.svg";
import { Link } from "react-scroll";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Logo" />

      <div className="navigation">
        <h3>Doormat Navigation</h3>
        <div className="footer-links">
          <h4>Home</h4>
          <h4>Menu</h4>
          <h4>Testimonials</h4>
          <h4>About</h4>
        </div>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <div className="footer-links">
          <h4>Address</h4>
          <h4>Phone Number</h4>
          <h4>Email</h4>
        </div>
      </div>
      <div className="socials">
        <h3>Contact</h3>
        <div className="footer-links">
          <h4>Address</h4>
          <h4>Phone Number</h4>
          <h4>Email</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
