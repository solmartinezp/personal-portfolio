import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './pages/About';
import { Layout } from './pages/Layout';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
