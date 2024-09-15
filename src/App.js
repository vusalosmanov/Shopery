import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/home";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index"
import Shope from '../src/page/Shop/Shope'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shope" element={<Shope />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
