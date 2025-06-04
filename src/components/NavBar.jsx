import React, { useState } from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../mock/constant";

const NavBar = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header-container">
      <div className="swiggy-logo-container">
        <img
          className="swiggy-logo"
          alt="swiggy-logo"
          src={`${LOGO_URL}`}
          // src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
        ></img>
      </div>
      <div className="header-side-list-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {/* <a href="/cart">Cart</a> */}
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <div>
        <button
          className="loginBtn"
          onClick={() => {
            setBtnName("LogOut");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
