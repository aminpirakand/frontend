import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
const Item = (props) => {
  return (
    <>
      <Link style={{ textDecoration: "none" }} to={`/product/${props.id}`}>
        <div className="item">
          <img src={props.image} alt="" />
          <p>{props.name}</p>
          <div className="item-prices">
            <div className="item-price-new">{props.new_price + "  "}ريال</div>
            <div className="item-price-old">{props.old_price + "  "}ريال</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Item;
