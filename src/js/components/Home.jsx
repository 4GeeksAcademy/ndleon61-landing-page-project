import React from "react";
import { Card, Jumbotron, Navbar } from './index';
import './home.css';

function Home() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Jumbotron />
      <Card />
    </div>
  );
}

export default Home;