
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/home";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index"
import Shope from '../src/page/Shop/Shope'
import Contact from './page/Contact/index';
import ProductInfo from './page/ProductDetails/productDetails';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shope" element={<Shope />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productinfo" element={<ProductInfo />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
