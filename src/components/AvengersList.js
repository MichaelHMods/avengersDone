import React from "react";
import { Link } from "react-router-dom";

function AvengersList(props) {
  return (
    <div>
      {props.avengers.map(avenger => {
        return (
          <div className="char-card" key={avenger.id}>
            <img src={avenger.thumbnail} alt={avenger.name} />
            <Link to={`/avengers/${avenger.id}`}>
              <h2>{avenger.name}</h2>
            </Link>
            <p>{avenger.nickname}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AvengersList;
