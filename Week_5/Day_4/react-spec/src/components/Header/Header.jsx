import React from "react";

const Header = (props) => {
	return (
		<div>
			<h2>Child Component</h2>
			<h3>{props.userInput}</h3>
		</div>
	);
};

export default Header;