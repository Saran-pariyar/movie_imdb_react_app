import React from "react";

const Card = ({ movieArrayData }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={API_IMG + movieArrayData.poster_path}
        alt="Mountain"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movieArrayData.title}</div>
        <p className="text-gray-700 text-base">
          {movieArrayData.overview.slice(0, 147) + "... "}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Lang : {movieArrayData.original_language}
        </span>
        {/* this will show the movie is 18+ if it is adult  */}
        {movieArrayData.adult ? (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {" "}
            18+{" "}
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
