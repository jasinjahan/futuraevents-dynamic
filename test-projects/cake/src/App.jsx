import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Cakes from "./Pages/Cakes"
import Home from "./Pages/Home"
import Order from "./Pages/Order"
import { useState } from "react"


function App() {
  const [Order,setOrder]=useState(8)

  return (
   <>
<BrowserRouter>
<Header Order={Order}   />
<Routes>
  

  <Route path="/" element={<Home/>}   />
  <Route path="cakes" element={<Cakes/>}/>
  <Route path="order" element={<Order/>}/>

</Routes>



</BrowserRouter>





   


   </>
  )
}

export default App
