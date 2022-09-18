import React, { useContext, useState } from "react";
import { MovieContext } from "../Contexts/MovieContext";

const Search = () => {
  const contextData = useContext(MovieContext);
  const [query, setQuery] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    contextData.setEndpoint(
      `search/movie?api_key=${contextData.api_key}&query=${query}`
    );
    contextData.setHeading("Results for :" + query);
    contextData.setPage(1);
  };
  //when we type input in search section
  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className=" p-4 sm:px-4">
      <form onSubmit={onSearchSubmit}>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className={`text-xl block p-4 pl-10 w-full  rounded-lg border  focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${contextData.theme === 'dark' ? " bg-gray-800 border-slate-500" : "bg-gray-50 border-gray-300 text-slate-700"} `}
            placeholder="Search movies"
            required
            onChange={onChangeHandler}
            value={query}
          />
          <button
            type="submit"
            className={`text-xl  absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none  font-medium rounded-lg  px-4 py-2  ${contextData.theme === 'dark' ? "text-white bg-black hover:bg-slate-500 hover:text-black" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 "}`}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
