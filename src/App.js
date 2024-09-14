import { Routes, Route } from 'react-router-dom';
import Contact from './page/Contact/index';
import ProductInfo from './page/ProductDetails/productDetails';
import Home from './page/Home/home';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productinfo" element={<ProductInfo />} />
      </Routes>
    </>

  );
}

export default App;
