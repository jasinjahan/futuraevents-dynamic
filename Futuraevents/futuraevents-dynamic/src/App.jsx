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

  const events = [
    { id: 1, eventName: "event 01", packagePrice: 999, eventDescription: "Sample 01 desc", eventPhoto: "https://th.bing.com/th/id/OIP.N-mixvXAHGKLUWe8C2i2RwHaEw?w=262&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { id: 2, eventName: "event 02", packagePrice: 999, eventDescription: "Sample 02 desc", eventPhoto: "https://www.bing.com/th/id/OIP.A23g_z-aOXrPM-2h2mi2AgHaE8?w=249&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
    { id: 2, eventName: "event 03", packagePrice: 999, eventDescription: "Sample 02 desc", eventPhoto: "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/photo-collage-event-management-poster-template-5rzmcub7739b2f.webp" },
    { id: 3, eventName: "event 04", packagePrice: 999, eventDescription: "Sample 03 desc", eventPhoto: "https://th.bing.com/th/id/OIP.YdyPyFoHx0L6vVfLR02QwAHaE7?w=283&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { id: 4, eventName: "event 05", packagePrice: 999, eventDescription: "Sample 04 desc", eventPhoto: "https://tse2.mm.bing.net/th/id/OIP.XeD8e8Cq6-uyoLGQkdyOqQHaKx?w=1140&h=1659&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 5, eventName: "event 06", packagePrice: 999, eventDescription: "Sample 05 desc", eventPhoto: "https://th.bing.com/th/id/OIP.DXBb_hDZgv2aCmOV6NxS0QHaE7?w=310&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { id: 6, eventName: "event 07", packagePrice: 999, eventDescription: "Sample 06 desc", eventPhoto: "https://th.bing.com/th/id/OIP.uxZdTjHxVAicCsHuWGqEOQHaE_?w=275&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { id: 7, eventName: "event 08", packagePrice: 999, eventDescription: "Sample 07 desc", eventPhoto: "https://th.bing.com/th/id/OIP.VqxtlWgrsfErpOTyES3jxQHaEa?w=310&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { id: 8, eventName: "event 09", packagePrice: 999, eventDescription: "Sample 08 desc", eventPhoto: "https://tse4.mm.bing.net/th/id/OIP.qvL3Cgy288kX1eT-MBrAGgHaLc?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 9, eventName: "event 10", packagePrice: 999, eventDescription: "Sample 09 desc", eventPhoto: "https://th.bing.com/th/id/OIP.DqhMEH8kGfSP_0Bmc1IQIgHaE7?w=238&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { id: 10, eventName: "event 11", packagePrice: 999, eventDescription: "Sample 10 desc", eventPhoto: "https://i.pinimg.com/originals/8e/07/80/8e078013204d0cc9876e9edbb1fd3f85.jpg" },
    { id: 12, eventName: "event 12", packagePrice: 999, eventDescription: "Sample 10 desc", eventPhoto: "https://th.bing.com/th/id/OIP.jlOoM9mYTQhVEqHTTMlHKwHaFI?w=247&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },




  ]


  return (
    <>
      <BrowserRouter>
        <Header count={count} />
        <ToastContainer position="top-center" autoClose={2000} />  
        <Routes>

          <Route path='/home' element={< Home events={events} setCount={setCount} count={count} />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events events={events} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/worksList" element={<WorksList/>} />
           <Route path="/login"  element={<Login/>}/>     
          <Route path="/events/:id" element={<EventDetails events={events}/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/Admin/addlist" element={<AddEvents/>}/>
          <Route path="/Admin/EventList" element={<EventList/>}/>

        </Routes>
      </BrowserRouter>



    </>

  )
}


export default App
