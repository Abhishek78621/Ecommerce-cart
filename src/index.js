import React from "react";
import ReactDOM from "react-dom/client";
import {HashRouter} from "react-router-dom";

import App from "./App";
import { Provider } from "react-redux";


import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./Reducers/cartreducer";


const store = configureStore({
  reducer: {
    cart: cartreducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </HashRouter>
);