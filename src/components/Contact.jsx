import { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";

const Contact = () => {
  const {theme} = useContext(MovieContext);

  return (
    <section className={`${ theme === 'dark' ? "text-white" : "text-gray-600"} body-font relative`}>
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-col text-center w-full mb-8">
      <h1 className={` ${ theme === 'dark' ? "text-white" : "text-gray-600"}}sm:text-3xl text-2xl font-medium title-font mb-3`}>Contact Me</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">If you want to connect with me, you can send me an email.</p>
    </div>
    <form method='POST' action="https://formsubmit.co/adbdb4a244c22f51b876dae686e54c40" className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label HTMLfor="name" className={`${ theme === 'dark' ? "text-white" : "text-gray-600"}leading-7 text-sm `}>Name</label>
            <input required type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label HTMLfor="email" className={`${ theme === 'dark' ? "text-white" : "text-gray-600"}leading-7 text-sm `}>Email</label>
            <input required type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label HTMLfor="message" className={`${ theme === 'dark' ? "text-white" : "text-gray-600"}leading-7 text-sm `}>Message</label>
            <textarea required id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className={`flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg ${ theme === 'dark' ? "text-white bg-black hover:bg-slate-800" : " "} `} type='submit'>Submit</button>
        </div>
        
      </div>
    </form>
  </div>
</section>
  )
}

export default Contact