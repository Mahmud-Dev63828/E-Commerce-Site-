import React from "react";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { RootMainLayout } from "./Components/RootLyout/RootmainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootMainLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
