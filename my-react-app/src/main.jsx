import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import BookContextProvider from "./Context/BookContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookContextProvider>
      <Router>
        <App />
      </Router>
    </BookContextProvider>
  </React.StrictMode>
);
