import React from 'react'
import hero_img from '../assets/hero-img.jpg'
const Hero = () => {
  return (
    <div className='my-1'>
        <h1 className='text-2xl font-bold text-center sm:text-4xl'>Welcome to MoviesGO!</h1>
        <img src={hero_img} alt="hero" className='h-[25vh] mt-2 sm:w-full sm:h-auto' />
    </div>
  )
}

export default Hero