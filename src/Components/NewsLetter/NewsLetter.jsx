import React from 'react'
import "./NewsLetter.css"
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>تخفیف ها را از طریق ایمیل دریافت کنید</h1>
      <p>در خبرنامه ما اشتراک بگیرید و به روز باشید</p>
      <div>
        <input type="email" placeholder='ایمیل خود را وارد کنید' />
        <button>اشتراک</button>
      </div>
    </div>
  );
}

export default NewsLetter