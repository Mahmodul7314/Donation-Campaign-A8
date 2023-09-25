import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import CardsData from "../../components/CardsData/CardsData";


const Home = () => {
    const cardsData = useLoaderData();
   
    return (
        <div>
          <Banner></Banner>
        <div className="">
        <CardsData cardsdata={cardsData}></CardsData></div> 
        </div>
    );
};

export default Home;