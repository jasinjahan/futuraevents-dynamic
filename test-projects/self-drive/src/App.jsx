import { useState } from "react"
import Header from "./Components/Header"
import Cars from "./Pages/Cars"
import Home from "./Pages/Home"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import WishList from "./Pages/WishList"


function App() {


  const [wishlist , setWishList]= useState(5)

  return (
    <>
  
    







     <Header wishList={wishlist} />
      <BrowserRouter>
       
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/wishlist" element={<WishList/>}  wishlist={wishlist}/>
        </Routes>


      </BrowserRouter>






     
    </>
  )
}

export default App
