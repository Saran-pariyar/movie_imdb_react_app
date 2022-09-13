import { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";

const Pagination = () => {
  const contextData = useContext(MovieContext);
  const { totalPages, page, setPage } = contextData;

  //pagination
  const nextPage = () => {
    if (totalPages > page) {
      setPage(page + 1);
      backToTop();
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      backToTop();
    }
  };

  //backToTop function
  const backToTop = () => {
    window.scrollTo({
      top: 35,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div class="flex justify-around m-4 text-base sm:text-2xl">
        <button
          onClick={prevPage}
          class="p-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 sm:px-8 rounded-l"
        >
          Prev
        </button>
        <button class=" p-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 sm:px-8 rounded-r">
          Page : {page}/{totalPages}
        </button>
        <button
          onClick={nextPage}
          class="p-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 sm:px-8 rounded-r"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
