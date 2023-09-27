/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {BsCurrencyDollar } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const FavouriteCard = ({ favouriteItem }) => {
 
    const {id,image,category,title,description,donate,background_color,button_background,text_color} = favouriteItem;
  return (
    <div>
      <div style={{backgroundColor:background_color}}  className="relative flex w-full max-w-[48rem] flex-row rounded-xl clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          
          <button style={{color:text_color,background:button_background}} className="text-lg font-medium px-4 py-2 mb-2 w-28 rounded-lg ">
           {category}
          </button>
          
          <h4 style={{color:"#0B0B0B"}} className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p style={{color:text_color, textAlign:"left"}} className=" flex items-center mb-2  font-sans text-base font-semibold leading-relaxed text-gray-700 antialiased">
          Donate <BsCurrencyDollar></BsCurrencyDollar>{donate}
          </p>
          <a className="inline-block" href="#">
           <NavLink to={"/"} style={{backgroundColor:text_color}} className="text-lg font-semibold text-[#fff] rounded-sm px-4 py-2 w-36"
            //   className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            //   type="button"
            >
              View Details 
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg> */}
            </NavLink>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FavouriteCard;
