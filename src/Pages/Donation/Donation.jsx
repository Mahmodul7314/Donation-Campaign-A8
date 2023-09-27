/* eslint-disable no-const-assign */
import { useEffect, useState } from "react";
import FavouriteCard from "./FavouriteCard";

const Donation = () => {

    const [favourites, setFavourites] = useState([])
    const [noFound, setNoFound] = useState(false)
    const [showAll, setShowAll] =useState(false)



    useEffect(()=>{
   const favouriteItems = JSON.parse(localStorage.getItem('favourite'))
   if(favouriteItems){
    setFavourites(favouriteItems);
   } 
   else{
    setNoFound('no data found')
   }

    },[])
   

    const handleClear=()=>{
        localStorage.clear();
        setFavourites ([]);
       setNoFound('no data found')
     
      }
 

    return (
        <div>
          
           { noFound && <p className="text-2xl font font-medium text-center text-gray-400">{noFound}</p> }
          <div className="text-center mt-4 mb-4"> <button onClick={handleClear} className="bg-red-400 w-24 lg:w-36 h-6 lg:h-12 rounded-lg hover:bg-slate-300 text-white font-normal lg:font-semibold">Clear All</button></div>
          
           <div className="grid col-span-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {
            showAll? favourites.map(item=> <FavouriteCard key={item.id} favouriteItem={item}></FavouriteCard>)
         :  favourites.slice(0,4).map(item=> <FavouriteCard key={item.id} favouriteItem={item}></FavouriteCard>)
          }
        
           </div>
          { showAll?<div className="text-center mt-8 mb-8 "><button onClick={()=>setShowAll(!showAll)} className="bg-yellow-600 lg:w-36 w-24 h-6 lg:h-12 rounded-lg hover:bg-slate-300 text-white font-normal lg:font-semibold">See Less</button></div> 
           : <div className="text-center mt-8 mb-8 "><button onClick={()=>setShowAll(!showAll)} className="bg-green-600 lg:w-36 w-24 h-6 lg:h-12 rounded-lg hover:bg-slate-300 text-white font-normal lg:font-semibold">See All</button></div>
           }


        </div>
    );
};

export default Donation;