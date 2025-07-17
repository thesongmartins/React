import Navbar from "./components/Navbar";
import MainContents from "./components/MainContents";
import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Numresults from "./components/Numresults";
import ListBox from "./components/ListBox";
import WatchedBox from "./components/WatchedBox";
import Loader from "./components/Loader";
import MovieList from "./components/MovieList";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const KEY = "b3f76499";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!res.ok)
          throw new Error(
            "Something went wrong with fetching movies!! Please try again."
          );

        const data = await res.json();
        console.log(data);

        if (data.Response === "False") throw new Error("MOVIE NOT FOUND!!");

        setMovies(data.Search);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
      }
    };
    fetchMovies();
  }, [query]);
  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Numresults movies={movies} />
      </Navbar>
      {/* <Navbar movies={movies} query={query} setQuery={setQuery} /> */}
      <MainContents>
        <ListBox>
          {/* {loading && <Loader />} */}
          {!loading ? <MovieList movies={movies} /> : <Loader />}
          {error && <ErrorMessage message={error} />}
        </ListBox>
        <WatchedBox />
      </MainContents>
    </>
  );
};
export default App;
