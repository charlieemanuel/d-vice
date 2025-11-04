import React from 'react';
import carouselOne from '../assets/images/carousel-1.jpg';
import heroBanner from '../assets/images/home-banner-2.jpg';
import categoryOne from '../assets/images/home-category-1.jpg';
import categoryTwo from '../assets/images/home-category-2.jpg';
import categoryThree from '../assets/images/home-category-3.jpg';
import categoryFour from '../assets/images/home-category-4.jpg'

const Hero = () => {
  return (
      <section>

        {/* Text, CTA, Carousel */}
        <div className='flex flex-col md:flex-row items-center md:justify-between max-md:gap-6 md:space-x-2'>
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

          {/* Carousel Images */}
          <div className='h-full'>
            <img src={carouselOne} alt='image 1' width={380} className='rounded-lg'></img>
          </div>
        </div>

        {/* Banner */}
        <div className='relative w-full max-md:max-h[200px] md:h-[200px] rounded-lg my-5 banner overflow-hidden'>
          <img src={heroBanner} alt='banner' className='object-bottom w-full' ></img>
          <div className='absolute bottom-3 right-3 space-y-3 text-right'>
            <h2 className='text-2xl md:text-3xl text-white text-shadow-lg text-shadow-black'>Big Tech. Bigger Savings.</h2>
            <h3 className='text-xl md:text-2xl text-white text-shadow-lg text-shadow-black'>
              Get up to 35% off on selected devices this week only.
            </h3>
          </div>
        </div>

        {/* Cards */}
        <div className='flex flex-col items-center justify-center'>

          {/* Cards Title */}
          <div className='flex items-center justify-evenly w-full'>
            <p className='h-[1.5px] w-full bg-black mt-2'></p>
            <h3 className='text-xl w-full flex items-center justify-center'>Explore By Categories</h3>
            <p className='h-[1.5px] w-full bg-black mt-2'></p>
          </div>

          {/* Cards Item */}
          <div className='grid grid-cols-2 md:grid-cols-4 py-5 gap-16 md:gap-60'>
            <div className='w-[120px] h-[200px] rounded-lg overflow-hidden'>
              <div>
                <img src={categoryOne} alt='image 1'></img>
              </div>
              <p className='text-center underline'>Mobiles and Tablet</p>
            </div>
            <div className='h-[200px] rounded-lg overflow-hidden'>
              <div>
                <img src={categoryTwo} alt='image 1'></img>
              </div>
              <p className='text-center underline'>Audio Devices</p>
            </div>
            <div className='h-[200px] rounded-lg'>
              <div>
                <img src={categoryThree} alt='image 1'></img>
              </div>
              <p className='text-center underline'>Desktops and Laptops</p>
            </div>
            <div className='w-[120px] h-[200px] rounded-lg'>
              <div className=''>
                <img src={categoryFour} alt='image 1'></img>
              </div>
              <p className='text-center underline'>Smart Home Devices</p>
            </div>
          </div>
        </div>
      </section>


  )
}
export default Hero
