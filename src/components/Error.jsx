import {TbError404} from "react-icons/tb"
import { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";

const Error = () => {
  const {theme} = useContext(MovieContext);

  return (
    <div className={`mx-2 my-20 flex  flex-col items-center ${ theme === 'dark' ?"bg-stone-900" : ""}`}> 
        <TbError404 className='text-6xl text-red-700' />
        <p className={`text-3xl text-center ${ theme === 'dark' ?"text-slate-300" : ""}`}> Sorry, the location you want to go does not exist!</p>
    </div>
  )
}

export default Error