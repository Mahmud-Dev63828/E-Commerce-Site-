import React from "react";
import Header from "../../Components/RootLyout/Header";
import Navbar from "../../Components/RootLyout/Navbar/Navbar";
import Banner from "../../Components/HomePageComponents/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
