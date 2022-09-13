import React from 'react'
import {TbError404} from "react-icons/tb"
const Error = () => {
  return (
    <div className='mx-1 my-20 flex  flex-col items-center'> 
        <TbError404 className='text-6xl text-red-700' />
        <p className='text-3xl text-center'> Sorry, the location you want to go does not exist!</p>
    </div>
  )
}

export default Error