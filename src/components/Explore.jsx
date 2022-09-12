import Result from "./Result";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";

const Explore = () => {
  const contextData = useContext(MovieContext);
  //this will turn true when we select a genre
  const [showResult, setShowResult] = useState(false);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=d3129f18427d37c5012b4f4f64b1222a&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres);
      });
  }, []);
  const onClickHandler = (id, name) => {
    // https://api.themoviedb.org/3/discover/movie?api_key={{tmdb_api_key}}&with_genres=16
    contextData.setEndpoint(
      `discover/movie?api_key=d3129f18427d37c5012b4f4f64b1222a&with_genres=${id}`
    );
    setShowResult(true);
    contextData.setHeading("Category : " + name);
    contextData.setPage(1)
  };
  return (
    <section className="explore m-3">
      <h1 className="m-4 text-3xl">Categories </h1> 
      <div className="overflow-x-scroll h-32  flex  items-center  border px-2 sm:block sm:h-auto sm:overflow-x-visible sm:border-none bg-slate-400 sm:bg-white">
      {genres.map((element) => {
        return (
          <>
          <button
            onClick={() => {
              onClickHandler(element.id, element.name);
            }}
            key={element.id}
            className="  text-slate-500 border bg-white border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase px-7 py-3 rounded-full outline-none focus:outline-none mr-1  ease-linear transition-all duration-150 sm:mb-4"
            type="button"
          >
            {element.name}
          </button>
          </>
        );
      })}
      </div>
      {showResult ? <Result /> : ""}
    </section>
  );
};

export default Explore;
