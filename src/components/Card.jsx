import React from 'react'

const Card = ({movieArrayData}) => {
const API_IMG="https://image.tmdb.org/t/p/w500/";

  return (

  
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={API_IMG + movieArrayData.poster_path} alt="Mountain" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movieArrayData.title}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
   



  )
}

export default Card