import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./containers/Routes";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.createRoot(document.getElementById("root")).render(<Routes />);
registerServiceWorker();
