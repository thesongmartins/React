import Movie from "./Movie";
// import { useEffect, useState } from "react";

// const tempMovieData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     Title: "The Matrix",
//     Year: "1999",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     Title: "Parasite",
//     Year: "2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];

const MovieList = ({ movies, loading }) => {
  // const [movies, setMovies] = useState([]);

  // const KEY = "f84fc31d";

  // useEffect(() => {
  //   fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=intersellar`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.search));
  // }, []);
  return (
    <ul className="list">
      {loading ? (
        <p className="loader">Loading...</p>
      ) : (
        movies?.map((movie) => <Movie movie={movie} key={movie.imdbID} />)
      )}
    </ul>
  );
};

export default MovieList;
