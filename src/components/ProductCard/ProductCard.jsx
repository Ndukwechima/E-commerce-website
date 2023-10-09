import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div>
      <figure
        className="w-[20vw] h-[34vh]  bg-white flex rounded-md shadow-md "
        key={product.id}
      >
        <div className="flex flex-col justify-center items-center">
          <div>
            <img width={100} src={product.image} alt="Image" />
          </div>
          <h3 className=" w-[12vw] text-center text-[10px]">{product.title}</h3>
          <div className="w-[18vw] flex justify-between items-center mt-3">
            <div className="w-14 h-6 rounded-sm flex justify-center items-center">
              <p className=" text-primaryDark  text-[10px]">${product.price}</p>
            </div>
            <button className="bg-primary text-[10px] text-white h-[3vh] w-[5vw] rounded-sm">
              Add to Cart
            </button>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default ProductCard;
