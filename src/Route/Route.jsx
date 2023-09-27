/* eslint-disable no-unused-vars */

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

import DonationCard from "../Pages/DonationCard/DonationsCard";
import DonationsCard from "../Pages/DonationCard/DonationsCard";
import Statistic from "../Pages/Statistics/Statistics";
import Statistics from "../Pages/Statistics/Statistics";


const myCreateRoute = createBrowserRouter([
    {
        path:"/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
       { path:"/",
        element: <Home></Home>,
        loader: ()=> fetch('/data.json')
    },
    {
        path:"/donation",
        element:<Donation></Donation>
    },
    {
        path:"/statistics",
        element:<Statistics></Statistics>,
      
    },
    {
        path:"/donations/:id",
        element:<DonationsCard></DonationsCard>,
        loader: ()=> fetch('/data.json')
    }
    ]
    }

])
   
export default myCreateRoute;