import React from 'react'
import './CSS/LoginSignup.css'

const LoginSingup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>ورود</h1>
        <div className="loginsignup-fileds">
          <input type="text" placeholder="نام" />
          <input type="email" placeholder="ایمیل" />
          <input type="password" placeholder="رمز ورود" />
        </div>
        <button>ادامه</button>
        <p className="loginsignup-login">
          اگر از قبل اکانت دارید <span>از اینجا وارد شوید</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>اگر قوانین سایت را مطالعه کرده اید ادامه دهید</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSingup