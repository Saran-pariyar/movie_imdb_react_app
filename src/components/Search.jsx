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
            className={`text-xl block p-4 pl-10 w-full bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${contextData.theme === 'dark' ? " " : ""} `}
            placeholder="Search movies"
            required
            onChange={onChangeHandler}
            value={query}
          />
          <button
            type="submit"
            className={`text-xl text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 py-2  ${contextData.theme === 'dark' ? "bg-blue-900" : ""}`}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
