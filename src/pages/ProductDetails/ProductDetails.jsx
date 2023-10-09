import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-[7rem] w-[100%] flex justify-center items-center">
      <figure className="w-[40vw] flex flex-col items-center justify-center">
        <div>
          <img width={250} src={product.image} alt="Image" />
        </div>
        <figcaption>
          <h2 className="mt-5 text-[14px] font-bold">{product.title}</h2>
          <p className="text-[12px]">{product.description}</p>
          <div className="w-[30vw] flex justify-between items-center mt-3">
            <p className="text-[12px] font-bold">Price: ${product.price}</p>
            <button className="bg-primary text-[10px] text-white h-[3vh] w-[5vw] rounded-sm">
              Add to Cart
            </button>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default ProductDetail;
