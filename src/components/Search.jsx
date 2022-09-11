import React, { useContext, useState } from "react";
import { MovieContext } from "../Contexts/MovieContext";

const Search = () => {
  const contextData = useContext(MovieContext);

  const [query, setQuery] = useState("");

  //func when we submit form
  const onSearchSubmit = (e) => {
    e.preventDefault();
    contextData.setEndpoint(`search/movie?api_key=d3129f18427d37c5012b4f4f64b1222a&query=${query}`)

  };
  //when we type input in search section
  const onChangeHandler = (e) => {
    setQuery(e.target.value);
    //now the movie will be searched when we type 
    contextData.setEndpoint(`search/movie?api_key=d3129f18427d37c5012b4f4f64b1222a&query=${query}`)

  };
  return (
    <div className="p-4 sm:px-4">
      {/* {contextData.data} */}
      <h1 className=" text-3xl text-center mt-0 mb-2 ">Search your favorite film : </h1>

      <form onSubmit={onSearchSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search movies"
            required
            onChange={onChangeHandler}
            value={query}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
