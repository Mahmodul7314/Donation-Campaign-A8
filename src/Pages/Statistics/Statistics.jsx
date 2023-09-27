/* eslint-disable no-unused-vars */

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Statistics = () => {
  const [favourite, setFavourite] = useState([])

  useEffect(()=>{
const favouriteItems = JSON.parse(localStorage.getItem('favourite'))
if(favouriteItems){
  setFavourite(favouriteItems)
}
console.log(favourite);
  },[]);


  return (
    <div>
      
    </div>
  );
};

export default Statistics;