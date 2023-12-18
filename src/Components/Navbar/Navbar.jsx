import React, { useState } from 'react'
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  return (
    <div className="navbar">
      <div className="nav-login-cart">
        <div className="cart-icon">
          <img src={cart_icon} alt=" ایکون سبد خرید" />
          <div className="nav-cart-count">0</div>
        </div>
        <button>ورود</button>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          فروشگاه
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shose");
          }}
        >
          کفش
          {menu === "shose" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("pants");
          }}
        >
          شلوار
          {menu === "pants" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shirt");
          }}
        >
          پیراهن
          {menu === "shirt" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-logo">
        <img src={logo} alt="لوگو وبسایت" />
        <p>SKIPER</p>
      </div>
    </div>
  );
}

export default Navbar