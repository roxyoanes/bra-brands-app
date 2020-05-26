import React from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import { braApi } from "./api";
import BrandComponent from "./BrandComponent";
import "./App.css";

function App() {
  const [brandsList, setBrandsList] = React.useState([]);

  React.useEffect(() => {
    braApi().then((data) => {
      setBrandsList(data.collection);
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <p>hey</p>
          {brandsList.map((brand) => (
            <div key={brand.name}>
              <Link to={`/brands/${brand.href.split("/").slice(4, 5)}`}>{brand.name}</Link>
            </div>
          ))}
        </Route>
        <Route path="/brands/">
          <BrandComponent
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
