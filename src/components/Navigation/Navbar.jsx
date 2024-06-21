import React from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/images";
import NavLinks from "../Navigation/NavlLinks";

const Navbar = () => {
  return (
    <nav className="mt-5">
      <div className="navbar align-element">
        <div className="navbar-start flex items-center gap-20">
          {/* Title */}
          <NavLink to="/" className="">
            <img src={Logo} alt="" />
          </NavLink>
          {/* DROPDOWN */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal ">
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          {/* THEME ICONS */}
          <div className="flex items-center justify-between gap-5 ml-4">
            <NavLink to="/register">Sign Up</NavLink>
            <NavLink
              to="/login"
              className="btn bg-primary text-white hover:text-black"
            >
              Login
            </NavLink>
          </div>
        </div>

        {/* <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBarsStaggered className="h-6 w-6" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box -ml-44 w-56"
          >
            <NavLinks />
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
