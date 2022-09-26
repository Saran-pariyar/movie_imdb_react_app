import { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import Card from "./Card";
import { FidgetSpinner } from "react-loader-spinner";
import Pagination from "./Pagination";
import InfiniteScroll from "react-infinite-scroll-component";
import { Slide } from "react-reveal";

const Result = () => {
  const loading_spinner = (
    <div className="flex justify-center ">
      <FidgetSpinner
        visible={true}
        height="150"
        width="150"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        backgroundColor="#F4442E"
      />
    </div>
  );

  const {loading,theme,heading,movie,page,totalPages,setPage} = useContext(MovieContext);

  return (
    <>
      { loading === true ? (
        <div className="flex flex-col items-center mt-12 ">
          <FidgetSpinner className="" />
          <h1
            className={`text-2xl font-bold mt-4 ${
               theme === "dark" ? "text-white" : ""
            }`}
          >
            Loading...
          </h1>
        </div>
      ) : (
        <>
          <h2 className="text-center text-4xl bg-gray-900 p-1 text-white font-bold">
        <Slide left>
            { heading}
          </Slide>
          </h2>
          <div>
              { movie.length === 0 ? (
                <>
                  {loading_spinner}
                  <h2 className="text-4xl text-center">No results...</h2>{" "}
                  {loading_spinner}
                </>
              ) : (
                <InfiniteScroll
                  dataLength={ movie.length} //This is important field to render the next data
                  //
                  next={() => {
                     setPage( page + 1);
                  }}
                  hasMore={ page !==  totalPages}
                  loader={loading_spinner}
                  endMessage={
                    <p className="text-center">
                      <b>That's all :)</b>
                    </p>
                  }
                  className=" "
                >
                      <div className="p-10 place-items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                  { movie.map((element) => {
                    return <Card key={element.id} movieArrayData={element} />;
                  })}
                  </div>
                </InfiniteScroll>
              )}
            {
              //now we don't need pagination anymore
              /* <Pagination /> */
            }
          </div>
        </>
      )}
    </>
  );
};

export default Result;
