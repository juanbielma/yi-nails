import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./header.css";

const Header = props => {
  return (
    <header className="header">
      <div className="header__contact-info">
        <span>tel. (55) 1234 - 1234</span>
        <span>Opening hours: Mon-Sat 9:00 - 15:00 hrs </span>
      </div>

      <div className="header__social-media">
        <a href="#">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </header>
  );
};

export default Header;
