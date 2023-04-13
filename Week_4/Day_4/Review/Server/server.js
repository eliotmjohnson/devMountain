const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const {
	getNames,
	getNum,
	deleteName,
	addName,
	updateNum,
} = require("./controller");

app.get("/api/names", getNames);
app.get("/api/num", getNum);

app.delete("/api/names/:index", deleteName);

app.post("/api/names", addName);

app.put("/api/num", updateNum);

app.listen(4000, console.log("Server up and running on port 4000"));
