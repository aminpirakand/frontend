import React, { useContext } from 'react'
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="Productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <dic className="productdisplay-right-price-old">
            ${product.old_price}
          </dic>
          <dic className="productdisplay-right-price-new">
            ${product.new_price}
          </dic>
        </div>
        <div className="productdispaly-right-description">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </div>
        <div className="productdisplay-right-size">
          <div className="productdisplay-right-sizes">
            <label htmlFor="size">انتخاب سایز: </label>
            <select className='slected-size' name="sizes" id="size">
              <option value="small">S</option>
              <option value="mediume">M</option>
              <option value="x-large">XL</option>
              <option value="xx-large">XXL</option>
            </select>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>افزودن به سبد خرید</button>
        <p className="productdisplay-right-category">
          <span>دسته بندی: </span>زنانه, تیشرت, کراپ تاپ
        </p>
        <p className="productdisplay-right-category">
          <span>تگ: </span>جدید
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay