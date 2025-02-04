import { Button } from "@mui/material";
import React from "react";
import { BrowserRouter, NavLink, Router, Routes } from "react-router-dom";
import Searchbar from "./Searchbar";
import { LuShoppingCart } from "react-icons/lu";
import { useCart } from "../Context/cartContext";

const Navbar = () => {
    const {cartProduct} = useCart();
  return (
    <nav className="flex items-center justify-center h-20 px-2">
      <div id="text" className="flex w-1/3">
        <p className="w-full text-center text-4xl text-green-700">eHatiya</p>
      </div>
      <div className="w-1/3 flex gap-5 items-center">
        <Searchbar />
        <NavLink className={'flex'} to={"/cart"}><LuShoppingCart/><sup className="flex items-center justify-center text-white bg-red-700 rounded-full w-4 h-4">{cartProduct.length}</sup></NavLink>
      </div>

      <div className="w-1/3 flex items-center justify-between gap-5" id="links">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink className={'text-green-700 font-bold'} to={"/seller-dashboard"}>Become a seller</NavLink>
        <NavLink to={"/"}>Help and support</NavLink>
        <NavLink to={"/"}>SignUp</NavLink>
        <NavLink to={"/"}>Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
