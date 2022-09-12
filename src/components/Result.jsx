import React, { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import Card from "./Card";
import { FidgetSpinner } from "react-loader-spinner";
import Pagination from "./Pagination";


const Result = () => {
  const loading_spinner = (
    <div className="flex justify-center ">
      <FidgetSpinner
        visible={true}
        height="150"
        width="150"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        backgroundColor="#F4442E"
        className=""
      />
    </div>
  );

  const contextData = useContext(MovieContext);
  console.log(contextData.movie);

  return (
    <>
      <h2 className="text-center text-4xl bg-gray-900 p-1 text-white">
        {contextData.heading}
      </h2>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {contextData.movie.length === 0 ? (
          <>
            {loading_spinner}{" "}
            <h2 className="text-4xl text-center">Ruko jara sabar karo...</h2>{" "}
            {loading_spinner}{" "}
          </>
        ) : (
          contextData.movie.map((element) => {
            // console.log(element.title );
            return <Card key={element.id} movieArrayData={element} />;
          })
        )}
      </div>
      <Pagination />
    </>
  );
};

export default Result;

// {
//     "adult": false,
//     "backdrop_path": "/xVbppM1xgbskOKgOuV8fbWBWHtt.jpg",
//     "genre_ids": [
//         27,
//         9648,
//         878,
//         53
//     ],
//     "id": 762504,
//     "original_language": "en",
//     "original_title": "Nope",
//     "overview": "Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
//     "popularity": 1849.106,
//     "poster_path": "/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
//     "release_date": "2022-07-20",
//     "title": "Nope",
//     "video": false,
//     "vote_average": 7.1,
//     "vote_count": 1278
// },
