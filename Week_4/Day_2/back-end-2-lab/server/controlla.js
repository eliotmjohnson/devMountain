let housesDB = require("./db.json");
let houseId = housesDB.length + 1;

module.exports = {
	getHouses: (req, res) => {
		res.status(200).send(housesDB);
	},

	deleteHouses: (req, res) => {
		let index = +req.params.id;
		housesDB = housesDB.filter((elem) => elem.id !== index);
		res.status(200).send(housesDB);
	},

	createHouses: (req, res) => {
		let obj = req.body;
        obj.id = houseId;
		housesDB.push(obj);
		res.status(200).send(housesDB);
		houseId++;
	},
	updateHouses: (req, res) => {
        let { params, body } = req;
		let index = housesDB.findIndex((elem) => elem.id === +params.id);
		if (body.type === "plus") {
			housesDB[index].price += 10000;
		} else if (body.type === "minus") {
			housesDB[index].price -= 10000;
		}
		res.status(200).send(housesDB);
	},
};
