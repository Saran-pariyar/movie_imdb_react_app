import React from 'react'
import hero_img from '../assets/hero-img.jpg'
const Hero = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold text-center sm:text-4xl'>Welcome to MoviesGO!</h1>
        <img src={hero_img} alt="hero" className='w-full mt-2' />
    </div>
  )
}

export default Hero