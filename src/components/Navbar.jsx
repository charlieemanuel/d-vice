import React from 'react'
import {NavLink} from "react-router-dom";
import { FaRegHeart } from 'react-icons/fa';
import { LuShoppingCart } from 'react-icons/lu';
import { FiUser } from 'react-icons/fi';
import { BsSearch } from 'react-icons/bs';
import { IoCloseOutline } from 'react-icons/io5';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  return (
      <header className='flex items-center justify-between py-5 bg-[#EDE8D0] px-4 md:px-[4vw] h-[80px]'>

        {/* Logo */}
        <NavLink to='/'>
          <h1 className='mt-2 text-3xl md:text-4xl'>
            D-Vice
          </h1>
        </NavLink>

        {/* Menus */}
        <ul className="hidden md:flex gap-10 text-lg font-medium text-gray-700">
          <NavLink to="/" className='flex flex-col items-center gap-1 leading-[1]'>
            <p className='hover:text-black/50 transition-all duration-300'>Home</p>
          </NavLink>
          <NavLink to="/d-vice/new-arrival" className='flex flex-col items-center gap-1 leading-[1]'>
            <p className='hover:text-black/50 transition-all duration-300'>New Arrival</p>
          </NavLink>
          <NavLink to="/d-vice/shop/:shopId" className='flex flex-col items-center gap-1 leading-[1]'>
            <p className='hover:text-black/50 transition-all duration-300'>Shop</p>
          </NavLink>
          <NavLink to="/d-vice/about" className='flex flex-col items-center gap-1 leading-[1]'>
            <p className='hover:text-black/50 transition-all duration-300'>About</p>
          </NavLink>
        </ul>

        {/* Icons */}
        <ul className="hidden md:flex gap-5 text-lg font-medium text-gray-700">
          <button className='cursor-pointer hover:text-black/50'>
            <BsSearch className='w-5 h-5'/>
          </button>
          <NavLink to="/d-vice/wishlist" className='relative flex flex-col items-center gap-1 leading-[1]'>
            <p className='hover:text-black/50 transition-all duration-300'><FaRegHeart className='w-5 h-5'/></p>
            <span className='absolute top-2 left-3 bg-black text-white text-[12px] flex items-center justify-center w-4 h-4 rounded-full'>14</span>
          </NavLink>
          <NavLink to="/d-vice/cart" className='relative flex flex-col items-center gap-1 leading-[1]'>
            <p className='hover:text-black/50 transition-all duration-300'><LuShoppingCart className='w-5 h-5'/></p>
            <span className='absolute top-2 left-3 bg-black text-white text-[12px] flex items-center justify-center w-4 h-4 rounded-full'>6</span>
          </NavLink>
          <NavLink to="/d-vice/user" className='flex flex-col items-center gap-1 leading-[1]'>
            <p className='hover:text-black/50 transition-all duration-300'><FiUser className='w-5 h-5'/></p>
          </NavLink>
        </ul>
      </header>
  )
}
export default Navbar
