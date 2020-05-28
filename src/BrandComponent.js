/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { BrowserRouter as Link, useParams } from "react-router-dom";

import { braNameApi, braModelsApi } from "./api";


const BrandComponent = () => {
  const [brandDescription, setBrandDescription] = React.useState(null);
  const [braModels, setBraModels] = React.useState([]);

  let { href } = useParams();

  React.useEffect(() => {
    braNameApi(href).then((dataDetails) => {
      setBrandDescription(dataDetails);
    });
  }, [href]);

  React.useEffect(() => {
    braModelsApi(href).then((dataModels) => {
      setBraModels(dataModels.collection);
    });
  }, [href]);

    const mapped = () => {
    const arr = braModels.map((obj) => obj.href.split("/").slice(4, 5));
    console.log("eeee",arr);
  } 

  return (
    <div>
      <Link to="/">
        <button className="btn">Back</button>
      </Link>
      <div className="brand-container">
        {brandDescription ? (
          <div>
            <a
              href={brandDescription.body.official_url}
              rel="noreferrer"
              target="_blank"
            >
              {brandDescription.body.name}
            </a>
            <img
              className="brand-img"
              src={brandDescription.body.logo}
              alt="img"
            />
          </div>
        ) : (
          <p>Loading</p>
        )}
        <h4>Bra Models</h4>
        {braModels.map((obj) => (
          <div key={obj.name}>
            <Link to={`/brands/brandDescription.body.name/models/${obj.href.split("/").slice(4, 5)}`}>{obj.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandComponent;
