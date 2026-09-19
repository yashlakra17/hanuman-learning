import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Chalisa from "./pages/Chalisa/Chalisa";
import Baan from "./pages/Baan/Baan";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chalisa" element={<Chalisa />} />
        <Route path="/baan" element={<Baan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;