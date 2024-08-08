import React, { useEffect, useState } from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/images";
import NavLinks from "../Navigation/NavlLinks";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import MobileNav from "./MobileNav";
import { useUserContext } from "../../context/user_context";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const { loginWithRedirect, myUser, logout } = useUserContext();

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
            <ul className="menu menu-horizontal">
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          {/* THEME ICONS */}
          <div className="flex items-center justify-between gap-3">
            <NavLink to="/register" className="text-sm">
              Sign Up
            </NavLink>

            {myUser ? (
              <button
                type="button"
                className="btn bg-primary text-white hover:text-black"
                onClick={() => {
                  localStorage.removeItem("user");
                  logout({ returnTo: window.location.origin });
                }}
              >
                Logout <FaUserMinus />
              </button>
            ) : (
              <NavLink
                to="/login"
                className="btn bg-primary text-white hover:text-black"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>

        {/* mobile nav icons */}
        <button
          className="lg:hidden ml-4"
          onClick={() => setMobileNav(!mobileNav)}
        >
          {mobileNav ? (
            <IoCloseOutline className="text-3xl text-primary" />
          ) : (
            <IoMenuOutline className="text-3xl text-primary" />
          )}
        </button>

        <div
          className={` ${
            mobileNav ? "left-0" : "-left-full"
          } fixed top-0 bottom-0 w-[60vw] z-20 lg:hidden transition-all bg-white`}
          onClick={() => setMobileNav(!mobileNav)}
        >
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
