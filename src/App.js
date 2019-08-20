import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

import Home from "./components/Home";
import AvengersList from "./components/AvengersList";
import AvengerPage from "./components/AvengerPage";
import data from "./data.js";

import "./styles.css";

function App() {
  const [avengers, setAvengers] = useState([]);

  useEffect(() => {
    setAvengers(data);
  }, []);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> <Link to="/avengers">Avengers</Link>
      </nav>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/avengers"
        render={props => <AvengersList {...props} avengers={avengers} />}
      />
      <Route
        path="/avengers/:id"
        render={props => <AvengerPage {...props} avengers={avengers} />}
      />
    </div>
  );
}

export default App;
