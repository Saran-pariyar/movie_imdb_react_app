import React,{useContext} from 'react'
import { MovieContext } from '../Contexts/MovieContext'

const Search = () => {
  const contextData = useContext(MovieContext)
    return (
    <div>
        {contextData.data}
    </div>
  )
}

export default Search