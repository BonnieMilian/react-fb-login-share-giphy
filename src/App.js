import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./views/Home.js";
import Gifs from "./views/Gifs.js";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/gifs" component={Gifs} />
    </div>
  </Router>
);
export default App;