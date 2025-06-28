import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`container-fluid mt-5 ${styles.footer}`}>
      <div className="row">
        <div className="col-md-2 col-sm-6 mt-5">
          <h6>ABOUT</h6>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Capical Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className="col-md-2 col-sm-6 mt-5">
          <h6>GROUP COMPANIES</h6>
          <ul>
            <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
          </ul>
        </div>
        <div className="col-md-2 col-sm-6 mt-5">
          <h6>HELP</h6>
          <ul>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Return</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="col-md-2 col-sm-6 mt-5">
          <h6>CONSUMER POLICY</h6>
          <ul>
            <li>Cancellation & Return</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
          </ul>
        </div>
        <div className={`col-md-2 col-sm-6 mt-5 ${styles.bor}`}>
          <h6>Mail Us</h6>
          <p>
            Capital Shop Internet Private Limited, Buildings Alyssa Begonia &
            Clove Embassy Tech Village, Outer Ring Road, Devarbeensanahalli
            Village, Bengaluru, 560103, Karnataka, India
          </p>
          <h6>Socials</h6>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com/" target="_blank">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 mt-5">
          <h6>Registered Office Address</h6>
          <p>
            Buildings Alyssa, Begonia & Capital Internet Private Limited, Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107
            <br />
            Telephone: <a href="#">044-45614700 </a> /
            <a href="#"> 044-67415800</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
