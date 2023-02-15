import React from "react";

function LinkImg({ movie }) {
  return (
    <div
      className="rows"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.poster_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width  : "250px",
        height : '250px',
        margin : " 25px ",
        display : 'flex', 
        flexDirection : 'row'
      }}
    >
      <h1 style={{color : "red"}}>{movie.name}</h1>
    </div>
  );
}

export default LinkImg;
