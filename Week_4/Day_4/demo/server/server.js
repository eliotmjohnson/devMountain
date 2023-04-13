const express = require("express");
const cors = require("cors");
const bcrpyt = require("bcryptjs");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors());

let db = [];

app.post("/input", (req, res) => {
	let { string, userName } = req.body;

	let hash = bcrpyt.hashSync(string);

	let user = {
		userName: userName,
		password: hash,
	};
	db.push(user);
});

app.post("/login", (req, res) => {
	let { userName, password } = req.body;
	let user = db.filter((elem) => elem.userName === userName);

	if (bcrpyt.compareSync(password, user[0].password)) {
		res.status(200).send("user logged in");
	} else {
		res.status(200).send("invalid loggin info");
	}
});

app.listen(4000, console.log("Server up and running on port 4000"));
