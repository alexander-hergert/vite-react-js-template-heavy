import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/normalize.css";
import "./styles/index.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./api/apiSlice.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
