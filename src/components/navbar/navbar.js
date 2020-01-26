import React from "react";

import logo from "../../assets/img/yi-nails.png";
import "./navbar.css";

const NavBar = props => {
  const [activeMenu, setActiveMenu] = React.useState(false);

  const handleBurgerClick = () => {
    const links = document.querySelectorAll(".nav__links a");

    setActiveMenu(!activeMenu);

    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });
  };

  return (
    <nav className="nav">
      <div className="nav__logo-container">
        <div className="nav__burger" onClick={handleBurgerClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <a href="#" className="nav__logo" target="" rel="">
          <img src={logo} className="logo__img" alt="" />
        </a>
      </div>
      <div className={"nav__links " + (activeMenu ? "nav__links--active" : "")}>
        <a className="nav__link" href="#" target="" rel="">
          <div>Home</div>
        </a>

        {/* <a className="nav__link" href="#" target="" rel="">
          <div>About</div>
        </a>
        <a className="nav__link" href="#" target="" rel="">
          <div>Services</div>
        </a>
        <a className="nav__link" href="#" target="" rel="">
          <div>Gallery</div>
        </a> */}
        <a className="nav__link" href="#blog" target="_parent" rel="">
          <div>Blog</div>
        </a>
        <a className="nav__link" href="#contact" target="" rel="">
          <div>Contact</div>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
