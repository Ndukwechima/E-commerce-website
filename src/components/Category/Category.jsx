import React from "react";

const Category = () => {
  return (
    <div className="sticky top-[70px] left-0">
      <section className=" w-[30vw] h-[20vh] mt-[5rem] rounded-sm border ml-10 bg-white shadow-md mx-auto">
        <div className="w-[30vw] h-[10vh] bg-textDark rounded-sm">
          <h2 className="text-center font-semibold text-white pt-5 tracking-wider">
            Select Category
          </h2>
        </div>

        <section className=" flex justify-around items-center mt-5">
          <div className="w-[20vw] h-[6vh]">
            <p className="text-center text-[12px] text-textDark font-semibold cursor-pointer hover:border-b-[2px] border-primary">
              Men's
            </p>
          </div>
          <div className="w-[20vw] h-[6vh]">
            <p className="text-center text-[12px] text-textDark font-semibold cursor-pointer hover:border-b-[2px] border-primary">
              Ladies
            </p>
          </div>
          <div className="w-[20vw] h-[6vh]">
            <p className="text-center text-[12px] text-textDark font-semibold cursor-pointer hover:border-b-[2px] border-primary">
              Kids
            </p>
          </div>
          <div className="w-[20vw] h-[6vh]">
            <p className="text-center text-[12px] text-textDark font-semibold cursor-pointer hover:border-b-[2px] border-primary">
              Electronics
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Category;
