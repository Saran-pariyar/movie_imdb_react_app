import Result from "./Result";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import { Flip, Slide } from "react-reveal";

const Explore = () => {
  const {api_key,setEndpoint,setHeading,setPage,theme} = useContext(MovieContext);
  //this will turn true when we select a genre
  const [showResult, setShowResult] = useState(false);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${ api_key}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres);
      });
  }, []);
  const onClickHandler = (id, name) => {
     setEndpoint(
      `discover/movie?api_key=d3129f18427d37c5012b4f4f64b1222a&with_genres=${id}`
    );
    setShowResult(true);
     setHeading("Category : " + name);
     setPage(1);
  };
  return (
    <section className="explore my-3">
      <h1 className="m-4 text-3xl"><Slide left> Categories</Slide> </h1>
      <Flip top>
      <div className={` mt-3 overflow-x-scroll h-32  flex  items-center  border p-2 sm:block sm:h-auto sm:overflow-x-visible sm:border-none ${ theme === 'dark' ? "bg-slate-900" :"bg-slate-400 sm:bg-white"}`}>
        {genres.map((element) => {
          return (
            <div key={element.id}>
              <button
                onClick={() => {
                  onClickHandler(element.id, element.name);
                }}
                
                className={` font-bold uppercase px-7 py-3 rounded-full outline-none focus:outline-none mr-1  ease-linear transition-all duration-150 sm:mb-4 ${ theme === 'dark' ? "text-white bg-slate-500 border-white hover:bg-white hover:text-slate-500" : "text-slate-500 border bg-white border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600"}`}
                type="button"
              >
                {element.name}
              </button>
            </div>
          );
        })}
      </div>
      </Flip>
      {showResult ? <Result /> : <><img src="https://hdwallpaperim.com/wp-content/uploads/2017/08/22/99262-anime-colorful-original_characters.jpg" alt="explore" className="sm:h-auto" /></>}
    </section>
  );
};

export default Explore;
