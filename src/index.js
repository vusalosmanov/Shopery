import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/assets/index.css";
import "../src/data/index.css";
import { Provider } from "react-redux";
import store from "./reduxtoolkit/store.js";
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
