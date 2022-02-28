import React from "react";
import { useParams, Link } from "react-router-dom";
import SpecificBeer from "./SpecificBeer";

const BeerDetails = (props) => {
  const { beerId } = useParams();

  let foundBeer = props.beerList.find((beerItem) => {
    return beerItem._id === beerId;
  });

  return (
   <SpecificBeer foundBeer={foundBeer}/>
  );
};

export default BeerDetails;
