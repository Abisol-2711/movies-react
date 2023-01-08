import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
// import movies from './movies.json';
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
       setMovies(data.results);
    });
  }, []);

  useEffect(
    () => {
      get("/discover/movie").then((data) => {
        setMovies(data.results);
      });
    }, []);



  // console.log(movies);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>

    // OPTION 1
    // <ul>
    //   {movies.map(function(movie){
    //     return <li key={movie.id}>{movie.title}</li>
    //   })}
    // </ul>

    // OPTION 2
    // <ul>
    // {movies.map((movie) => (
    //     <li key={movie.id}>{movie.title}</li>
    // ))}
    // </ul>
  );
}