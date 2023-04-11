const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const {
	getHouses,
	deleteHouses,
	createHouses,
	updateHouses,
} = require("./controlla");

app.get("/api/houses", getHouses)
app.post("/api/houses", createHouses)
app.delete("/api/houses/:id", deleteHouses)
app.put("/api/houses/:id", updateHouses)

app.listen(5080, console.log("Server is up and running on port 5080"));
