import React from "react";
import { useNavigate } from "react-router-dom";
import profile_pic from '../assets/prof.jpeg'

const About = () => {
  const concepts = [
    "Working with external API",
    "useContext & useEffect hooks",
    "React-router-domv6",
    "Pagination",
    "Reusing code/components",
    "Using EndPoints in API calls",
  ];
  const navigate = useNavigate();
  return (
    < >
      <section className="text-gray-900 body-font scroll-smooth">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-7">
            <img
              className="object-cover object-center rounded"
              alt="Profile picture"
              src={profile_pic}
            />
          </div>
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
              <a
                href="#learned_concepts"
                className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg "
              >
                Learnings from this project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* learned concepts  */}
      <section className="text-gray-600 body-font " id="learned_concepts">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold  text-center title-font text-gray-900 mb-4">
              I learned a lot of ReactJS concepts while working on this project,{" "}
              <br /> some of them are :
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {concepts.map((element) => {
              return (
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="text-blue-700 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">{element}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <button onClick={()=>{navigate('/contact')}} className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Reach me out!
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
