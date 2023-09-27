import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-2 py-4 lg:py-6">
       <Logo></Logo>
      <ul className="flex justify-center items-center  gap-4 lg:gap-10">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#FF444A] font-bold text-lg underline" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/donation"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#FF444A]  font-bold text-lg underline" : ""
        }
      >
        Donation
      </NavLink>
      <NavLink
        to="/statistics"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#FF444A]  font-bold text-lg underline" : ""
        }
      >
        Statistics
      </NavLink>
      </ul>
      
    </div>
  );
};

export default Navbar;
