import cart from "../assets/images/mainImg.png";
import cartLogo from "../assets/images/cart.logo.svg";
import product from "../assets/images/product.svg";
import del from "../assets/images/del.svg";
import './shop.css'
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <div className="shop wh-[1440px] h-[850px]  m-auto">

<img className="relativa" src={cart} alt="" />
<div className="cart__logo absolute mt-[-250px]  ml-[650px] ">
<img className="ml-[10px]" src={cartLogo} alt="" />
<p className="text-[48px] text-center">Cart</p>
<p className="text-center">Home && Cart</p>

</div>
 <div className="cart__info h-[550px] flex justify-around pt-[50px]">
         <div className="product w-[817px] h-[215px] border">
          <div className="shop__navbar w-[100%] h-[55px]  bg-[#F9F1E7] flex justify-around items-center">
           <Link>Product</Link>
           <Link>Price</Link>
           <Link> Quality</Link>
           <Link>Subtotal</Link>
          </div>
          <div className="shop__product flex justify-around items-center">
          <img className="mt-[20px]" src={product} alt="" />
          <p className="text-[#9F9F9F]">Asgaard sofa</p>
          <p className="text-[#9F9F9F]">Rs. 250,000.00</p>
          <p >Rs. 250,000.00</p>
          <img src={del} alt="" />

          </div>

         </div>
         <div className="price w-[390px] h-[393px] border flex flex-col items-center bg-[#F9F1E7]">
          <p className="text-[32px] font bold text-center">Cart Totals</p>
         <div className="sub_total flex justify-between w-[250px] mt-[50px]">
          <p>Subtotal</p>
          <p>Rs. 250,000.00</p>
         </div>
         <div className="total flex justify-between w-[250px] mt-[30px]">
          <p>Total</p>
          <p className="text-[#B88E2F] text-[20px]">Rs. 250,000.00</p>
         </div>
         <button className="p-[10px] pl-[30px] pr-[30px] rounded-2xl border border-black mt-[40px]">Check Out</button>
         </div>
        </div>
        </div>
       

      </div>
   
  )
}

export default Shop