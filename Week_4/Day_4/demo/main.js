const input = document.querySelector("#input");
const userName = document.querySelector("#user-name");
const button = document.querySelector("#input-button");
const userLogin = document.querySelector("#user-login");
const passLogin = document.querySelector("#pass-login");
const loginButton = document.querySelector("#login-button");

const submitHandler = () => {
	let body = {
		userName: userName.value,
		string: input.value,
	};

	axios
		.post("http://localhost:4000/input", body)
		.then((res) => {})
		.catch((error) => console.log(error));

	input.value = "";
	userName.value = "";
};

const loginHandler = () => {
	let body = {
		userName: userLogin.value,
		password: passLogin.value,
	};

	axios
		.post("http://localhost:4000/login", body)
		.then((res) => {})
		.catch((error) => console.log(error));
	
	userLogin.value = "";
	passLogin.value = "";
};

button.addEventListener("click", submitHandler);
loginButton.addEventListener("click", loginHandler);
