import React, { useState } from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../mock/constant";
import useOnlineStatus from "../mock/useOnlineStatus";

const NavBar = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineState = useOnlineStatus();

  console.log("Online State in Navbar : ", onlineState);

  return (
    <div className="flex justify-between">
      <div className="swiggy-logo-container">
        <img
          className="w-20 rounded-4xl m-2"
          alt="swiggy-logo"
          src={`${LOGO_URL}`}
          // src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
        ></img>
      </div>
      <div className="flex">
        <ul className="flex m-2 p-2">
          <li className="p-2">{onlineState === "true" ? "🟢" : "🔴"}</li>
          <li className="p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2">
            {/* <a href="/cart">Cart</a> */}
            <Link to="/cart">Cart</Link>
          </li>
        </ul>

        <div>
          <button
            className="p-2"
            onClick={() => {
              setBtnName("LogOut");
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
      {/* <div>
        <button
          className="loginBtn"
          onClick={() => {
            setBtnName("LogOut");
          }}
        >
          {btnName}
        </button>
      </div> */}
    </div>
  );
};

export default NavBar;
