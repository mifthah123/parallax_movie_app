import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header__container">
      <img src="/logo.webp" alt="" height={50} width={50} />
      <div className="nav__container">
        <p>About</p>
        <p>Movies</p>
        <p>Contact</p>
      </div>
    </header>
  );
};

export default Header;
