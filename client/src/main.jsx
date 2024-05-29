import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { customFetch } from "./utils/customFetch.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer position="top-center" />
    <App />
  </>
);