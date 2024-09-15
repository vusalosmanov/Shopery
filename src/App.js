<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/home";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index"
import Shope from '../src/page/Shop/Shope'
=======
import { Routes, Route } from 'react-router-dom';
import Contact from './page/Contact/index';
import ProductInfo from './page/ProductDetails/productDetails';
import Home from './page/Home/home';

>>>>>>> 8bcd7f845d1d080b5f21bc8ff6dd89c892fd8269

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/shope" element={<Shope />} />
=======
        <Route path="/contact" element={<Contact />} />
        <Route path="/productinfo" element={<ProductInfo />} />
>>>>>>> 8bcd7f845d1d080b5f21bc8ff6dd89c892fd8269
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
