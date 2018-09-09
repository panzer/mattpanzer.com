import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import NotFound from "./NotFound";
import App from "./App";
import ProjectDetail from "./ProjectDetail";

const Routes = props => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/project/:i" component={ProjectDetail} />
      {/* <Route component={NotFound} /> */}
    </div>
  </Router>
);

export default Routes;
