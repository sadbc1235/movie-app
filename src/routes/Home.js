import { useState, useEffect, useCallback } from "react";
import Movie from "../components/Movie";

function Home() {
  const url = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`;
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = useCallback(async () => {
    const json = await (await fetch(url)).json();
    setMovies(json.data.movies);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getMovies();
    console.log("get movie");
  }, [getMovies]);
  return (
    <div>
      {loading ? (
        <h1>Loading ... </h1>
      ) : (
        <div>
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
