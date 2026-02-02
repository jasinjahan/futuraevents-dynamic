import Home from "./pages/Home";
import Header from "./Components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./Contact";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import WorksList from "./pages/WishList";
import { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { ToastContainer } from "react-toastify";
import AddEvents from "./Admin/Pages/AddEvents";
import EventList from "./Admin/Pages/EventList";
import ProtectedRoute from "./utils/ProtectedRoute";
import EditEvent from "./EditEvent";
import Users from "./Admin/Users";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { setEvents } from "./redux/eventSlice";

function App() {

   const dispatch = useDispatch();

 useEffect(()=>{

 const fetchEvents = async()=>{
  try{
    const {data} = await axios.get ('https://fakestoreapi.com/products');
    dispatch(setEvents(data)) }
    catch (error) {
      console.log(error.message);
      
    }

  }
  fetchEvents();

  },[]);

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

          <Route path="/Admin/addlist" element={<ProtectedRoute >
            {<AddEvents/>}</ProtectedRoute>}/>


          <Route path="/Admin/EventList" element={<ProtectedRoute >
            {<EventList/>}</ProtectedRoute>}/>

        <Route path="/admin/edit-event/:id" element={<ProtectedRoute >
            {<EditEvent/>}</ProtectedRoute>}/>
        <Route path="/admin/users" element={<Users/>}/>
        </Routes>
        
      </BrowserRouter>

<Footer/>

    </>

  )
}


export default App
