
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Statistics from "../Pages/Statistics/Statistics";


const myCreateRoute = createBrowserRouter([
    {
        path:"/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
       { path:"/",
        element: <Home></Home>
    },
    {
        path:"/donation",
        element:<Donation></Donation>
    },
    {
        path:"/statistics",
        element:<Statistics></Statistics>
    }
    ]
    }

])
   
export default myCreateRoute;