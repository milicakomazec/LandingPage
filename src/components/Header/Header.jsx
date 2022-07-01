import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img
          className="header-img"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-landing-page-logo.png"
          alt="original trombones logo"
        ></img>
      </div>
      <div className="nav-bar">
        <ul className="nav-bar-list">
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">How It Works</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
