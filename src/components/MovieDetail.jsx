import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../Contexts/MovieContext";
import { AiFillStar } from "react-icons/ai";
import { FidgetSpinner } from "react-loader-spinner";

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
  }, [movieFullDetail]);
//get similar movies : 
//  const get_similar_movies = `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${contextData.api_key}`


  //to get only one digit after point cause it returns like this : 8.345
  const rating = String(movieFullDetail.vote_average).slice(0, 3);
  const year = String(movieFullDetail.release_date).slice(0,4)

  const spinner = (<div className="flex justify-center">
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
    </div>);
  return (
<>
    {movieFullDetail.original_title ? <>
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
                    {movieFullDetail.genres ?
                      movieFullDetail.genres.map((item)=>{
<<<<<<< HEAD
                        return <span key={item.id}   className="text-xs inline-block py-1 px-1.5 mr-1 leading-none text-center whitespace-nowrap  font-bold bg-purple-600 text-white rounded">{item.name}</span>
                      }): ""
=======
                        return <span key={item.name} className="text-xs inline-block py-1 px-1.5 mr-1 leading-none text-center whitespace-nowrap  font-bold bg-purple-600 text-white rounded">{item.name}</span>
                      })
>>>>>>> temporary_branch
                    }
                    
                  </span>
                </div>
                <p className="leading-relaxed ">
                  {movieFullDetail.overview}
                </p>
<<<<<<< HEAD
                <p className="text-gray-300 mt-1 px-1 font-bold bg-lime-900 inline-block ">Length: {movieFullDetail.runtime}min</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5 flex-wrap">
                  Production: 
                  {movieFullDetail.production_companies ?  movieFullDetail.production_companies.map((element)=>{
                    return <p key={element.id} className="inline-block px-1 mx-1 bg-zinc-700 whitespace-nowrap">{element.name}</p>
                  })
                : <p className="inline-block px-1 mx-1 bg-zinc-700">N/F</p>
                }
=======
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5 whitespace-nowrap flex-wrap">
                  <span>Production : </span> 
                  {
                    movieFullDetail.production_companies?.map((element)=>{
                      return  (<span key={element.id} className="inline-flex items-center mx-1 justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded">{element.name}</span>)
                    })
                  }
                  
>>>>>>> temporary_branch
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl ">
                    Get movie
                  </span>
<<<<<<< HEAD
                  <a target="_blank" href={`https://www.imdb.com/title/${movieFullDetail.imdb_id}`} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    View in IMDB
=======
                  <a rel="noreferrer" href={`https://www.imdb.com/title/${movieFullDetail.imdb_id}`} target="_blank" className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                   View in IMDB
>>>>>>> temporary_branch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <p className="bg-black text-white text-2xl p-2 text-center">Similar movies : </p>
      <div className="container">
        
      </div>
=======
    </> : <div className="mt-4">{spinner} </div>}
>>>>>>> temporary_branch
    </>
  );
};

export default MovieDetail;
