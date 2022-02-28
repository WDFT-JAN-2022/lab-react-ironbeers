import React from "react";
import { Link } from "react-router-dom";

const Beers = ({ beers }) => {
  return (
    <div>
      {beers.map((beer) => {
        return (
          <div style={{ display: "flex" }}>
            <div>
              <img
                src={beer.image_url}
                alt="beer-picture"
                style={{ height: "80px" }}
              />
              <Link to={`/beer/${beer._id}`}> {beer.name}</Link>
            </div>
            <div>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Beers;
