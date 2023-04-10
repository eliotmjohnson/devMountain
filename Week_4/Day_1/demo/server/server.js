const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const inventory = [
	"milk",
	"eggs",
	"bread",
	"bacon",
	"lettuce",
	"butter",
	"cup of grease",
	"cheetos",
	"ketchup",
	"mayo",
];

// app.get("/api/inventory/", (req, res) => {
// 	res.status(200).send(inventory);
// });

app.get("/api/inventory/:index", (req, res) => {
	let index = +req.params.index;
	res.status(200).send(inventory[index]);
});

app.get("/api/inventory", (req, res) => {
	if (req.query.item) {
		const filteredItems = inventory.filter((item) =>
			item.includes(req.query.item)
		);
		res.status(200).send(filteredItems);
	} else res.status(200).send(inventory);
});

app.listen(5050, () => console.log("Server is live on port 5050"));
