import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <h2 className="footer-logo">PROPERTYPULSE</h2>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li><a href="#">Rent Property</a></li>
              <li><a href="#">Advertise</a></li>
              <li><a href="#">Our agent</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Getting started</a></li>
              <li><a href="#">Help center</a></li>
              <li><a href="#">Report a bug</a></li>
              <li><a href="#">Chat support</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact us</h4>
            <p>contact@propertypulse.com</p>
            <p>(414) 687-5892</p>
            <p>Karnataka, India</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>&copy; PropertyPulse - 2024</p>
        <p><a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
