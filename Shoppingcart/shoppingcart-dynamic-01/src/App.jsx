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
import { useState } from 'react';
import Register from './Pages/Register';
import { ToastContainer } from 'react-toastify';
import AddProducts from './Admin/Admin-Pages/AddProducts';
import ListProducts from './Admin/Admin-Pages/ListProducts';

function App() {

  let [cartItems, setCartItems] = useState([]);

 
  


  const products = [
    { id: 1, productName: "sample 01", productPrice: 100, productDescription: "Sample 01 desc", productPhoto: "https://th.bing.com/th/id/OIP.N-mixvXAHGKLUWe8C2i2RwHaEw?w=262&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { id: 2, productName: "sample 02", productPrice: 200, productDescription: "Sample 02 desc", productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/r/f/-original-imah56hkgehywn5b.jpeg?q=70" },
    { id: 3, productName: "sample 03", productPrice: 300, productDescription: "Sample 03 desc", productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/0/v/galaxy-a06-5g-sm-a066bzadins-samsung-original-imahbf7gmxrfhcxu.jpeg?q=70" },
    { id: 4, productName: "sample 04", productPrice: 400, productDescription: "Sample 04 desc", productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/k/3/sm-1200-mobile-gt-e1207z-samsung-original-imahdkhdkd6vghb5.jpeg?q=70" },
    { id: 5, productName: "sample 05", productPrice: 500, productDescription: "Sample 05 desc", productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/j/a/guru-music-2-b310ed-guru-music-2-samsung-original-imahepqaqpq3dnhg.jpeg?q=70" },
    { id: 6, productName: "sample 06", productPrice: 600, productDescription: "Sample 06 desc", productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/l/o/guru1200-e1215-samsung-original-imahbpzmkgufd4yq.jpeg?q=70" },
    { id: 7, productName: "sample 07", productPrice: 700, productDescription: "Sample 07 desc", productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/u/5/galaxy-m35-5g-sm-m356b-samsung-original-imah5qgyszh7ygft.jpeg?q=70" },
    { id: 8, productName: "sample 08", productPrice: 800, productDescription: "Sample 08 desc", productPhoto: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/g/d/p/-original-imahcre2gqhfqgd8.jpeg?q=70&crop=false" },
    { id: 9, productName: "sample 09", productPrice: 900, productDescription: "Sample 09 desc", productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/x/d/-original-imah5zf6shwthjg2.jpeg?q=70" },
    { id: 10, productName: "sample 10", productPrice: 1000, productDescription: "Sample 10 desc", productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/s/7/m36-5g-sm-m366b-samsung-original-imahe5prqwgdhajc.jpeg?q=70" },

  ];
 console.log(cartItems);
  return (
    <>
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <ToastContainer position="top-center" autoClose={2000}  />
        <Routes>
          <Route path='/' element={<Home products={products} setCartItems={setCartItems} cartItems={cartItems} />} />

          <Route path='/about' element={<About />} />

          <Route path='/contact' element={<Contact />} />

          <Route path='/products' element={<Products products={products} />} />

          <Route path='/login' element={<Login />} />

          <Route path='/register' element={<Register/>}/>

          <Route path='/cart' element={<Cart />} />

          <Route path='/profile' element={<Profile />} />

          <Route path='/Product/:id' element={<ProductDetails products={products} />} />

          <Route path='/Admin/AddProducts' element={<AddProducts/>}/>

          <Route path='/Admin/ListProducts' element={<ListProducts/>}/>



        </Routes>






      </BrowserRouter>





      <Footer />
    </>
  )
}

export default App
