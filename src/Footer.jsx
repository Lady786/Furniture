import group from "./assets/images/group.svg";
import protection from "./assets/images/protection.svg";
import shipping from "./assets/images/shipping.svg";
import support from "./assets/images/support.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="footer__top w-full h-[270px] border m-[auto] flex items-center justify-around bg-[#FAF3EA]">
                <div className="quality flex gap-4 w-[337px] h-[70px]">
                    <img src={group} alt="" />
                    <h1 className="font-bold text-[25px]">High Quality <br /> <span className="text-[20px] text-[#898989] font-thin">crafted from top materials</span></h1>
                </div>
                <div className="protection flex gap-4  w-[337px] h-[70px]">
                    <img src={protection} alt="" />
                    <h1 className="font-bold text-[25px]">Warranty Protection <br /> <span className="text-[20px] text-[#898989] font-thin">Over 2 years</span></h1>
                </div>
                <div className="shipping flex gap-4  w-[337px] h-[70px]">
                    <img src={shipping} alt="" />
                    <h1 className="font-bold text-[25px]">Free Shipping<br /> <span className="text-[20px] text-[#898989] font-thin">Order over 150 $</span></h1>
                </div>
                <div className="support flex gap-4  w-[337px] h-[70px]">
                    <img src={support} alt="" />
                    <h1 className="font-bold text-[25px]">24 / 7 Support <br /> <span className="text-[20px] text-[#898989] font-thin">Dedicated support</span></h1>
                </div>


            </div>
            <div className="footer__bottom w-full h-[400px] m-[auto] flex justify-around pt-[30px]">
                <div className="funiro  w-[172px] flex flex-col justify-between h-[150px]">
                    <h1 className="font-bold text-[32px]">Funiro.</h1>
                    <p className="text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                </div>
                <div className="footer__links flex flex-col justify-between h-[312px] ">
                    <p className="text-[#9F9F9F] text-[24px]">Links</p>
                    <Link to="/" >Home</Link>
                    <Link to="/shop" >Shop</Link>
                    <Link to="/about" >About</Link>
                    <Link to="/contact" >Contact</Link>
                </div>
                <div className="footer__help flex flex-col justify-between h-[212px]">
                    <p className="text-[#9F9F9F] text-[24px]">Help</p>
                    <Link to="#" >Payment Options</Link>
                    <Link to="#" >Returns</Link>
                    <Link to="#" >Privacy Policies</Link>
                </div>
                <div className="footer__news flex flex-col justify-between h-[100px]">
                    <p className="text-[#9F9F9F] text-[24px]">Newsletter</p>
                    <p className="text-[#9F9F9F] text-[20px]">Enter Your Email Address <span className="text-black underline">SUBSCRIBE</span></p>
                   
                </div>
            </div>
            <div className="info m-[auto]  w-[1440px] ">
                <hr className="w-[1240px] border m-[auto]" />
                <p className="text-[16px] mt-[20px] ml-[100px]">2023 furino. All rights reverved</p>
            </div>
                

        </div>
    )
}

export default Footer