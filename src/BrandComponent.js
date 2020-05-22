import React from "react";
import {
  BrowserRouter as Link,
} from "react-router-dom";

const BrandComponent = ({ setBrandsList }) => {
  return(
    <div>
      <p>no</p>
      <Link to="/"><button className="btn">Back</button></Link>
    </div>
  )
}

export default BrandComponent;