import React from "react";
import { Link, useParams } from "react-router-dom";

import { modelDetailsApi } from "./api";

const ModelComponent = () => {
  const [modelDetails, setModelDetails] = React.useState(null);

  let { model, href } = useParams();

  React.useEffect(() => {
    modelDetailsApi(href, model).then((dataDetail) => {
      setModelDetails(dataDetail);
    });
  }, [href, model]);

  return (
    <div>
      <Link to="/">
        <button className="btn">Back</button>
      </Link>
      <div>
        <p>Model details</p>
        {modelDetails ? (
          <div>
            <p>{modelDetails.body.name}</p>
            <img className="brand-img" src={modelDetails.body.main_picture} alt="model" />
            <p>{modelDetails.body.type}</p>
          </div>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default ModelComponent;
