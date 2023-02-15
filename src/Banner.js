import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {
  const descriptioLenght = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    (async function fetchData() {
      const res = await axios.get(requests.fetchComedyMovies);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
    })();
  }, []);
    console.log(movie);
 
  return (
    <div
      className="Banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat : "no-repeat"
      }}
    >
      <div className="container">
        <div className="banner_contents">
          <h1 className="Movie_name">{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="Banner__Button">
            <button className="Banner_button">Play</button>
            <button className="Banner_button">My List</button>
          </div>
          <h1 className="Banner_discription">
            {descriptioLenght(
              `${movie?.overview}`,
              150//dcdcdcdcdc
            )}
          </h1>
          <h1>ratting : {movie?.vote_average}</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
