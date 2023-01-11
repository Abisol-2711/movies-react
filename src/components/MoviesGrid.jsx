import { useEffect, useState } from "react";
// import { useQuery } from "../hooks/useQuery";
import { useLocation } from "react-router-dom";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
// import movies from './movies.json';
import styles from "./MoviesGrid.module.css";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export function MoviesGrid({search}) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const location = useLocation();

  console.log(location);
  // console.log(location.search);

  //   console.log(search);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page" + page
      : "/discover/movie/?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page > data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
