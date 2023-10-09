import React from "react";
import Logo from "../../images/Awesome-store-logo.png";

const Header = () => {
  return (
    <div className="fixed top-0 right-0 left-0">
      <header className="w-[100%] flex justify-around items-center h-[10vh] bg-black">
        <div className="w-[20vw]">
          <img width={110} src={Logo} alt="Logo" />
        </div>
        <div className="w-[30vw] flex">
          <input
            className="min-w-[25vw] h-7 rounded-sm placeholder:text-[10px] placeholder:px-3 outline-none border-none"
            type="text"
            placeholder="Search for products..."
          />
          <div>
            <i class="bi bi-search bg-primary text-[13px] text-center pl-[8px] pr-[12px] pt-[6.1px] pb-[5px]   text-[#fff] relative left-[-32px] top-[2px]"></i>
          </div>
        </div>

        <nav className="w-[40vw] flex justify-around items-center mr-7">
          <li className="list-none">
            <a
              className="text-white bg-primary px-4 py-1 rounded-sm hover:opacity-[0.8]"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="list-none">
            <a
              className="text-white hover:border-b-[2px] border-primary"
              href="/"
            >
              About
            </a>
          </li>
          <li className="list-none">
            <a
              className="text-white hover:border-b-[2px] border-primary"
              href="/"
            >
              Contact
            </a>
          </li>
          <button>
            <a
              className="text-white hover:border-b-[2px] border-primary"
              href="/"
            >
              Login
            </a>
          </button>
          <button>
            <a
              className="text-white hover:border-b-[2px] border-primary"
              href="/"
            >
              Register
            </a>
          </button>
          <div className="w-[5vw] flex">
            <li>
              <a className="text-white" href="/">
                <i class="bi bi-cart4"></i>
              </a>
            </li>
            <small class="w-5 h-5 bg-primary text-white rounded-full text-center relative bottom-2 right-2">
              0
            </small>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
