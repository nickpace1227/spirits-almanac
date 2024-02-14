import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./rootStyles.css";
import SpiritsAlmanac from "./components/Router";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <SpiritsAlmanac />
  </Provider>
);
