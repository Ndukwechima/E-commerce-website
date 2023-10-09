import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import Fashion_4 from "../../images/fashion 4.jpg";
import Caro_1 from "../../images/caro1.jpg";
import Caro_2 from "../../images/caro2.jpg";
import Fashion_3 from "../../images/fashion 3.jpg";
import Fashion_5 from "../../images/fashion 5.jpg";

const ImageSlide = () => {
  return (
    <div className=" w-[80vw] mx-auto mt-[10rem] z-[-1]">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        <div>
          <img className="w-[500px] h-[460px]" src={Fashion_4} alt="caro" />
        </div>
        <div>
          <img className="w-[500px] h-[460px]" src={Caro_1} alt="caro 1" />
        </div>
        <div>
          <img className="w-[500px] h-[460px]" src={Caro_2} alt="caro 2" />
        </div>
        <div>
          <img className="w-[500px] h-[460px]" src={Fashion_3} alt="caro" />
        </div>
        <div>
          <img className="w-[500px] h-[460px]" src={Fashion_5} alt="caro" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlide;
