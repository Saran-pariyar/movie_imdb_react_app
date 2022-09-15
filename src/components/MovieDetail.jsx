import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../Contexts/MovieContext";
import { AiFillStar } from "react-icons/ai";

const MovieDetail = () => {
  const contextData = useContext(MovieContext);
  const [movieFullDetail, setMovieFullDetail] = useState({});
  const { movie_id } = useParams();
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const fetch_movie_detail = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${contextData.api_key}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovieFullDetail(data);
        });
    };
    fetch_movie_detail();
  }, []);
//get similar movies : 
 const get_similar_movies = `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${contextData.api_key}`


  //to get only one digit after point cause it returns like this : 8.345
  const rating = String(movieFullDetail.vote_average).slice(0, 3);
  const year = String(movieFullDetail.release_date).slice(0,4)
  return (
    <>
      <div className="flex justify-center  ">
        <div
          className="text-white movie-detail-container w-full bg-no-repeat bg-cover bg-blend-saturation  h-auto bg-slate-900 bg-opacity-90"
          style={{
            backgroundImage: `url(${API_IMG}${movieFullDetail.backdrop_path})`,
          }}
        >
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="movie_poster"
                className="lg:w-1/3 w-auto h-auto object-cover object-center rounded"
                src={API_IMG + movieFullDetail.backdrop_path}
              />
              <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-white">
                <h2 className="text-sm title-font    tracking-widest">
                  {year} <span className="text-xs inline-block py-1 px-1.5 mr-1 leading-none text-center whitespace-nowrap  font-bold bg-amber-800 text-white rounded">{movieFullDetail.status}</span>
                </h2>
                <h1 className=" text-3xl title-font font-medium mb-1">
                  {movieFullDetail.title}
                </h1>
                <div className="flex mb-4 flex-wrap text-center justify-center sm:justify-start">
                  <span className="flex items-center ">
                    <span className=" flex items-center ">
                      <AiFillStar className="text-amber-400 " />
                      <p>Ratings : </p> {rating.slice(0, 3)}
                    </span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2  sm:border-l-2 sm:border-gray-200  flex-wrap">
                    {
                      movieFullDetail.genres.map((item)=>{
                        return <span class="text-xs inline-block py-1 px-1.5 mr-1 leading-none text-center whitespace-nowrap  font-bold bg-purple-600 text-white rounded">{item.name}</span>
                      })
                    }
                    
                  </span>
                </div>
                <p className="leading-relaxed">
                  {movieFullDetail.overview}
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl ">
                    Get movie
                  </span>
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
