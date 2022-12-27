import { MovieCard } from './MovieCard';
import movies from './movies.json';
import styles from './MoviesGrid.module.css';

export function MoviesGrid() {
    // console.log(movies);
  return (
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

    <ul className= {styles.moviesGrid}>
    {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
    ))}
    </ul>
  );
}
