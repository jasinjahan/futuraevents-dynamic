import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Header from './Components/Header'
import Home from './Pages/Home'
import WishList from './Pages/WishList'
import Bikes from './Pages/Bikes'
import { BrowserRouter, Route, Routes } from "react-router-dom"



function App() {

  const [wishList,setWishList]=useState(5)

  return (
    <>
     <Header wishList={wishList}/>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route path='/bikes' element={<Bikes/>}/>
      <Route path='wishlist' element={<WishList/>}/>


    </Routes>
    
    
    
    </BrowserRouter>
    
    
    
     





     </>
  )
}

export default App
