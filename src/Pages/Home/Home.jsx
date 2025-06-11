import React from "react";
import Header from "../../Components/RootLyout/Header";
import Navbar from "../../Components/RootLyout/Navbar/Navbar";
import Banner from "../../Components/HomePageComponents/Banner";
import FlashSale from "../../Components/HomePageComponents/FlashSale/FlashSale";
import Category from "../../Components/HomePageComponents/Category/Category";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale />
      <Category />
    </div>
  );
};

export default Home;
