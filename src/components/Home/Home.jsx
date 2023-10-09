import React from "react";
import ImageSlide from "../ImageSlide/ImageSlide";
import ProductsCarousel from "../ProductsCarousel/ProductsCarousel";
import ProductList from "../../pages/ProductLists/ProductLists";

const Home = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] bg-[#f6f3f0]">
      <ImageSlide />
      <ProductsCarousel />
      <ProductList />
    </div>
  );
};

export default Home;
