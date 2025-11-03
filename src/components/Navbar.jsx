import React from 'react'
import {NavLink} from "react-router-dom";
import { FaRegHeart } from 'react-icons/fa';
import { LuShoppingCart } from 'react-icons/lu';
import { FiUser } from 'react-icons/fi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  return (
      <header className='flex items-center justify-between py-5 bg-[#EDE8D0] px-4 md:px-[4vw]'>
        <NavLink to='/'>
          <h1 className='text-[28px] md:text-[40px] hover:scale-[1.06] transition-all duration-300'>
            D-Vice
          </h1>
        </NavLink>
        <ul className="hidden md:flex gap-10 text-lg font-medium text-gray-700">
          <NavLink to="/" className='flex flex-col items-center gap-1 leading-[1]'>
            <p className='hover:text-black/50 transition-all duration-300'>Home</p>
          </NavLink>
          <NavLink to="/new-arrival" className='flex flex-col items-center gap-1 leading-[1]'>
            <p className='hover:text-black/50 transition-all duration-300'>New Arrival</p>
          </NavLink>
          <NavLink to="/shop/:shopId" className='flex flex-col items-center gap-1 leading-[1]'>
            <p className='hover:text-black/50 transition-all duration-300'>Shop</p>
          </NavLink>
          <NavLink to="/about" className='flex flex-col items-center gap-1 leading-[1]'>
            <p className='hover:text-black/50 transition-all duration-300'>About</p>
          </NavLink>
        </ul>
        <input type='text' placeholder='Search by Name' className='border border-gray-400 rounded-sm p-2 min-w-[320px] outline-none focus:outline-none' />
        <ul className="hidden md:flex gap-5 text-lg font-medium text-gray-700">
          <NavLink to="/wishlist" className='flex flex-col items-center gap-1 leading-[1]'>
            <p className='hover:text-black/50 transition-all duration-300'><FaRegHeart className='w-5 h-5'/></p>
          </NavLink>
          <NavLink to="/cart" className='flex flex-col items-center gap-1 leading-[1]'>
            <p className='hover:text-black/50 transition-all duration-300'><LuShoppingCart className='w-5 h-5'/></p>
          </NavLink>
          <NavLink to="/user" className='flex flex-col items-center gap-1 leading-[1]'>
            <p className='hover:text-black/50 transition-all duration-300'><FiUser className='w-5 h-5'/></p>
          </NavLink>
        </ul>

      </header>
  )
}
export default Navbar
