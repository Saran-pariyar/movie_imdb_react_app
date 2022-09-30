import React from 'react'
import hero_img from '../assets/hero-img.jpg'
import Tada from 'react-reveal/Tada';
import { Fade } from 'react-reveal';

const Hero = () => {
  return (
    <div className='my-1 flex flex-col justify-center'>
        <Tada> <h1 className='text-2xl font-bold text-center sm:text-4xl'>Welcome to MoviesGO!</h1></Tada>
        <Fade bottom > <img src={hero_img} alt="hero" className='h-[25vh] mt-2 sm:w-full sm:h-auto' /></Fade>
    </div>
  )
}

export default Hero