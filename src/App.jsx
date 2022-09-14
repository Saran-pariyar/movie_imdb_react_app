import "./assets/App.css";
import Header from "./components/Header";
import "@fontsource/poppins";
import Search from "./components/Search";
import Result from "./components/Result";
import { MovieContext } from "./Contexts/MovieContext";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./components/Explore";
import Navbar from "./components/Navbar";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MovieDetail from "./components/MovieDetail";

function App() {
  //contains array of the movie result
  const [movie, setMovie] = useState([]);
  const [data, setData] = useState("nothing");
  const [search, setSearch] = useState("");
  const api_key = "d3129f18427d37c5012b4f4f64b1222a"
  //stores link data/the request that we want to send, it will contain link to search item or get movies
  const [endpoint, setEndpoint] = useState(
    `movie/popular?api_key=${api_key}`
  );
  //the default value if popular movies and will be changed when we search or change categories
  const [heading, setHeading] = useState("Popular movies");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  
  useEffect(() => {
    const base_url = "https://api.themoviedb.org/3/";
    const API_URL = `${base_url}${endpoint}&page=${page}`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results);
        setTotalPages(data.total_pages);
      });
  }, [endpoint, page]);

  return (
    <div className="App">
      <div className="min-h-screen ">
      <MovieContext.Provider 
        value={{
          movie,
          setMovie,
          data,
          api_key,
          setData,
          search,
          setSearch,
          endpoint,
          setEndpoint,
          heading,
          setHeading,
          page,
          setPage,
          totalPages,
          setTotalPages,
        }}
      >
        <BrowserRouter >
          <Header />
          <Navbar />
          <Routes>
            {/* <Search />
      <Result /> */}
            <Route
              path="/"
              element={
                <>
                  <Search />
                  <Result />
                </>
              }
            />
            {/* this /movie_imdb_react_app  path works when we're in home  */}
            <Route
              path="/movie_imdb_react_app"
              element={
                <>
                  <Search />
                  <Result />
                </>
              }
            />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/movie_detail/:movie_id" element={<MovieDetail />} />
            <Route exact path="/*" element={<Error />} />



          </Routes>
          {/* <Card /> */}
        </BrowserRouter>
      </MovieContext.Provider>
      <BackToTop />
      </div>
      <Footer />
    </div>
  );
}

export default App;
