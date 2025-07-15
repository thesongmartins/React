import Navbar from "./components/Navbar";
import MainContents from "./components/MainContents";
import { useState, useEffect } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const KEY = "b3f76499";

  useEffect(() => {
    setLoading(true);
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.Search);
        setMovies(data.Search);
        setLoading(false);
      });
  }, [query]);
  return (
    <>
      <Navbar movies={movies} query={query} setQuery={setQuery} />
      <MainContents movies={movies} loading={loading} />
    </>
  );
}
