import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [movie, setMovie] = useState([]);
  const [endPoint, setEndPoint] = useState("thor");
  const limit = 20
  const [finalPoint, setFinalPoint] = useState("thor");
  let apiKey = process.env.REACT_APP_API_KEY;
  // console.log(apiKey);
  // console.log("hello");

  useEffect(() => {

  const getData = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };
    
    fetch(`https://imdb8.p.rapidapi.com/title/v2/find?title=+${endPoint}&limit=+${limit}&sortArg=moviemeter%2Casc`, options)
      .then((response) => response.json())
      .then((response) => setMovie(response.results))
      .catch((err) => console.error(err));
    // setMovie(response)
    console.log(movie);
    
  };
    getData();
  }, [finalPoint]);
//this func will get data from the search input and save it to endPoint state var
  const onChangeHandler = (e) => {
    setEndPoint(e.target.value);
  };
  console.log(movie);
//when we click the submit, the endPoint value will be assigned to final point and the document wil rerender with query
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFinalPoint(endPoint);
  };
  return (
    <div className="App">
      <form action="" onSubmit={onSubmitHandler}>
        <input type="text" value={endPoint} onChange={onChangeHandler} />
        <button type="submit">Submit</button>
      </form>
      <Card movie={movie} />
    </div>
  );
}

export default App;




