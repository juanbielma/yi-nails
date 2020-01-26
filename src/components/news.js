import React from "react";
import banner from "../assets/img/nails-1.png";

const News = props => (
  <div className="main">
    <img src={banner} alt="Banner img" className="bannerImg" />

    <div className="banner__info">
      <h1 className="banner__title">Lorem Ipsum</h1>
      <p className="banner__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <button className="banner__button">Agenda tu cita</button>
    </div>
  </div>
);

export default News;
