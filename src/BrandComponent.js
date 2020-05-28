import React from "react";
import { BrowserRouter as Link, useParams } from "react-router-dom";

import { braNameApi, braModelsApi } from "./api";

const BrandComponent = () => {
  const [brandDescription, setBrandDescription] = React.useState([]);
  const [braModels, setBraModels] = React.useState([]);

  let { href } = useParams();

  React.useEffect(() => {
    braNameApi(href).then((dataDetails) => {
      setBrandDescription(dataDetails.body);
    });
  }, [href]);

  React.useEffect(() => {
    braModelsApi(href).then((dataModels) => {
      setBraModels(dataModels.collection);
    });
  }, [href]);

  return (
    <div>
      <Link to="/">
        <button className="btn">Back</button>
      </Link>
      <div className="brand-container">
        <a href={brandDescription.official_url} rel="noreferrer" target="_blank" >{brandDescription.name}</a>
        <img className="brand-img" src={brandDescription.logo} alt="img" />
        <h4>Bra Models</h4>
        {braModels.map((obj) => (
          <div key={obj.name}>
            <a href={obj.bratabase_url} rel="noreferrer" target="_blank">{obj.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandComponent;
