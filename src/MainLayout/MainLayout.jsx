/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Navbar from "../components/Header/Nav/Navbar";


const MainLayout = () => {
    return (
        <div>

           <div className="w-[1300px] mx-auto">
            <Navbar></Navbar>
            </div> 
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;