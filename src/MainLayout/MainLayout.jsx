/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Navbar from "../components/Header/Nav/Navbar";


const MainLayout = () => {
    return (
        <div>

           <div className="max-w-[1300px] mx-auto">
            <Navbar></Navbar>
            </div> 
            <div className="py-6 max-w-[1300px] mx-auto">
            <Outlet></Outlet>
            </div>
            </div>
    );
};

export default MainLayout;