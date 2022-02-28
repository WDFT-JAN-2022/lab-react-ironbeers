import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Hey there cowfolks.</p>
      <Link to="/beers">Find Beers</Link>
      <Link to="/random-beer">Random Beer</Link>
      <Link to="/new-beer">Create New Beer</Link>
    </div>
  );
};

export default Home;
