import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Blogs from "./pages/Blogs";
import SinglePackage from "./pages/SinglePackage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/package" element={<SinglePackage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
