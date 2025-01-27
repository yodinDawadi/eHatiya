import { Button } from '@mui/material'
import React from 'react'
import {BrowserRouter, NavLink, Router, Routes} from 'react-router-dom'
import Searchbar from './Searchbar'


const Navbar = () => {
  return (
    <nav className='flex items-center justify-center h-20 px-2'>
        <div id='text' className='flex w-1/3'>
            <p className='w-full text-center text-4xl text-green-700'>eHatiya</p>
        </div>
        <div className='w-1/3'>
            <Searchbar/>
            
        </div>
        
        <div className='w-1/3 flex items-center justify-between gap-5' id='links'>
            
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/seller"}>Become a seller</NavLink>
            <NavLink to={"/help"}>Help and support</NavLink>
            <NavLink to={"/signup"}>SignUp</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
        </div>
    </nav>
  )
}

export default Navbar