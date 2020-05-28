import React from "react";
import { BrowserRouter as Link, useParams } from "react-router-dom";

import {modelDetailsApi} from "./api";

const ModelComponent = () => {
  const [modelDetails, setModelDetails] = React.useState([]);

  let { model } = useParams();

  React.useEffect(() => {
    modelDetailsApi(model).then((dataDetail) => {
      setModelDetails(dataDetail);
      console.log("UUU", dataDetail);
    });
  }, [model]);

  return(
    <div>
       <Link to="/brands/:href">
        <button className="btn">Back</button>
      </Link>
      <div>
        <p>Model details</p>
          {modelDetails ? (<p>{modelDetails.body.name}</p>) : (<p>Loading</p>)}
      </div>
    </div>
  )
}

export default ModelComponent;