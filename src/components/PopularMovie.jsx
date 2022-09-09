import { useEffect, useState } from "react";
import "../style/PopularMovie.css"

const PopularMovie = () => {
const [data, setData] = useState([])
  let apiKey = process.env.REACT_APP_API_KEY;
  useEffect(()=>{
    const api = 'd3129f18427d37c5012b4f4f64b1222a'
    const url ='https://api.themoviedb.org/3/movie/550?api_key=d3129f18427d37c5012b4f4f64b1222a'

    const myAsyncFunction = async () => {
        let response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=d3129f18427d37c5012b4f4f64b1222a');
        let data = await response.json();
        console.log(data);
        return data;
      };
      myAsyncFunction()
})
  return (
    <div>PopularMovie</div>
  )
}

export default PopularMovie