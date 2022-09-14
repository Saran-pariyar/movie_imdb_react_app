import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const contextData = useContext(MovieContext);

  //close navbar when we click nav-link
  const closeNav = () => {
    setNavbar(!navbar);
  };

  //we will again make popular movies show when we click Home Link
  const goToHome = () => {
    closeNav();
    contextData.setEndpoint(
      "movie/popular?api_key=d3129f18427d37c5012b4f4f64b1222a"
    );
    contextData.setHeading("Popular movies");
  };

  return (
    <nav className="w-full bg-white shadow">
      <div className="text-xl justify-between px-3 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/" onClick={goToHome} className="text-2xl font-bold">
                MovieGo
              </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
                <Link
                  to="/"
                  className="text-black p-2 hover:bg-slate-600 rounded-lg hover:text-white"
                  onClick={goToHome}
                >
                  Home
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link
                  to="/explore"
                  onClick={closeNav}
                  className="text-black p-2 hover:bg-slate-600 rounded-lg hover:text-white"
                >
                  Explore Movies
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link
                  to="/about"
                  onClick={closeNav}
                  className="text-black p-2 hover:bg-slate-600 rounded-lg hover:text-white"
                >
                  About
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link
                  to="/contact"
                  onClick={closeNav}
                  className="text-black p-2 hover:bg-slate-600 rounded-lg hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
