import React from "react";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { RootMainLayout } from "./Components/RootLyout/RootmainLayout";
import ProductPage from "./Pages/Product/Index";
import ProductDetails from "./Pages/ProductDetails/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootMainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route
            path="/productdetails/:id"
            element={<ProductDetails />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
