import React from "react";
import Phone from "../../images/phone.png";
import Shoe from "../../images/shoe.png";
import Watch from "../../images/watch.png";
import Neckless from "../../images/neckless.png";
import Bag from "../../images/bag.png";
import Laptop from "../../images/laptop.png";
import Plasma from "../../images/plasma.png";
import Shirt from "../../images/shirt.png";

const ProductsCarousel = () => {
  return (
    <div className="w-[96vw] h-[40vh] mt-[5rem] mx-auto flex-col">
      <div>
        <h1 className="text-center text-[30px] text-textDark font-semibold ">
          NEW ARRIVAL
        </h1>
      </div>
      <div className="flex w-[96vw] justify-around item-center">
        <figure className="w-[10vw] h-[30vh] mt-10 bg-white rounded-lg shadow-md">
          <img className="ml-5" src={Phone} width={100} alt="Phone" />

          <figcaption className="text-[10px] text-center mt-4 font-bold">
            Phones
          </figcaption>
        </figure>
        <figure className="w-[10vw] h-[30vh] mt-10 bg-white rounded-lg shadow-md">
          <img className="ml-5 mt-[70px]" src={Shoe} width={100} alt="Phone" />

          <figcaption className="text-[10px] text-center mt-4 font-bold">
            Shoes
          </figcaption>
        </figure>
        <figure className="w-[10vw] h-[30vh] mt-10 bg-white rounded-lg shadow-md">
          <img className="ml-5 mt-[30px]" src={Watch} width={100} alt="Phone" />

          <figcaption className="text-[10px] text-center mt-4 font-bold">
            Watches
          </figcaption>
        </figure>
        <figure className="w-[10vw] h-[30vh] mt-10 bg-white rounded-lg shadow-md">
          <img
            className="ml-5 mt-[30px]"
            src={Neckless}
            width={100}
            alt="Phone"
          />

          <figcaption className="text-[10px] text-center mt-4 font-bold">
            Neckless
          </figcaption>
        </figure>
        <figure className="w-[10vw] h-[30vh] mt-10 bg-white rounded-lg shadow-md">
          <img className="ml-5 mt-[65px]" src={Bag} width={100} alt="Phone" />

          <figcaption className="text-[10px] text-center mt-4 font-bold">
            Ladies bag
          </figcaption>
        </figure>
        <figure className="w-[10vw] h-[30vh] mt-10 bg-white rounded-lg shadow-md">
          <img
            className="ml-5 mt-[55px]"
            src={Laptop}
            width={100}
            alt="Phone"
          />
          <figcaption className="text-[10px] text-center mt-4 font-bold">
            Laptop
          </figcaption>
        </figure>
        <figure className="w-[10vw] h-[30vh] mt-10 bg-white rounded-lg shadow-md">
          <img
            className="ml-5 mt-[76px]"
            src={Plasma}
            width={100}
            alt="Phone"
          />

          <figcaption className="text-[10px] text-center mt-4 font-bold">
            Plasma Tv
          </figcaption>
        </figure>
        <figure className="w-[10vw] h-[30vh] mt-10 bg-white rounded-lg shadow-md">
          <img className="ml-5 mt-[20px]" src={Shirt} width={100} alt="Phone" />

          <figcaption className="text-[10px] text-center mt-4 font-bold">
            Shirt
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default ProductsCarousel;
