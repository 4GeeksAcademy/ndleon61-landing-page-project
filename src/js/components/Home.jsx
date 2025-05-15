import React from "react";
import {Card, Jumbotron, Navbar} from './index';

//create your first component
const Home = () => {
	return (
		<div className = "container">
			<Jumbotron />
			<Card />
			<Navbar />
		</div>
			
	);
};

export default Home;