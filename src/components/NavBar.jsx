import React, { useState } from "react";

const NavBar = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header-container">
      <div className="swiggy-logo-container">
        <img
          className="swiggy-logo"
          alt="swiggy-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
        ></img>
      </div>
      <div className="header-side-list-container">
        <h2>About</h2>
        <h2>Cart</h2>
        <h2>Offers</h2>
        <h2>Cart</h2>
      </div>
      <div>
        <button
          className="loginBtn"
          onClick={() => {
            setBtnName("LogOut");
            console.log("Btn : ", btnName);
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
