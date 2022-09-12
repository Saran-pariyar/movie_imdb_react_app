import { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";

const Pagination = () => {
    const contextData = useContext(MovieContext);
    const {totalPages,page,setPage} = contextData;

  //pagination
  const nextPage = () =>{
    if(totalPages > page){
      setPage(page+1)
    }
  }
  const prevPage = ()=>{
    if( page > 1){
      setPage(page-1)
    }}
  return (
    <>
    <button onClick={prevPage}>Previous</button>
      <button onClick={nextPage}>Next</button></>
  )
}

export default Pagination