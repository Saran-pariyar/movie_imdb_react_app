import React, { useContext, useState } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import Fade from 'react-reveal/Fade';
import Hero from "./Hero";

const Search = () => {
  const {setEndpoint,setHeading,setPage,api_key,theme,showHeroImage,setShowHeroImage} = useContext(MovieContext);
  const [query, setQuery] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
     setEndpoint(
      `search/movie?api_key=${ api_key}&query=${query}`
    );
     setHeading("Results for :" + query);
     setPage(1);
     //hide hero section image when we search anything
     setShowHeroImage(false)
  };
  //when we type input in search section
  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
    <div className=" p-4 sm:px-4">
      <Fade top>
      <form onSubmit={onSearchSubmit}>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className={`text-xl block p-4 pl-10 w-full  rounded-lg border  focus:ring-blue-500 focus:border-blue-500    dark:focus:ring-blue-500 dark:focus:border-blue-500 ${ theme === 'dark' ? " bg-gray-800 border-slate-500 tex-white" : "bg-gray-50 border-gray-300 text-slate-700 dark:text-black dark:border-gray-600 dark:placeholder-gray-700"} `}
            placeholder="Search movies"
            required
            onChange={onChangeHandler}
            value={query}
          />
          <button
            type="submit"
            className={`text-xl  absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none  font-medium rounded-lg  px-4 py-2  ${ theme === 'dark' ? "text-white bg-black hover:bg-slate-500 hover:text-black" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 "}`}
          >
            Search
          </button>
        </div>
      </form>
      </Fade>
    </div>
    {
      showHeroImage && <Hero/>
    }
     
    </>
  );
};

export default Search;
