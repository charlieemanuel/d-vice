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

        {/* Banner Small Screen */}
        <div className='md:hidden relative w-full max-md:max-h[200px] md:h-[200px] rounded-lg banner overflow-hidden hover:scale-[1.01] transition-all duration-300'>
          <img src={heroBanner} alt='banner' className='object-bottom w-full' ></img>
          <div className='absolute bottom-3 right-3 space-y-3 text-right'>
            <h2 className='text-lg sm:text-2xl text-white text-shadow-lg text-shadow-black'>Big Tech. Bigger Savings.</h2>
            <h3 className='text-md sm:text-lg text-white text-shadow-lg text-shadow-black'>
              Get up to 35% off on selected devices this week only.
            </h3>
          </div>
        </div>

        {/* Text, CTA, Carousel */}
        <div className='flex flex-col md:flex-row items-center md:justify-between max-md:gap-6 md:space-x-2 max-md:my-5'>
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
          <div className='h-full hover:scale-[1.02] transition-all duration-300'>
            <img src={carouselOne} alt='image 1' width={380} className='rounded-lg'></img>
          </div>
        </div>

        {/* Banner Medium Screen */}
        <div className='max-md:hidden relative w-full max-md:max-h[200px] md:h-[200px] rounded-lg my-5 banner overflow-hidden hover:scale-[1.01] transition-all duration-300'>
          <img src={heroBanner} alt='banner' className='object-bottom w-full' ></img>
          <div className='absolute bottom-3 right-3 space-y-3 text-right'>
            <h2 className='text-2xl md:text-3xl text-white text-shadow-lg text-shadow-black'>Big Tech. Bigger Savings.</h2>
            <h3 className='text-xl md:text-2xl text-white text-shadow-lg text-shadow-black'>
              Get up to 35% off on selected devices this week only.
            </h3>
          </div>
        </div>

        {/* Cards */}
        <div className='flex flex-col items-center justify-center my-5'>

          {/* Cards Title */}
          <div className='flex items-center justify-evenly w-full'>
            <p className='max-md:hidden h-[1.5px] w-full bg-black mt-2'></p>
            <h3 className='text-xl w-full flex items-center justify-center'>Explore By Categories</h3>
            <p className='max-md:hidden h-[1.5px] w-full bg-black mt-2'></p>
          </div>

          {/* Cards Items */}
          <div className='grid grid-cols-2 lg:grid-cols-4 py-5 gap-16 md:gap-x-60 lg:gap-30 xl:gap-50'>
            <div className='max-md:w-[130px] md:w-[150px] h-[200px] border border-gray-400 flex flex-col items-center justify-center rounded-lg overflow-hidden hover:scale-[1.02] transition-all duration-300'>
              <div className='w-full h-3/4 category-one'></div>
              <a href='' className='w-full h-3/12 flex items-center justify-center text-center text-base underline underline-offset-2 hover:text-black/50 transition-all duration-300 px-1'>Mobiles and Tablets</a>
            </div>

            <div className='max-md:w-[130px] md:w-[150px] h-[200px] border border-gray-400 flex flex-col items-center justify-center rounded-lg overflow-hidden hover:scale-[1.02] transition-all duration-300'>
              <div className='w-full h-3/4 category-two'></div>
              <a href='' className='w-full h-3/12 flex items-center justify-center text-center text-base underline underline-offset-2 hover:text-black/50 transition-all duration-300 px-1'>Audio Devices</a>
            </div>

            <div className='max-md:w-[130px] md:w-[150px] h-[200px] border border-gray-400 flex flex-col items-center justify-center rounded-lg overflow-hidden hover:scale-[1.02] transition-all duration-300'>
              <div className='w-full h-3/4 category-three'></div>
              <a href='' className='w-full h-3/12 flex items-center justify-center text-center text-base underline underline-offset-2 hover:text-black/50 transition-all duration-300 px-1'>Desktops and Laptops</a>
            </div>

            <div className='max-md:w-[130px] md:w-[150px] h-[200px] border border-gray-400 flex flex-col items-center justify-center rounded-lg overflow-hidden hover:scale-[1.02] transition-all duration-300'>
              <div className='w-full h-3/4 category-four'></div>
              <a href='' className='w-full h-3/12 flex items-center justify-center text-center text-base underline underline-offset-2 hover:text-black/50 transition-all duration-300 px-1'>Smart Home Devices</a>
            </div>
          </div>
        </div>
      </section>


  )
}
export default Hero
