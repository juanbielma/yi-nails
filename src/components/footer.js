import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = props => (
  <footer className="footer">
    {/* <div className="footer__bg"></div> */}
    <div className="footer__information">
      <div className="footer__navegation">
        <p className="footer__title">Navegation</p>
        <ul>
          <li className="footer__link">
            <a href="#">Home</a>
          </li>
          <li className="footer__link">
            <a href="#">About</a>
          </li>
          <li className="footer__link">
            <a href="#">Services</a>
          </li>
          <li className="footer__link">
            <a href="#">Gallery</a>
          </li>
          <li className="footer__link">
            <a href="#">Blog</a>
          </li>
          <li className="footer__link">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer__contact-info">
        <p className="footer__title">Contact info</p>
        <p className="footer__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <p className="footer__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <p className="footer__content">Tel: 55-1234-5678</p>
        <p className="footer__content">Tel: 55-1234-5678</p>
      </div>
      <div className="footer__media">
        <p className="footer__title">Our social network</p>

        <div className="footer__social-media">
          <a className="footer__icon" href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a className="footer__icon" href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
    <div className="footer__copyrigth">Yi Nails 2019</div>
  </footer>
);

export default Footer;
