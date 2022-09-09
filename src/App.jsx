import "./App.css";
import Header from "./components/Header";
import "@fontsource/poppins";
import PopularMovie from "./components/PopularMovie";
import Search from "./components/Search";
import Result from "./components/Result";
// import Card from "./components/Card";
import { MovieContext } from "./Contexts/MovieContext";
import { useState,useEffect } from "react";
import Card from "./components/Card";

function App() {
  //contains array of the movie result
  const [movie, setMovie] = useState([])
  const [data, setData] = useState('nothing')
  const [search, setSearch] = useState("")
//api 
const api_key = process.env.REACT_APP_API_KEY 
// console.log(api_key);

const API_URL=`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      // console.log(data);
      setMovie(data.results);
    })
  }, [search])

  return (
    <div className="App">
      <MovieContext.Provider value={{movie,setMovie,data,setData,search,setSearch}} >
      <Header />
      <Search />
      <Result />
      {/* <Card /> */}
      </MovieContext.Provider>
    </div>
  );
}

export default App;




