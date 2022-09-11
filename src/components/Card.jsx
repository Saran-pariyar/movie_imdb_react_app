import React from "react";
import { FidgetSpinner } from "react-loader-spinner";

const Card = ({ movieArrayData }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  
  const loading_spinner = (
    <div className="flex justify-center">
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        backgroundColor="#F4442E"
        className=""
      />
    </div>
  );
  const status = movieArrayData.poster_path && movieArrayData.poster_path != "";

  return (
    <div className="rounded overflow-hidden shadow-lg">
      { 
      // if(!movieArrayData.poster_path || movieArrayData.poster_path == "" ) { return loading_spinner} 
      // else { return <img className="w-full" src=`API_IMG + movieArrayData.poster_path` alt="movie poster" />}
      }
      {
        status ? (<img className="w-full" src={API_IMG + movieArrayData.poster_path} alt="movie poster" />) : loading_spinner
      }
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movieArrayData.title}</div>
        <p className="text-gray-700 text-base">
          {!movieArrayData
            ? loading_spinner
            : movieArrayData.overview.slice(0, 147) + "... "}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Lang : {movieArrayData.original_language}
        </span>
        {/* this will show the movie is 18+ if it is adult  */}
        {movieArrayData.adult ? (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            18+
          </span>
        ) : (
          ""
        )}
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Ratings : {movieArrayData.vote_average}
        </span>
      </div>
    </div>
  );
};

export default Card;
