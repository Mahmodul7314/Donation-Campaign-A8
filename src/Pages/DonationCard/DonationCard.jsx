/* eslint-disable react/prop-types */
import {BsCurrencyDollar } from "react-icons/bs";

const DonationCard = ({ donationCard }) => {
    console.log(donationCard)
  const {id,image,category,title,description,donate,background_color,button_background,text_color} = donationCard || {};
  return (
    <div className="flex justify-center items-center">
   <div className="relative flex w-3/5 h-3/5 flex-col rounded-lg">
  <div className="relative mx-4 -mt-6 rounded-lg  text-white ">
    <img className="w-full h-full"
      src={image}
      alt="img-blur-shadow"
      layout="fill"
    />
  </div>
  <button style={{backgroundColor:text_color}}
      className="select-none absolute flex justify-center items-center mt-96 ml-8 w-36 text-[#fff] font-semibold text-xl rounded-lg  py-3 px-6 text-center items-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
     Donate <BsCurrencyDollar></BsCurrencyDollar>{donate}
    </button>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-4xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h5>
    <p className="block font-sans text-base font-normal text-justify leading-relaxed text-inherit antialiased">
     {description}
    </p>
  </div>
  <div className="p-6 pt-0">
  
  </div>
</div>
 
    </div>
  );
};

export default DonationCard;
