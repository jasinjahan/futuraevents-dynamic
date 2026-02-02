import Home from "./pages/Home";
import Header from "./Components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./Contact";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import WorksList from "./pages/WishList";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { ToastContainer } from "react-toastify";
import AddEvents from "./Admin/Pages/AddEvents";
import EventList from "./Admin/Pages/EventList";


function App() {
   let [count, setCount] = useState(0);



  return (
    <>
      <BrowserRouter>
        <Header count={count} />
        <ToastContainer position="top-center" autoClose={2000} />  
        <Routes>

          <Route path='/home' element={< Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/worksList" element={<WorksList/>} />
           <Route path="/login"  element={<Login/>}/>     
          <Route path="/event/:id" element={<EventDetails/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/Admin/addlist" element={<AddEvents/>}/>
          <Route path="/Admin/EventList" element={<EventList/>}/>
        
          

        </Routes>
      </BrowserRouter>



    </>

  )
}


export default App
