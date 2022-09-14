import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../Contexts/MovieContext";

const MovieDetail = () => {
  //   const API_IMG = "https://image.tmdb.org/t/p/w500";
  //   const poster_path = "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg"
  //   const backdrop_path = "/9JGS0O9wAr7c56VwSEPyeKT6Xac.jpg"
  const contextData = useContext(MovieContext);
  const [movieFullDetail, setMovieFullDetail] = useState({});
  const { movie_id } = useParams();
  const api = contextData.api_key;
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const fetch_movie_detail = () => {
      fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api}`)
        .then((res) => res.json())
        .then((data) => {
          setMovieFullDetail(data);
        });
    };
    fetch_movie_detail();
  }, []);

  console.log(movieFullDetail);

  return (
    <>
      <div className="flex justify-center mb-4 ">
        <div
          className="text-white movie-detail-container w-full bg-no-repeat bg-cover bg-blend-darken  h-screen bg-green-500 bg-opacity-100"
          style={{
            backgroundImage: `url(${API_IMG}${movieFullDetail.backdrop_path})`,
          }}
        >
          {/* movie id : {movie_id}  */}
          <br />
          movie title : {movieFullDetail.original_title}
          <br />
          release date : {movieFullDetail.release_date} <br />
          budget : {movieFullDetail.budget} 
          <br />
          collection : {movieFullDetail.revenue}
          <br />
          rating : {movieFullDetail.vote_average}
          <br />
          Description : {movieFullDetail.overview}
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
