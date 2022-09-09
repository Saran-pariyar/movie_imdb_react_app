import React,{useContext} from 'react'
import { MovieContext } from '../Contexts/MovieContext'
import Card from './Card'



const Result = () => {
    
    const contextData = useContext(MovieContext)
  return (
    
  <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

{contextData.movie.map((element)=>{
// console.log(element.title );
return (
    
     <Card key={element.id} movieArrayData={element}  /> 
)
})}
    </div>
  )
}

export default Result

// {
//     "adult": false,
//     "backdrop_path": "/xVbppM1xgbskOKgOuV8fbWBWHtt.jpg",
//     "genre_ids": [
//         27,
//         9648,
//         878,
//         53
//     ],
//     "id": 762504,
//     "original_language": "en",
//     "original_title": "Nope",
//     "overview": "Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
//     "popularity": 1849.106,
//     "poster_path": "/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
//     "release_date": "2022-07-20",
//     "title": "Nope",
//     "video": false,
//     "vote_average": 7.1,
//     "vote_count": 1278
// },