import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Home from "./components/Home";
import Header from "./components/Header";
import axios from "axios";
import BeerDetails from "./components/BeerDetails";

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
          <Route
            path="/beer/:beerId"
            element={<BeerDetails beerList={beers} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
