import React from 'react'
import "./Header.css"
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import header_image from "../Assets/hero_image.png"
const Main = () => {
  return (
    <div className="header">
      <div className="header-right">
        <img src={header_image} alt="" />
      </div>
      <div className="header-left">
        <h2>جدیدترین محصولات</h2>
        <div className='header-left-des'>
          <div className="header-hand-icon">
            <p>تابستانه</p>
            <img src={hand_icon} alt="" />
          </div>
          <br />
          <br />

        </div>
        <div className="header-latest-btn">
          <div>جدیدترین کالکشن</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main