import cart from "../assets/images/mainImg.png";
import cartLogo from "../assets/images/cart.logo.svg";
import time from "../assets/images/time.svg";
import phone from "../assets/images/phone.svg";
import location from "../assets/images/location.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [form , setForm] = useState({
  name:"",
  email:"",
  subject:"",
  message:"",
  });
 const navigate = useNavigate();
  const handleChange = (e)=>{
    const {name,value} = e.target;
   setForm((oldForm) =>{
    return{
      ...oldForm,
      [name]: value,
    };
   });
  };

  const handleSubmit = ()=>{
    const {name , email , subject , message} = form;
    if (name && email && subject && message) {
      navigate("/shop");
    } else {
      toast.info('Bosh joylar mavjud! Iltimos toldiring', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
        });
    }
    
  };
  const {name , email , subject, message} = form;
  return (
    <div>
      <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
      <div className="contact m-auto">
      <img className="relativa m-auto" src={cart} alt="" />
<div className="cart__logo absolute mt-[-250px]  ml-[650px] ">
<img className="ml-[40px]" src={cartLogo} alt="" />
<p className="text-[48px] text-center">Contact</p>
<p className="text-center">Home && Cart</p>

</div>
<div className="contact__top text-center">
  <p className="text-[36px] font-bold mt-[50px]" >Get In Touch With Us</p>
  <p className="w-[848px]  m-auto text-[24px] text-[#9F9F9F] mt-[30px]"> For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
</div> 
<div className="contact__main w-[1058px] h-[958px]  m-auto flex justify-between mt-[100px] ">
<div className="user__info w-[393px] h-[537px] mt-[82px]  flex flex-col items-center justify-around ">
  <div className="address flex justify-between w-[300px] ">
    <img className="mt-[-30px]" src={location} alt="" />
    <div className="add w-[212px] h-[72px]">
      <p className="font-bold text-[20px]">Address</p>
      <p>236 5th SE Avenue, New York NY10000, United States</p>
    </div>
  </div>
  <div className="address flex justify-between w-[300px]">
    <img className="mt-[-30px]" src={phone} alt="" />
    <div className="add w-[212px] h-[72px]">
    <p className="font-bold text-[20px]">Phone</p>
      <p>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789 </p>
    </div>
  </div>
  <div className="address flex justify-between w-[300px]">
    <img className="mt-[-30px]" src={time} alt="" />
    <div className="add w-[212px] h-[72px]">
    <p className="font-bold text-[20px]">Working Time</p>
      <p>Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
    </div>
  </div>
</div>
<div className="contact__input w-[635px] h-[723px]  flex flex-col justify-around items-center">
<div className="name">
      <label className="font-bold" htmlFor="">Your name</label> <br />
    <input name="name" value={name} onChange={handleChange} className="pl-[10px] border w-[500px] h-[50px] rounded-2xl mt-[20px]" type="text" placeholder="ABC" />
</div>

<div className="email">
     <label className="font-bold"  htmlFor="">Email address</label> <br />
    <input name="email" value={email} onChange={handleChange} className="pl-[10px] border w-[500px] h-[50px] rounded-2xl mt-[20px] " type="text" placeholder="ABC@gmail.com" />
</div>
 
    
    <div className="subject">
          <label className="font-bold"  htmlFor="">Subject</label> <br />
    <input name="subject" value={subject} onChange={handleChange} className="pl-[10px] border w-[500px] h-[50px] rounded-2xl mt-[20px]" type="text" placeholder="This is a optional" />
    </div>
<div className="message">    <label className="font-bold"  htmlFor="">Message</label> <br />
    <input name="message" value={message} onChange={handleChange } className="pl-[10px] border w-[500px] h-[150px] rounded-2xl mt-[20px]" type="text" placeholder="Hi! i’d like to ask about" />
 </div>
 <button onClick={handleSubmit} className="bg-[#B88E2F] pt-[10px] pl-[40px] pr-[40px] text-cenetr pb-[10px] text-white">Submit</button>

</div>

</div>
      </div>
    </div>
  )
}

export default Contact