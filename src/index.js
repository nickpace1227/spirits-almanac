// Node modules
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
// Relative imports
import "./globalStyles.css";
import Router from "./components/Router";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
