import React from "react";
import { render } from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import ApolloProvider from "./config/persistor.config";

const ROOT = document.getElementById("root");

render(
  <ApolloProvider>
    <App />
  </ApolloProvider>,
  ROOT
);
