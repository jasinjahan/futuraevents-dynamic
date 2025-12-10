import { useState } from "react"
import Home from "./Pages.jsx/Home";
import About from "./Pages.jsx/About";
import Header from "./Components.jsx/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [click, setClick] = useState(0);

  const [products, setProducts] = useState([]);




  return (
    <>

  <Header />

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />}
          />
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>

    
     
    


    </>
  )
}

export default App
