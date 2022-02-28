import React from "react";
import { useParams, Link } from "react-router-dom";

const BeerDetails = (props) => {
  const { beerId } = useParams();

  let foundBeer = props.beerList.find((beerItem) => {
    return beerItem._id === beerId;
  });

  return (
    <div>
      <div className="container">
        <div className="card mb-3 mt-4" style={{ maxWidth: "500px" }}>
          <div className="row g-0">
            <div className="col-md-4 picContainer">
              <img
                src={foundBeer.image_url}
                className="img-fluid rounded-start beerpic"
                alt="beer"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title h2">
                  <Link
                    to={`/beers/${foundBeer._id}`}
                    className="text-decoration-none text-dark"
                  >
                    {foundBeer.name}
                  </Link>
                </h5>
                <p className="card-text text-muted">{foundBeer.tagline}</p>
                <p className="card-text">
                  <small>
                    <span className="h6">First Brewed:</span>{" "}
                    {foundBeer.first_brewed}
                  </small>
                </p>
                <p className="card-text">
                  <small>
                    <span className="h6">Attenuation Level:</span>{" "}
                    {foundBeer.attenuation_level}
                  </small>
                </p>
                <p className="card-text">
                  <small>
                    <span className="h6">Description:</span>{" "}
                    {foundBeer.description}
                  </small>
                </p>
                <p className="card-text">
                  <small>
                    <span className="h6">Contributed By:</span>{" "}
                    {foundBeer.contributed_by}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerDetails;
