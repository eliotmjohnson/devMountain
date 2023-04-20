import React from "react"
import Header from "../Header/Header"

const Child = (props) => {
	return (
		<div>
			<Header userInput={props.userInput} />
		</div>
	);
};

export default Child;
