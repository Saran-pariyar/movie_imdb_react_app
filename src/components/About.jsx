import React from "react";
import { useNavigate } from "react-router-dom";
import profile_pic from '../assets/profile.jpeg'
import { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import { Fade, Zoom } from "react-reveal";


const About = () => {
  const concepts = [
    "Working with external API",
    "context API & useContext",
    "React-router-domv6",
    "Pagination & Infinite scrolling",
    "Reusing code/components",
    "Using EndPoints in API calls",
    "useEffect & useNavigate hooks",
    "useParams hooks"
  ];
  const navigate = useNavigate();
  const {theme} = useContext(MovieContext);

  return (
    < >
      <section className={`${ theme === 'dark' ? 'text-slate-200' : "text-gray-900"} body-font scroll-smooth`}>
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <Fade bottom>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-7">
            <img
              className="object-cover object-center rounded"
              alt="Main profile"
              src={profile_pic}
            />
          </div>
          </Fade>
          <Fade right>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Hi! My name is
              <br className="hidden lg:inline-block" />
              <span className="text-blue-700 font-bold "> Saran Pariyar</span>
            </h1>
            <p className="mb-8 leading-relaxed text-xl">
              I'm a self-taught developer from Nepal. I've been working with
              frontend development for more than 1 and a half year and love to
              work in frontend. I am making this project to improve my ReactJS
              skills as well as learn more advanced concepts.
            </p>
            <div className="flex justify-center">
              <a target="_blank"
                href="https://saran-pariyar.github.io/HTML-CSS-JS-portfolio/"
                className={`inline-flex ${ theme === 'dark' ?  "text-white bg-black hover:bg-slate-800 ": "text-white bg-blue-700 hover:bg-indigo-600"} border-0 py-2 px-6 focus:outline-none  rounded text-lg `}
              >
                View portfolio site
              </a>
            </div>
          </div>
          </Fade>
        </div>
      </section>

      {/* learned concepts  */}
      <section className="text-gray-600 body-font " id="learned">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-12">
            <h1 className={`sm:text-3xl text-2xl font-bold  text-center title-font  mb-4 ${ theme === 'dark' ? "text-white" : "  text-gray-900"}`}>
              <Fade bottom big> I learned a lot of ReactJS concepts while working on this project,
              <br /> some of them are :
              </Fade>
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {concepts.map((element,index) => {
              return (
                <div className="p-2 sm:w-1/2 w-full" key={index}>
                  <Zoom>
                  <div className={`${ theme === 'dark' ? "bg-gray-700" : "bg-gray-100"} rounded flex p-4 h-full items-center`}>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className={`${ theme === 'dark' ?"text-rose-500" : "text-blue-700"} w-6 h-6 flex-shrink-0 mr-4`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className={`${ theme === 'dark' ? "text-white" : ""} title-font font-medium`}>{element}</span>
                  </div>
                  </Zoom>
                </div>
              );
            })}
          </div>
          <Fade bottom>
          <button onClick={()=>{navigate('/contact')}} className={`flex mx-auto mt-16 border-0 py-2 px-8 focus:outline-none  rounded text-lg ${ theme === 'dark' ?  "text-white bg-black hover:bg-slate-800 ": "text-white bg-blue-700 hover:bg-indigo-600"}`}>
            Reach me out!
          </button>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default About;
