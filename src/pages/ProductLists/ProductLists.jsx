import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/actions";
import Category from "../../components/Category/Category";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";

function ProductList() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Category />
      <div className=" bg-[#f6f3f0] border mt-[10rem]">
        <div className=" flex flex-wrap justify-around space-y-10">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
