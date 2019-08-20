import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Avengers Database</h1>
      <h4>Danger this is classified information!</h4>
      <Link to="/avengers">ENTER</Link>
    </div>
  );
}

export default Home;
