import {useState} from "react";
import {NavLink} from "react-router-dom";
import { FaRegHeart } from 'react-icons/fa';
import { LuShoppingCart } from 'react-icons/lu';
import { FiUser } from 'react-icons/fi';
import { BsSearch } from 'react-icons/bs';
import { IoCloseOutline } from 'react-icons/io5';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <div className='relative top-0 flex items-center justify-between bg-[#EDE8D0] py-5 px-4 md:px-[4vw] h-[80px]'>
        {/* Logo */}
        <NavLink to='/d-vice'>
          <h1 className='mt-2 text-3xl md:text-4xl'>
            D-Vice
          </h1>
        </NavLink>

        {/* Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium text-gray-700">
          <NavLink to="/d-vice" className='flex flex-col items-center gap-1 leading-[1]'>
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

        {/* Icons */}
        <ul className="flex gap-5 text-lg font-medium text-gray-700">
          <button className='cursor-pointer hover:text-black/50'>
            <BsSearch className='w-5 h-5'/>
          </button>
          <NavLink to="/wishlist" className='relative flex flex-col items-center gap-1 leading-[1]'>
            <FaRegHeart className='w-5 h-5 hover:text-black/50 transition-all duration-300'/>
            <span className='absolute top-2 left-3 bg-black text-white text-[12px] flex items-center justify-center w-4 h-4 rounded-full'>14</span>
          </NavLink>
          <NavLink to="/cart" className='relative flex flex-col items-center gap-1 leading-[1]'>
            <LuShoppingCart className='w-5 h-5 hover:text-black/50 transition-all duration-300'/>
            <span className='absolute top-2 left-3 bg-black text-white text-[12px] flex items-center justify-center w-4 h-4 rounded-full'>6</span>
          </NavLink>
          <NavLink to="/user" className='flex flex-col items-center gap-1 leading-[1]'>
            <FiUser className='w-5 h-5 hover:text-black/50 transition-all duration-300'/>
          </NavLink>
          <button onClick={() => setToggle(true)} className='flex items-center justify-center'>
            <HiOutlineMenuAlt3 className='w-6 h-6 cursor-pointer md:hidden hover:text-black/50 transition-all duration-300' />
          </button>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-0 right-0 overflow-hidden bg-[#EDE8D0] transition-all ${toggle ? 'w-full h-full z-20' : 'w-0 h-0'}`}>
        <div className='flex flex-col text-gray-700'>
          <div onClick={() => setToggle(false)} className='flex items-center p-3'>
            <button>
              <IoCloseOutline className='w-8 h-8 cursor-pointer' />
            </button>
            <p className='text-lg font-medium'>Close</p>
          </div>
          <hr className='py-2' />
          <NavLink to='/d-vice' onClick={() => setToggle(false)} className='py-2 pl-6 text-lg'>
            <p>Home</p>
          </NavLink>
          <NavLink to='/new-arrival' onClick={() => setToggle(false)} className='py-2 pl-6 text-lg'>
            <p>New Arrival</p>
          </NavLink>
          <NavLink to='/shop/:shopId' onClick={() => setToggle(false)} className='py-2 pl-6 text-lg'>
            <p>Shop</p>
          </NavLink>
          <NavLink to='/about' onClick={() => setToggle(false)} className='py-2 pl-6 text-lg'>
            <p>About</p>
          </NavLink>
          <hr className='mt-3 py-2' />
          <div className='p-3 flex items-center justify-between'>
            <p className='border w-full'></p>
            <h2 className='w-full text-center'>Happy Shopping</h2>
            <p className='border w-full'></p>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Navbar
