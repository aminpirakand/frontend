import React from "react";
import "./Offers.css";
import exclusive from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>تخفیف برای شما</h1>
        <h1>به مدت محدود</h1>
        <p>فقط محصولات پر فروش</p>
        <button>همین حالا وارد شوید</button>
      </div>
      <div className="offers-right">
        <img src={exclusive} alt="" />
      </div>
    </div>
  );
};

export default Offers;
