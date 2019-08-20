import React from "react";

function AvengerMovies(props) {
  return (
    <ul>
      {props.movies.map(movie => {
        return <li key={movie}>{movie}</li>;
      })}
    </ul>
  );
}

export default AvengerMovies;
