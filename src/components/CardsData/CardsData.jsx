/* eslint-disable react/prop-types */
import CardData from "../CardData/CardData";


const CardsData = ({cardsdata}) => {
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-24">
                {cardsdata?.map(carddata=><CardData key={carddata.id} cardData={carddata}></CardData>)}
            </div>
        </div>
    );
};

export default CardsData;