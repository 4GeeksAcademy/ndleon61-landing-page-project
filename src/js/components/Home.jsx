import React from "react";
import Navbar from "./navbar/Navbar";
import Jumbotron from "./jumbotron/Jumbotron";
import CardContainer from "./cardContainer/CardContainer";
import './home.css';

function Home() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Jumbotron />
      <CardContainer/>
    </div>
  );
}

export default Home;