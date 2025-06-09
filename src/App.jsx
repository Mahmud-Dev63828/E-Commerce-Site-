import React from "react";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
