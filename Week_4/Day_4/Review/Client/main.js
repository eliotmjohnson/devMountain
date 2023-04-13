// Getting Items From Front-End
const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("ul");

const numContainer = document.querySelector("h1");
const btns = document.querySelectorAll("button");

// Get Requests

const getNames = () => {
	axios
		.get("http://localhost:4000/api/names")
		.then((res) => {
			console.log(res.data);
			displayNames(res.data);
		})
		.catch((error) => console.log(error));
};

const getNum = () => {
	axios
		.get("http://localhost:4000/api/num")
		.then((res) => {
			console.log(res.data);
			displayNum(res.data);
		})
		.catch((error) => console.log(error));
};

getNames();
getNum();

// Display Functions

const displayNames = (arr) => {
	list.innerHTML = "";
	arr.forEach((name, index) => {
		const listItem = document.createElement("li");
		const nameSpan = document.createElement("span");
		const deleteBtn = document.createElement("button");

		nameSpan.textContent = name;
		deleteBtn.textContent = "X";
		deleteBtn.id = index;

		deleteBtn.addEventListener("click", deleteName);

		listItem.appendChild(nameSpan);
		listItem.appendChild(deleteBtn);
		list.appendChild(listItem);
	});
};

const displayNum = (obj) => {
	let { num } = obj;
	numContainer.textContent = num;
};

// Delete Request

const deleteName = (evt) => {
	console.log(evt.target);

	axios
		.delete(`http://localhost:4000/api/names/${evt.target.id}`)
		.then((res) => {
			displayNames(res.data);
		})
		.catch((error) => console.log(error));
};

// Post Request

const addName = (evt) => {
	evt.preventDefault();

	let body = {
		name: input.value,
	};

	axios
		.post("http://localhost:4000/api/names", body)
		.then((res) => {
			displayNames(res.data);
		})
		.catch((error) => console.log(error));

	input.value = "";
};

form.addEventListener("submit", addName);

// Put Request

const updateNum = (evt) => {
	let type = evt.target.id;

	axios
		.put("http://localhost:4000/api/num", { type })
		.then((res) => {
			displayNum(res.data);
		})
		.catch((error) => console.log(error));
};

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", updateNum);
}
