import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/cart">
          <div className="cart-icon">
            <img src={cart_icon} alt=" ایکون سبد خرید" />
            <div className="nav-cart-count">{getTotalCartItems()}</div>
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
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            فروشگاه
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shose");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/womens">
            زنانه
          </Link>
          {menu === "shose" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("pants");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/mens">
            مردانه
          </Link>
          {menu === "pants" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shirt");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/kids">
            بچه گانه
          </Link>
          {menu === "shirt" ? <hr /> : <></>}
        </li>
      </ul>
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="nav-logo">
          <p>X-SHOP</p>

          <img src={logo} alt="لوگو وبسایت" />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
