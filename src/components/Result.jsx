import { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import Card from "./Card";
import { FidgetSpinner } from "react-loader-spinner";
import Pagination from "./Pagination";
import InfiniteScroll from "react-infinite-scroll-component";

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

  const contextData = useContext(MovieContext);

  //show new dat when we scroll to the end
  //   const scrolledToEnd=()=>{
  //     if(contextData.totalPages > contextData.page && contextData.totalPages !== contextData.page){
  // //only gets new page if there is page available
  // contextData.setPage(contextData.page + 1)
  //     }
  //   }
  //   window.onscroll = function (){
  //     //check if we scrolled to bottom
  //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //       scrolledToEnd();

  //     }
  //   }

  return (
    <>
      {contextData.loading === true ? (
        <div className="flex flex-col items-center mt-12 ">
          <FidgetSpinner className="" />
          <h1
            className={`text-2xl font-bold mt-4 ${
              contextData.theme === "dark" ? "text-white" : ""
            }`}
          >
            Loading...
          </h1>
        </div>
      ) : (
        <>
          <h2 className="text-center text-4xl bg-gray-900 p-1 text-white">
            {contextData.heading}
          </h2>
          <div>
              {contextData.movie.length === 0 ? (
                <>
                  {loading_spinner}{" "}
                  <h2 className="text-4xl text-center">No results...</h2>{" "}
                  {loading_spinner}
                </>
              ) : (
                <InfiniteScroll
                  dataLength={contextData.movie.length} //This is important field to render the next data
                  //
                  next={() => {
                    contextData.setPage(contextData.page + 1);
                  }}
                  hasMore={contextData.page !== contextData.totalPages}
                  loader={loading_spinner}
                  endMessage={
                    <p className="text-center">
                      <b>That's all :)</b>
                    </p>
                  }
                  className=" "
                >
                      <div className="p-10 place-items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                  {contextData.movie.map((element) => {
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
