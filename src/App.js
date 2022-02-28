import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Home from "./components/Home";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [beers, setBeers] = React.useState([]);

  React.useEffect(() => {
    axios({
      method: "GET",
      url: "https://ih-beers-api2.herokuapp.com/beers",
    })
      .then((res) => {
        setBeers(res.data);
      })
      .catch((err) => {
        console.log("something went wrong, ", err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers beers={beers} />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
          {/* <Route path="/beers/:id" element={<FoundBeer />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
