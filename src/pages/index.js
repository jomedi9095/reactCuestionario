import React, { useState } from "react";
import { Navbar, HomeCard } from "../components";
import { useData } from "../context/DataContext";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeCard />
    </div>
  );
};

export default Home;
