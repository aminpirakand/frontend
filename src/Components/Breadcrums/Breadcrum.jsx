import React from 'react'
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png"
const Breadcrum = (props) => {
  const {product} = props;
  return (
    <div className="breadcrum">
      خانه <img src={arrow_icon} /> فروشگاه <img src={arrow_icon} alt="" />{product.name} <img src={arrow_icon} alt="" /> {product.category}
    </div>
  );
}

export default Breadcrum;