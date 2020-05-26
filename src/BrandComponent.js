import React from "react";
import {
  BrowserRouter as Link,
} from "react-router-dom";

import { braNameApi } from "./api";

const BrandComponent = () => {
  const [brandName, setBrandName] = React.useState([]);

  React.useEffect(() => {
    braNameApi().then((data) => {
      setBrandName(data);
    });
  }, []);

  return(
    <div>
      <p>no</p>
      <Link to="/"><button className="btn">Back</button></Link>
    </div>
  )
}

export default BrandComponent;