import Home from "./pages/Home";
import Header from "./Components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./Contact";


function App() {

  const products = [
    { id: 1, productname: "sample 01", productPrice: 100, productDescription: "Sample 01 desc", productPhoto: "https://www.adbyu.com/wp-content/uploads/2024/04/Event-Management-Solutions-Infographic.png" },
    { id: 2, productname: "sample 02", productPrice: 200, productDescription: "Sample 02 desc", productPhoto: "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/photo-collage-event-management-poster-template-5rzmcub7739b2f.webp" },
    { id: 3, productname: "sample 03", productPrice: 300, productDescription: "Sample 03 desc", productPhoto: "https://tse4.mm.bing.net/th/id/OIP.qvL3Cgy288kX1eT-MBrAGgHaLc?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 4, productname: "sample 04", productPrice: 400, productDescription: "Sample 04 desc", productPhoto: "https://tse2.mm.bing.net/th/id/OIP.XeD8e8Cq6-uyoLGQkdyOqQHaKx?w=1140&h=1659&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 5, productname: "sample 05", productPrice: 500, productDescription: "Sample 05 desc", productPhoto: "https://tse2.mm.bing.net/th/id/OIP.XeD8e8Cq6-uyoLGQkdyOqQHaKx?w=1140&h=1659&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 6, productname: "sample 06", productPrice: 600, productDescription: "Sample 06 desc", productPhoto: "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/photo-collage-event-management-poster-template-5rzmcub7739b2f.webp" },
    { id: 7, productname: "sample 07", productPrice: 700, productDescription: "Sample 07 desc", productPhoto: "https://tse2.mm.bing.net/th/id/OIP.XeD8e8Cq6-uyoLGQkdyOqQHaKx?w=1140&h=1659&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 8, productname: "sample 08", productPrice: 800, productDescription: "Sample 08 desc", productPhoto: "https://tse4.mm.bing.net/th/id/OIP.qvL3Cgy288kX1eT-MBrAGgHaLc?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 9, productname: "sample 09", productPrice: 900, productDescription: "Sample 09 desc", productPhoto: "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/photo-collage-event-management-poster-template-5rzmcub7739b2f.webp" },
    { id: 10, productname: "sample 10", productPrice: 1000, productDescription: "Sample 10 desc", productPhoto: "https://tse4.mm.bing.net/th/id/OIP.qvL3Cgy288kX1eT-MBrAGgHaLc?rs=1&pid=ImgDetMain&o=7&rm=3" },


  ]


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/home' element={< Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>



    </>

  )
}


export default App
