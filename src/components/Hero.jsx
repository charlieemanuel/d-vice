import React from 'react'
import carouselOne from '../assets/images/carousel-1.jpg'

const Hero = () => {
  return (
      <div className='flex flex-col md:flex-row items-center md:justify-between max-md:gap-6'>
        <div className='flex flex-col items-center md:items-start justify-between h-full gap-5'>
          <h2 className='text-2xl md:text-3xl'>Power Up Your World with the Latest Devices</h2>
          <p className='text-base'>
            Discover next-gen smartphones, computers, and smart home gadgets - all designed to keep you connected and in control.
          </p>
          <div className='flex flex-row items-center justify-between gap-3 md:gap-8'>
            <button className='bg-[#EDE8D0] px-10 py-1 text-lg font-semibold rounded-md cursor-pointer hover:bg-black hover:text-[#EDE8D0] transition-all duration-300'>
              Shop Now
            </button>
            <button className='bg-[#EDE8D0] px-10 py-1 text-lg font-semibold rounded-md cursor-pointer hover:bg-black hover:text-[#EDE8D0] transition-all duration-300'>
              New Arrival
            </button>
          </div>
        </div>
        <div className='h-full'>
          <img src={carouselOne} alt='image 1' width={380} className='rounded-lg'></img>
        </div>
      </div>
  )
}
export default Hero
