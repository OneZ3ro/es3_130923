// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Myfooter from "./components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TVShows from "./components/TVShows";
import Movies from "./components/Movies";
import RecentlyAdded from "./components/RecentlyAdded";
import MyList from "./components/MyList";
import MovieDetails from "./components/MovieDetails";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/movies/" element={<Movies />} />
          <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
          <Route path="/search/" element={<SearchPage />} />
          <Route path="/recAdd" element={<RecentlyAdded />} />
          <Route path="/myList" element={<MyList />} />
        </Routes>
        <Myfooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
