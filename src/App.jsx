import "./App.css";
import Header from "./components/Header";
import "@fontsource/poppins";
import PopularMovie from "./components/PopularMovie";
import Search from "./components/Search";
import Result from "./components/Result";
// import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Result />
    </div>
  );
}

export default App;




