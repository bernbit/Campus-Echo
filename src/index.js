import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GeneralProvider } from "./context/GeneralContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <GeneralProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </GeneralProvider>
    </Router>
  </React.StrictMode>,
);
