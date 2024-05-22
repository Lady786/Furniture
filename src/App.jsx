import { BrowserRouter , Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react'
import Layout from "./pages/Layout";
// import SinglePage from "./pages/SinglePage";
// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

const Home = React.lazy(()=> import ("./pages/Home"))
const Shop = React.lazy(()=> import ("./pages/Shop"))
const About = React.lazy(()=> import ("./pages/About"))
const Contact = React.lazy(()=> import ("./pages/Contact"))
const SinglePage = React.lazy(()=> import ("./pages/SinglePage"))
const Login = React.lazy(()=> import ("./pages/Login"))


const App = () => {
  return (
   
    <BrowserRouter>
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
      <Route path="/" element ={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products/:productId" element={<SinglePage/>}/>
      </Route>
      <Route path="/login" element={<Login/>} />
    </Routes>
    </Suspense>
    
    </BrowserRouter>
  )
}

export default App