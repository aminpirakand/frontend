import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/cart">
          <div className="cart-icon">
            <img src={cart_icon} alt=" ایکون سبد خرید" />
            <div className="nav-cart-count">0</div>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/login">
          <button>ورود</button>
        </Link>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            فروشگاه
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shose");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/shoes">
            کفش
          </Link>
          {menu === "shose" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("pants");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/pants">
            شلوار
          </Link>
          {menu === "pants" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shirt");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/shirt">
            پیراهن
          </Link>
          {menu === "shirt" ? <hr /> : <></>}
        </li>
      </ul>
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="nav-logo">
          <p>SKIPER</p>

          <img src={logo} alt="لوگو وبسایت" />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
