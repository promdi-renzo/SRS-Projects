import { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const BASE_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
      return res;
    }

    getData();
  }, [fetchUrl]);
  // Notice fetchUrl

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              // React caches this tag
              key={movie.id}
              className={`row__poster ${isLarge && "row__posterLarge"}`}
              src={`${BASE_URL}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
