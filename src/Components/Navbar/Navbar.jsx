import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from '../Assets/dropdown_icon.png'
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef()
  const dropdown_toggle = (e)=>{
    menuRef.current.classList.toggle('nav_menu-visible');
    e.target.classList.toggle('open');
  }



  return (
    <div className="navbar">
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none", color:'white'}} to="/cart">
          <div className="cart-icon">
            <img src={cart_icon} alt=" ایکون سبد خرید" />
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/login">
          <button>ورود</button>
        </Link>
      </div>
      <img className="nav-dropdown" src={nav_dropdown} onClick={dropdown_toggle}/>
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            فروشگاه
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shose");
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/womens">
            زنانه
          </Link>
          {menu === "shose" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("pants");
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/mens">
            مردانه
          </Link>
          {menu === "pants" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shirt");
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/kids">
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
