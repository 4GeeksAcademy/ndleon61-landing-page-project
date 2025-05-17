import React from "react";
import {Card, Jumbotron, Navbar} from './index';
import './home.css';

//create your first component
function Home() {
	return (
	<div container-fluid>
		<Navbar/>
		<Jumbotron/>
		<Card/>	
	</div>

	);
}

export default Home;