import React from "react";
import Movie from "./Movie";
import classes from "./MovieList.modul.css";

function MovieList(props) {
  return (
    <ul className={classes["movies-list"]}>
      {props.movie.map((cur) => (
        <Movie
          key={cur.id}
          title={cur.title}
          openingText={cur.openingText}
          releaseDate={cur.releaseDate}
        />
      ))}
    </ul>
  );
}

export default MovieList;
