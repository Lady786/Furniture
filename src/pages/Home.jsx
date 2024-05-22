import home from "../assets/images/home.jpg";
import cart1 from "../assets/images/cart1.png";
import cart2 from "../assets/images/cart2.png";
import cart3 from "../assets/images/cart3.png";
import img from "../assets/images/image.png";
import Products from "./Products";
// import img1 from "../assets/images/homeImg/img1.png";
// import img8 from "../assets/images/homeImg/img8.png";
// import img2 from "../assets/images/homeImg/img2.png";
// import img3 from "../assets/images/homeImg/img3.png";
// import img4 from "../assets/images/homeImg/img4.png";
// import img5 from "../assets/images/homeImg/img5.png";
// import img6 from "../assets/images/homeImg/img6.png";
// import img7 from "../assets/images/homeImg/img7.png";
// import {Component, useState, useEffect } from "react";


const Home = () => {
  // const [cards, setCards] = useState([]);
  // useEffect(()=>{
  //   const getCategories = async ()=>{
  //     const response = awaiit fetch(backendRrl);
  //     const categories = await response.json();
  //     setCards(categories);
  //   };
  //   getCategories();
  // } , [])
  return (

    <div className="relative home w-[1540px] m-auto">
      <img className="w-[100%]" src={home} alt="" />
      <div className="info  w-[1440px] m-[auto] ">
        <div className=" absolute collection w-[643px] h-[443px] border mt-[-550px] ml-[730px] bg-[#FFF3E3] pt-[30px] pl-[40px]">
          <p>New Arrival</p>
          <h1 className="font-bold text-[52px] text-[#B88E2F] w-[400px]">Discover Our New Collection</h1>
          <p className="w-[450px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button className="p-[10px] pl-[30px] pr-[30px] mt-[50px] bg-[#B88E2F] text-white text-[10px]">BUY NOW</button>
        </div>
      </div>

      <div className="range w-[1440px] m-auto ">
        <div className="decors w-[1183px] h-[685px] m-auto  ">
          <div className="decor__text pt-[50px]">
            <p className="text-[32px] font-bold text-center">Browse The Range</p>
            <p className="text-[20px] text-[#666666] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="decor__card flex justify-between">
            <div className=" card w-[381px] h-[520px] ">
              <img src={cart2} alt="" />
              <p className="  mt-[5px] text-24px font-bold text-center"> 
              Living</p>
            </div>
            <div className=" card w-[381px] h-[520px] ">
              <img src={cart3} alt="" />
              <p className="  mt-[5px] text-24px font-bold text-center"> 
              Bedroom</p>
            </div>
            <div className=" card w-[381px] h-[520px] ">
              <img src={cart1} alt="" />
              <p className="  mt-[5px] text-24px font-bold text-center"> 
                Dining</p>
            </div>
          </div>
        </div>


      </div>
      <div className="our__products w-[1440px] h-[900px]  m-auto flex flex-col items-center justify-around">
        <p className="font-bold text-center text-[40px] mt-[20px]">Our Products</p>
 
<Products/>
       


 <button className="text-[16px] text-[#B88E2F] border border-1 border-[#B88E2F] p-[10px] ">Show more</button>
      </div>
      <div className="rooms w-[1440px] border bg-[#FCF8F3] h-[670px] m-auto mt-[30px] flex flex-row justify-around items-center">
       <div className="rooms__text w-[522px] h-[180px] flex flex-col justify-between">
<p className="font-bold text-[40px]">50+ Beautiful rooms 
inspiration</p>
<p className="text-[16px] text-[#616161] font-thin">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
<button className="bg-[#B88E2F] text-white text-[16px] p-[10px] w-[300px] ">Explore More</button>
       </div>
     <img src={img} alt="" />

      </div>
    </div>




  )
}

export default Home