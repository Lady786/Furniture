import axios from "axios"

import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Login = () => {

    // const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async () => {
        try {
            const response = await axios.post("https://test-ecommerce-br8mn17f1-sheykhnazirboyevs-projects.vercel.app/auth", {
                login: userName,
                password: password,
            });
            if (response.data.token) {
                localStorage.setItem("auth-token", response.data.token);
                // navigate("/");

            }
        } catch (error) {
            alert("Foydalanuvchi ma'lumotlari hato!");
            console.log("xatolik yuz berdi");
        }
    }


    return (
        <div className="w-screen h-screen bg-orange-200 flex items-center justify-center">
            <div className="w-[400px] h-[300px] border bg-white rounded-xl flex flex-col items-center justify-around">
                <p className="font-bold text-[28px]" >Login</p>
                <div>
                    <label htmlFor="name">Name</label>
                    <input className="pl-[5px] border ml-[10px]"
                        id="name"
                        type="text"
                        name=""
                        value={userName}
                        onChange={(event)=>{setUserName(event.target.value)}}
                        placeholder=" username..." /> <br />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className="pl-[5px] border ml-[10px]" 
                    id="password" 
                    type="text"
                    value={password}
                    onChange={(event)=>{setPassword(event.target.value)}}
                     name="" placeholder=" password..." />
                </div>
                <button onClick={handleSubmit} className="border w-[100px] bg-orange-200 text-white rounded-lg ">Submit</button>


            </div>
        </div>
    )
}

export default Login