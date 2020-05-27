import React from "react";
import { BrowserRouter as Link, useParams } from "react-router-dom";

import { braNameApi } from "./api";

const BrandComponent = () => {
  const [brandDescription, setBrandDescription] = React.useState([]);

  let { href } = useParams();
  console.log("AAAA", href); 

  React.useEffect(() => {
    braNameApi(href).then((dataDetails) => {
      setBrandDescription(dataDetails.body);
      console.log("BBBB", dataDetails.body);
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
      </div>
    </div>
  );
};

export default BrandComponent;
