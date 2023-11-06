import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { images } from "../resources/IndexImg";
import Line from "../resources/Line";

const NavItemsInfo = [
  {
    name: "Timeline",
  },
  {
    name: "Overview",
  },
  {
    name: "FAQS",
  },
  {
    name: "Contact",
  },
];

{
  /*======================  this is header nav lists ================================*/
}

const NavItems = ({ item }) => {
  return (
    <li className=" header__lists relative group flex flex-col justify-center items-center text-white font-Montserrat z-9999999">
      <a href="/" className="px-4 py-2">
        {item.name}
      </a>
    </li>
  );
};

{
  /*======================  this function is to header nav lists autonomous ================================*/
}

const Header = () => {
  const [NavIsVisible, setNavIsVisible] = useState(false);

  const navVisibleHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  return (
    <section>
      <div className="header__background absolute flex ">
        <div>
          <img src={images.lensflare} alt="logo" className=" headerr bg-blend-luminosity" />
        </div>
        <div>
          <img src={images.lensflare2} alt="logo" className=" headerr bg-blend-luminosity" />
        </div>
      </div>

      {/*======================  this is for the background image ================================*/}

      <header className="container mx-auto flex justify-between py-4 items-center  ">
        <div className="header__logo  justify-center items-center ml-4 ">
          <h2>
            <span className="white-space: nowrap;">get</span>
            <a href="/">Linked</a>
          </h2>
        </div>

        {/*======================  LOGO  ================================*/}

        <div className=" z-50 lg:hidden m-8 bg-colorbg2 text-white relative p-4 rounded-md shadow-sm mb-7">
          {NavIsVisible ? (
            <AiOutlineClose onClick={navVisibleHandler} className="w-10 h-6 " />
          ) : (
            <AiOutlineMenu onClick={navVisibleHandler} className="w-10 h-6 " />
          )}
        </div>

        {/*======================  this toggle for dropdown ================================*/}

        <div
          className={`${
            NavIsVisible ? "right-0 hidden" : "-right-full "
          }header__nav transition-all duration-300 bg-colorprimary lg:bg-transparent z-49 flex flex-col  w-full lg:w-auto lg:justify-end lg:flex-row justify-center fixed top-0 bottom-0  lg:static gap-x-9
           items-center mt-[7.5rem] lg:mt-0 z-99999`}
        >
          <ul className="flex flex-col lg:flex-row right-0 gap-10 lg:gap-x-2 font-semibold p-4 z-50">
            {NavItemsInfo.map((item) => (
              <NavItems key={item.name} item={item} />
            ))}
          </ul>

          <button>
            <a href="www.google.com">Register</a>
          </button>
        </div>
        {/*======================  this is end of header and everything about dropdwon ================================*/}
      </header>

      <Line />
      {/*=========  this tag is for the lines across each sections  ===============*/}

      <div className=" text-center  text-xl font-bold lg:text-[32px] p-[4rem] lg:w-[742px] italic lg:float-right text-white flex-shrink-0 leading-relaxed ">
        <h3 className="">Igniting a Revolution in HR Innovation</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="117"
          height="11"
          viewBox="0 0 117 11"
          fill="none"
          className="svg__line float-right w-4/6 lg:w-2/6"
        >
          <path
            d="M1 9C20.2424 3.71764 70.7273 -3.67768 116 9"
            stroke="#FF26B9"
            stroke-width="3"
          />
        </svg>
      </div>

      <div className="lg:mt-48">
        <div className="   flex flex-col lg:flex-row items-center justify-center ">
          <div className="text-white text-center lg:text-start items-center justify-center  font-verdana  leading-normal  w-full lg:w-1/2 lg:ml-[10rem] gap-[50%] ">
            <h2 className="text-[40px] lg:text-[80px] font-bold font-roboto">
              getlinked Tech
            </h2>
            <h2 className="flex items-center justify-center lg:justify-start text-[40px] lg:text-[80px] font-bold font-roboto">
              Hackathon{" "}
              <span className="text-color_primary_variant whitespace-pre ">
                {" "}
                1.0{" "}
              </span>
              <img src={images.chain} alt="icons" className=" w-20 h-20" />
              <img src={images.blast} alt="icons" className=" w-20 h-20" />
            </h2>
            <p className="p-4 justify-center ">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>

            <button>
              <a href="www.google.com">Register</a>
            </button>

            <p className=" font-unica_one text-[64px] leading-loose mt-[2rem] justify-between ">
              00<sub>H</sub> 00<sub>M</sub> 00<sub>s</sub>
            </p>
          </div>

          <div className=" relative flex w-full lg:w-1/2 gap-[50%] items-center justify-center mt-10">
            <img
              src={images.img1}
              alt=" image 1"
              className=" w-[419.669px] h-[362.395px] lg:w-[828px] lg:h-[715px] bg-blend-luminosity filter grayscale"
            />
            <img
              src={images.image1}
              alt=" sub__image 1"
              className="glow absolute top-0 left-1/2 transform -translate-x-1/2 w-[338.067px] h-[324.889px] lg:w-[667px] lg:h-[641px] bg-blend-hard-light z-10 "
            />
          </div>
        </div>
      </div>
      <Line />
    </section>
  );
};

export default Header;
