/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {BsCurrencyDollar } from "react-icons/bs";
import swal from "sweetalert";

const DonationCard = ({ donationCard }) => {

  const {id,image,category,title,description,donate,background_color,button_background,text_color} = donationCard || {};
 
  
///
//conditional donation added in local storage here 
  const handleDonateAdd =() =>{
    const addedDonationArray =[];

    const favouriteItems =JSON.parse(localStorage.getItem('favourite'));

    if(!favouriteItems){
        addedDonationArray.push(donationCard)
        localStorage.setItem('favourite', JSON.stringify(addedDonationArray))

        swal("Thank You!", "For Your Donation!", "success");

    }else{
        const isExist = favouriteItems.find(item => item.id ===id )
        
        if(!isExist){
            addedDonationArray.push(...favouriteItems,donationCard)
            localStorage.setItem('favourite',JSON.stringify(addedDonationArray))

            swal("Thank You!", "For Your Donation!", "success");
        }else{
            swal("Error!!", "No Duplicate", "error");
        }
    }
  }
 
 
  
  return (
    <div className="flex justify-center items-center">
   <div className="relative flex w-3/5 h-3/5 flex-col rounded-lg ">
  <div className="relative mx-4 -mt-6 rounded-lg  text-white ">
    <img className="w-full h-full"
      src={image}
      alt="img-blur-shadow"
      layout="fill"
    />
  </div>

    <div className="" style={{backgroundColor:"#0B0B0B80" ,marginTop:"340px "  ,width:"749px", height:"100px", position:"absolute",marginLeft:"16px"} }>
    <button onClick={handleDonateAdd}     style={{backgroundColor:text_color}}
      className="select-none absolute flex justify-center items-center mt-10 ml-6 w-36 text-[#fff] font-semibold text-xl rounded-lg  py-3 px-6 text-center items-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
     Donate <BsCurrencyDollar></BsCurrencyDollar>{donate}
    </button>
    </div>

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
