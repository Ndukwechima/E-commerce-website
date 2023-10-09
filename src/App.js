import Home from "./components/Home/Home";
// import ProductList from "./pages/ProductLists/ProductLists";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<} /> */}
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
