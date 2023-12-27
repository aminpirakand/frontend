import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>محصولات</p>
        <p>توضیحات</p>
        <p>قیمت</p>
        <p>تعداد</p>
        <p>مجموع</p>
        <p>حذف</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p> {e.new_price} ریال</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]} ریال</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt="remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      {console.log(getTotalCartAmount())}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>مجموع سبد خرید</h1>
          <div>
            <div className="cartitems-total-item">
              <p>مجموع</p>
              <p>{getTotalCartAmount()}ریال</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>هزینه ارسال</p>
              <p>رایگان</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>مجموع</h3>
              <h3>{getTotalCartAmount()}ریال</h3>
            </div>
          </div>
          <button>اقدام به پرداخت</button>
        </div>
        <div className="cartitems-promocode">
          <p>اگر کد تخفیف دارید اینجا وارد کنید</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="کد تخفیف" />
            <button>ارسال</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
