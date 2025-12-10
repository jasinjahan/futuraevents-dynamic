import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import { useState } from 'react';
import Register from './pages/Register';
import Cart from './pages/Cart';


function App() {

  let [cartItems, setCartItems] = useState([]); // [{},{}]

  const products = [
    {id:1, productName:'Sample 01', productPrice:100, productDescription:'Sample 01 desc', productPhoto:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/r/g/-original-imahgfmy4xfecrhg.jpeg?q=70'},
    {id:2, productName:'Sample 02', productPrice:200, productDescription:'Sample 02 desc', productPhoto:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/8/s/-original-imahfz2tvjqak9v3.jpeg?q=70&crop=false'},
    {id:3, productName:'Sample 03', productPrice:300, productDescription:'Sample 03 desc', productPhoto:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/s/8/-original-imahgy26fu3z2hez.jpeg?q=70&crop=false'},
    {id:4, productName:'Sample 04', productPrice:400, productDescription:'Sample 04 desc', productPhoto:'https://rukminim2.flixcart.com/image/312/312/ksnjp8w0/mobile/f/k/y/galaxy-z-flip3-5g-sm-f711bzkainu-samsung-original-imag662axn2xmght.jpeg?q=70'},
    {id:5, productName:'Sample 05', productPrice:500, productDescription:'Sample 05 desc', productPhoto:'https://rukminim2.flixcart.com/image/312/312/xif0q/cases-covers/back-cover/t/b/p/cer2413-cermarise-original-imahc9c9u4g9mnd8.jpeg?q=70&crop=false'},
    {id:6, productName:'Sample 06', productPrice:600, productDescription:'Sample 06 desc', productPhoto:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70&crop=false'},
    {id:7, productName:'Sample 07', productPrice:700, productDescription:'Sample 07 desc', productPhoto:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/b/t/-original-imahgqnzzc6cgggb.jpeg?q=70&crop=false'},
    {id:8, productName:'Sample 08', productPrice:800, productDescription:'Sample 08 desc', productPhoto:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/5/v/-original-imahewfs3ftjkzha.jpeg?q=70&crop=false'},
    {id:9, productName:'Sample 09', productPrice:900, productDescription:'Sample 09 desc', productPhoto:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/5/v/-original-imahewfs3ftjkzha.jpeg?q=70&crop=false'},
    {id:10, productName:'Sample 10', productPrice:1000, productDescription:'Sample 10 desc', productPhoto:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/5/v/-original-imahewfs3ftjkzha.jpeg?q=70&crop=false'},
  ];

  // const username = "tom";

  // console.log(`Username is ${username}`);
  

  console.log("cartItems ------>", cartItems);
  


  return (
    <>
    <BrowserRouter>
      <Header cartItems={cartItems}/>
      <Routes>
        <Route path='/' element={<Home products={products} setCartItems = {setCartItems} />} /> 
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/products' element={<Products products = {products}/>} />
        <Route path='/product/:id' element={<ProductDetails products = {products}/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
      

      
    </>
  )
}

export default App
