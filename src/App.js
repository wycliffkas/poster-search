import React from "react";
import Home from "./containers/Home";
import "./assets/css/style.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

export default App;
