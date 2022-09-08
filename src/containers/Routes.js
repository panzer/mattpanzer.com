import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import NotFound from "./NotFound";
import App from "./App";
import ProjectDetail from "./ProjectDetail";

const MyRoutes = props => (
  <Router>
    <Routes>
      <Route exact path="/" element={<App/>} />
      <Route path="/project/:i" element={<ProjectDetail/>} />
      {/* <Route component={NotFound} /> */}
    </Routes>
  </Router>
);

export default MyRoutes;
