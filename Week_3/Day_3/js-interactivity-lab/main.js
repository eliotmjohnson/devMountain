const message = document.querySelector("#message");
let timer;

const addMovie = (event) => {
	event.preventDefault();
	let inputField = document.querySelector("input");
	let movie = document.createElement("li");
	let movieTitle = document.createElement("span");

	movieTitle.textContent = inputField.value;
	movieTitle.addEventListener("click", crossOffMovie);
	movieTitle.addEventListener("mouseover", hoverOver);
	movieTitle.addEventListener("mouseout", hoverOff);
	movie.appendChild(movieTitle);
	document.querySelector("ul").appendChild(movie);
	inputField.value = "";

	let deleteBtn = document.createElement("button");
	deleteBtn.textContent = "X";
	movie.appendChild(deleteBtn);
	deleteBtn.addEventListener("click", deleteMovie);
	deleteBtn.addEventListener("mouseover", buttonHover);
	deleteBtn.addEventListener("mouseout", buttonHoverOff);
};

document.querySelector("form").addEventListener("submit", addMovie);

const deleteMovie = (event) => {
	clearTimeout(timer);
	message.classList.remove("hide");
	event.target.parentNode.remove();
	message.style.color = "red";
	message.textContent = `${event.target.parentNode.children[0].textContent} Deleted!!`;
	revealMessage();
};
const buttonHover = (event) => {
	event.target.style.boxShadow = "0px 0px 10px 4px red, 0px 0px 3px red";
	event.target.style.background = "red";
};

const buttonHoverOff = (event) => {
	event.target.style.boxShadow = "none";
	event.target.style.color = "white";
	event.target.style.background = "teal";
};

const hoverOver = (event) => {
	event.target.classList.add("hovered");
};

const hoverOff = (event) => {
	event.target.classList.remove("hovered");
};

const crossOffMovie = (event) => {
	clearTimeout(timer);
	message.classList.remove("hide");
	message.style.color = "blue";
	event.target.classList.toggle("checked");
	if (event.target.classList.contains("checked")) {
		message.textContent = `${event.target.textContent} Watched!! 😀`;
	} else {
		message.textContent = `${event.target.textContent} added back? 🤨`;
	}
	revealMessage();
};

const revealMessage = () => {
	timer = setTimeout(() => {
		message.classList.add("hide");
	}, 1000);
};

let title = document.querySelector("#title");

const changeTitleColor = (event) => {
	event.target.style.color = "#ff0000";
	event.target.textContent = "Stop freaking touching me!!! 😡 😡";
};

title.addEventListener("mouseover", changeTitleColor);
title.addEventListener("mouseout", (event) => {
	event.target.style.color = "black";
	event.target.textContent = "Movie List";
});
