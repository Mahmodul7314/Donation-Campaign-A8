/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DonationCard from './DonationCard';

const DonationsCard = () => {
    const [dataCard, setDataCard] = useState();
    
const dataCards = useLoaderData()
const {id} = useParams();
const parseNum= parseInt(id);

useEffect(()=>{
    const findDataCard = dataCards.find(dataCard=>dataCard.id === parseNum);
    setDataCard(findDataCard);

},[])
  

    return (
        <div>
            <DonationCard donationCard={dataCard}></DonationCard>
        </div>
    );
};

export default DonationsCard;

