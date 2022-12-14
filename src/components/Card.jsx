import { FidgetSpinner } from "react-loader-spinner";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import { Zoom } from "react-reveal";

const Card = ({ movieArrayData }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  const {theme} = useContext(MovieContext);

  const loading_spinner = (
    <div className="flex justify-center">
      <FidgetSpinner
        visible={true}
        height="360"
        width="160"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        backgroundColor="#F4442E"
        className=""
      />
    </div>
  );
  const status =
    movieArrayData.poster_path && movieArrayData.poster_path !== "";
  const navigate = useNavigate();
//go to movie detail and also scroll to top
const goToMovieDetail = (movie_id) =>{
  window.scrollTo({
    top:0
})
navigate(`/movie_detail/${movie_id}`);
}
  return (<>
  <Zoom>
    <div className="grid-col-3 hover:relative top-0  hover:-top-2 hover:cursor-pointer ease-out duration-500">
    <div className={`rounded overflow-hidden shadow-lg h-fit ${ theme === 'dark' ? 'bg-stone-900 text-white' : ""}`}>
      {status ? (
        <img
          className="h-3/4 "
          src={API_IMG + movieArrayData.poster_path}
          alt="movie poster"
        />
      ) : (
        loading_spinner
      )}
      <div className="px-2 py-0">
        <div className="font-bold text-xl m-3 text-center ">
          {movieArrayData.title.length > 20 ? movieArrayData.title.slice(0,20) + "..." : movieArrayData.title }
        </div>
        <p className={`text-gray-700  ${ theme === 'dark' ? "text-slate-100" : ""} text-center`}>
          {!movieArrayData
            ? loading_spinner
            : movieArrayData.overview.slice(0, 60)+"... "}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center">
        <span className={`inline-block  rounded-full px-2 py-1 text-sm font-semibold  mr-1 mb-2 ${ theme === 'dark' ? " bg-gray-700 text-gray-200" : "bg-gray-200 text-gray-700"}`}>
          Lang: {movieArrayData.original_language}
        </span>
        <span className={`inline-block ${ theme === 'dark' ? " bg-gray-700 text-gray-200" : "bg-gray-200 text-gray-700"}  rounded-full px-2 py-1 text-sm font-semibold  mr-1 mb-2`}>
          <AiFillStar className="text-amber-400 inline text-xl" />   
           {movieArrayData.vote_average}
        </span>
      </div>
      <span className="flex justify-center">
        <button
          onClick={()=>{goToMovieDetail(movieArrayData.id)}}
          className={`mb-3 text-center w-3/5 font-bol p-1 rounded-lg hover:opacity-75 ${ theme === 'dark' ?  "text-white bg-violet-900 hover:bg-slate-800 ": "text-white bg-blue-700 hover:bg-indigo-600"}`}
        >
          {/* ${ theme === 'dark' ? "text-white bg-black hover:bg-slate-800" : " "} */}
          More Details
        </button>
      </span>
    </div>
    </div>
    </Zoom>
    </>
  );
};

export default Card;
