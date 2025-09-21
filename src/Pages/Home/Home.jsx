import React from "react";

import Banner from "../../Components/HomePageComponents/Banner/Banner";
import FlashSale from "../../Components/HomePageComponents/FlashSale/FlashSale";
import Category from "../../Components/HomePageComponents/Category/Category";
import BestSellilng from "../../Components/HomePageComponents/BestSelling/Index";
import Experience from "../../Components/HomePageComponents/Experience/Index";
import ExploreProduct from "../../Components/HomePageComponents/exploreProduct/Index";
import NewArrival from "../../Components/HomePageComponents/NewArrival/Index";
import CustomerService from "../../Components/HomePageComponents/CustomerService/Index";

const Home = () => {
  return (
    <div>
      <Banner />
      <FlashSale />
      <Category />
      <BestSellilng />
      <Experience timeDuration={5} />
      <ExploreProduct />
      <NewArrival />
      <CustomerService />
    </div>
  );
};

export default Home;
