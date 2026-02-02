import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componenets/Header';
// import HomeCarousels from './componenets/HomeCarousels';
import Home from './Pages/Home';
import Footer from './componenets/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Profile from './Pages/Profile';
import ProductDetails from './Pages/productDetails';
import Register from './Pages/Register';
import { ToastContainer } from 'react-toastify';
import AddProducts from './Admin/Admin-Pages/AddProducts';
import ListProducts from './Admin/Admin-Pages/ListProducts';
import ProtectedRoute from './utils/ProtectedRoute';
import EditProduct from './Pages/EditProduct';
import Users from './Admin/Users';
import UserEdit from './Admin/UserEdit';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from './redux/productSlice';

function App() {

  const dispatch = useDispatch();

 useEffect(()=>{

  const fetchProducts = async()=>{
      
    try {
      const {data} = await axios.get ('https://fakestoreapi.com/products');
      dispatch(setProducts(data))

    } catch (error) {
      console.log(error.message);
      
    }
  }

  fetchProducts();

 }, []);







  return (

   







    <>
      <BrowserRouter>
        <Header />
        <ToastContainer position="top-center" autoClose={2000} />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/about' element={<About />} />

          <Route path='/contact' element={<Contact />} />

          <Route path='/products' element={<Products />} />

          <Route path='/login' element={<Login />} />

          <Route path='/register' element={<Register />} />

          <Route path='/cart' element={<Cart />} />

          <Route path='/profile' element={<Profile />} />

          <Route path='/Product/:id' element={<ProductDetails />} />

          <Route path='/Admin/AddProducts' element={<ProtectedRoute >
          {<AddProducts/>}
          </ProtectedRoute>}/>
           
         

          <Route path='/Admin/ListProducts' element={<ProtectedRoute >
            {<ListProducts/>}
            </ProtectedRoute>} />

             <Route path='/admin/edit-product/:id' element={<ProtectedRoute >
            {<EditProduct/>}
            </ProtectedRoute>} />

         
            
             <Route path='/admin/users' element={<ProtectedRoute >
            {<Users/>}
            </ProtectedRoute>} />

            <Route path='/admin/useredit/:id' element={<ProtectedRoute >
            {<UserEdit/>}
            </ProtectedRoute>} />


            






        </Routes>






      </BrowserRouter>





      <Footer />
    </>
  )
}

export default App
