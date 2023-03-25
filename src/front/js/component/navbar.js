import React from "react";
import { Link } from "react-router-dom";

//Components

export const Navbar = () => {
	//<a href="./demo.html">
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><i className="a-regular fa-house"></i></span>
				</Link>
				<div className="ml-auto">
					<Link to="/contactForm">
						<button className="btn btn-primary">Add new Contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
