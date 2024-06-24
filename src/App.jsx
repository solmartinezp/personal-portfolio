import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
