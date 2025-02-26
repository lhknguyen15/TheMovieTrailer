import "./App.css";
import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import { MovieProvider } from "./context/MovieProvider";
import MovieSearch from "./components/MovieSearch";

function App() {
  const [movieNow, setMovieNow] = useState([]);
  const [movieUpcoming, setMovieUpcoming] = useState([]);
  const [SearchMovie, setSearchMovie] = useState([]);

  const handleSearch = async (value) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=vi&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    };
    if (value === "") return setSearchMovie([]);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setSearchMovie(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url1 =
        "https://api.themoviedb.org/3/movie/now_playing?language=vi&page=1";
      const url2 =
        "https://api.themoviedb.org/3/movie/upcoming?language=vi&page=1";
      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);
      const data1 = await res1.json();
      const data2 = await res2.json();

      setMovieNow(data1.results);
      setMovieUpcoming(data2.results);
    };
    fetchMovie();
  }, []);
  return (
    <>
      <MovieProvider>
        <div className="bg-black pb-8">
          <Header onSearch={handleSearch} />
          <Banner />
          {SearchMovie.length === 0 && (
            <MovieList title="Phim Hot" data={movieNow.slice(0, 10)} />
          )}
          {SearchMovie.length === 0 && (
            <MovieList
              title="Phim sắp chiếu"
              data={movieUpcoming.slice(0, 10)}
            />
          )}

          {SearchMovie.length > 0 && <MovieSearch data={SearchMovie} />}
        </div>
      </MovieProvider>
    </>
  );
}

export default App;
