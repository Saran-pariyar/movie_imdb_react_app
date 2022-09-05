import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';


function App() {
  const [movie, setMovie] = useState([])
  const getData = () =>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '60203c07d4msh049515770003155p1b0e34jsn7cb07bea9362',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };
  
  fetch('https://imdb8.p.rapidapi.com/auto-complete?q=thor', options)
    .then(response => response.json())
    .then(response => setMovie(response.d))
    .catch(err => console.error(err));
    // setMovie(response)
}
useEffect(()=>{
  getData();
},[])
console.log(movie);

  return (
    <div className="App">
      <Card movie={movie} />
    </div>
  );
}

export default App;
