import { useState } from "react"
import Header from "./Components/Header"
import Cars from "./Pages/Cars"
import Home from "./Pages/Home"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import WishList from "./Pages/WishList"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import HomeCarousel from "./Components/HomeCarousel"
import { ToastContainer } from "react-toastify"



function App() {


  const [wishlist , setWishList]= useState(5)

  return (
    <>
  
    






 
     <Header wishList={wishlist} />
      <ToastContainer position="top-center" autoClose={2000} />
      <BrowserRouter>
    
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/wishlist" element={<WishList/>}  wishlist={wishlist}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>


      </BrowserRouter>






     
    </>
  )
}

export default App
